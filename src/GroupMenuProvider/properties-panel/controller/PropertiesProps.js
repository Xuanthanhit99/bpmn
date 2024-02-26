import { is } from 'bpmn-js/lib/util/ModelUtil';

import React, { Component } from 'react';

import '../PropertiesView.css';
import ButtonSvg from '../../../menu-left/img/Button.svg'


export default class PropertiesProps extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElements: [],
      element: null,
      checkModal : "1"
    };

    this.setCheckModal = this.setCheckModal.bind(this);
  }

  setCheckModal(number){
    this.setState({checkModal: number})
  }

  componentDidMount() {

    const {
      modeler
    } = this.props;

    modeler.on('selection.changed', (e) => {

      const {
        element
      } = this.state;

      this.setState({
        selectedElements: e.newSelection,
        element: e.newSelection[0]
      });
    });


    modeler.on('element.changed', (e) => {

      const {
        element
      } = e;

      const {
        element: currentElement
      } = this.state;

      if (!currentElement) {
        return;
      }

      // update panel, if currently selected element changed
      if (element.id === currentElement.id) {
        this.setState({
          element
        });
      }

    });
  }

  render() {

    const {
      modeler
    } = this.props;

    const {
      selectedElements,
      element,
    } = this.state;

    return (
      <div>

        {
          selectedElements.length === 1
            && <ElementProperties modeler={ modeler } element={ element } checkModalFlex={this.setCheckModal} checkModal={this.state.checkModal}/>
        }

        {/* {
          selectedElements.length === 0
            && <span>Please select an element.</span>
        }

        {
          selectedElements.length > 1
            && <span>Please select a single element.</span>
        } */}
      </div>
    );
  }

}


function ElementProperties(props) {

  let {
    element,
    modeler,
    checkModal,
    checkModalFlex
  } = props;

  if (element.labelTarget) {
    element = element.labelTarget;
  }

  function updateName(name) {
    const modeling = modeler.get('modeling');

    modeling.updateLabel(element, name);
  }

  function updateTitle(title) {
    const modeling = modeler.get('modeling');

    modeling.updateProperties(element, {
      'custom:title': title,
    });
  }

  function updateDescription(description) {
    const modeling = modeler.get('modeling');

    modeling.updateProperties(element, {
      'custom:description': "description"
    });
  }

  function btnUpdateData(title) {
    const modeling = modeler.get('modeling');
    modeling.updateProperties(element, {
      'custom:description': "description",
      'custom:title': "title",
      // di: {
      //   id: 'đ'
      // }
    });
    const elementRegistry = modeler.get("elementRegistry");
  }



  function makeMessageEvent() {

    const bpmnReplace = modeler.get('bpmnReplace');

    bpmnReplace.replaceElement(element, {
      type: element.businessObject.$type,
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    });
  }

  function makeServiceTask(name) {
    const bpmnReplace = modeler.get('bpmnReplace');

    bpmnReplace.replaceElement(element, {
      type: 'bpmn:ServiceTask'
    });
  }

  function attachTimeout() {
    const modeling = modeler.get('modeling');
    const autoPlace = modeler.get('autoPlace');
    const selection = modeler.get('selection');

    const attrs = {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    };

    const position = {
      x: element.x + element.width,
      y: element.y + element.height
    };

    const boundaryEvent = modeling.createShape(attrs, position, element, { attach: true });

    const taskShape = append(boundaryEvent, {
      type: 'bpmn:Task'
    });

    selection.select(taskShape);
  }

  function isTimeoutConfigured(element) {
    const attachers = element.attachers || [];

    return attachers.some(e => hasDefinition(e, 'bpmn:TimerEventDefinition'));
  }

  function append(element, attrs) {

    const autoPlace = modeler.get('autoPlace');
    const elementFactory = modeler.get('elementFactory');

    var shape = elementFactory.createShape(attrs);

    return autoPlace.append(element, shape);
  };

  const funModalOpen = () => {
    document.getElementsByClassName('djs-overlay-context-pad')[0].style.display = "block"
    document.getElementsByClassName('Modal')[0].style.display = "none"
    // makeServiceTask()
    btnUpdateData()
  }

  return (
    <div>
      <div className='Modal element-properties' key={ element.id }>
          <div className='Modal-body'>
          <div className='Modal-off'>
            <div>Activity Properties</div>
            <img onClick={() => funModalOpen()} src={ButtonSvg} alt=''/>
          </div>
            <div className='Modal-container'>
              <div className='Modal-container--header'>
                <div onClick={() => checkModalFlex("1")} className={`Modal-item ${checkModal === "1" && "Modal-item--hover"}`}>Definitions</div>
                <div onClick={() => checkModalFlex("2")} className={`Modal-item ${checkModal === "2" && "Modal-item--hover"}`}>Case Labels</div>
                <div onClick={() => checkModalFlex("3")} className={`Modal-item ${checkModal === "3" && "Modal-item--hover"}`}>Timing Control</div>
                <div onClick={() => checkModalFlex("4")} className={`Modal-item ${checkModal === "4" && "Modal-item--hover"}`}>Notifications</div>
              </div>
              <div className='Modal-container--body'>
                {checkModal === "1" && 
                  <div className='container-show'>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>ID:</h3>
                      <input className='body-task--curs' type="text" id="fname" name="fname" value={ element.id }/>
                    </div>
                      {
                    is(element, 'bpmn:Task') &&
                    <div className='body-task'>
                        <h3 className='body-task--txt'>Title *:</h3>
                        <input className='body-task--curs' value={ element.businessObject.get('custom:title') } onChange={ (event) => {
                          updateTitle("event.target.value")
                        } } />
                    </div>
                      }
                    {/* </div> */}
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Description:</h3>
                      <textarea onChange={ (event) => {
                          updateDescription(event.target.value)
                        } } className='body-task--area' value={ element.businessObject.get('custom:description') } id="w3review" name="w3review" rows="4" cols="50" placeholder=''/>
                    </div> 
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Variable for Case priority:</h3>
                      <input className='body-task--curs' type="text" id="fname" name="fname" />
                    </div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Routing Screen Template:</h3>
                      <select  name="cars" id="cars" className='body-task--sele'>
                        <option value="volvo">default</option>
                      </select>
                    </div>
                  </div>
                }
                {checkModal === "2" &&
                  <div className='container-show'>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Title:</h3>
                      <input className='body-task--curs' type="text" id="fname" name="fname"/>
                    </div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Description:</h3>
                      <textarea className='body-task--area' id="w3review" name="w3review" rows="4" cols="50" placeholder=''/>
                    </div>
                  </div>
                }
                {checkModal === "3" && 
                  <div className='container-show'>
                    <div className=''><input type="checkbox" />Allow users to change the task duration in runtime</div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Task duration*:</h3>
                      <input className='body-task--curs' type="number" id="fname" name="fname" />
                    </div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Time unit:</h3>
                      <select  name="cars" id="cars" className='body-task--sele'>
                        <option value="volvo">Days</option>
                        <option value="volvo">Hours</option>
                        <option value="volvo">Minutes</option>
                      </select>
                    </div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Count days by:</h3>
                      <select  name="cars" id="cars" className='body-task--sele'>
                        <option value="volvo">Work Days</option>
                        <option value="volvo">Calendar Days</option>
                      </select>
                    </div>
                    <div className='body-task'>
                      <h3 className='body-task--txt'>Calendar:</h3>
                      <select  name="cars" id="cars" className='body-task--sele'>
                        <option value="volvo">None</option>
                        <option value="volvo">default Calendar</option>
                      </select>
                    </div>
                  </div>
                }
                {checkModal === "4" &&
                  <div className='container-show'>
                    <div className=''><input type="checkbox" />After routing notify the next assigned user(s)</div>
                    <div className=''><input type="checkbox" />Notify the assigned user to this task</div>
                  </div>
                }
              </div>
            </div>
            <div className='Modal-footer'>
              <button className='Modal-footer--cancel' onClick={() => funModalOpen()}>Cancel</button>
              <button className='Modal-footer--save' onClick={() => funModalOpen()}>Save</button>
            </div>
            <div className='Modal-opacity' onClick={() => funModalOpen()}></div>
          </div>
      </div>
    </div>
  );
}


// helpers ///////////////////

function hasDefinition(event, definitionType) {

  const definitions = event.businessObject.eventDefinitions || [];

  return definitions.some(d => is(d, definitionType));
}