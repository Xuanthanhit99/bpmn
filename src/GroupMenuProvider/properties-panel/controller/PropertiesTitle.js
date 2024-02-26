// import { useEffect, useState } from '@bpmn-io/properties-panel/preact/hooks'
import React, {useState, useEffect} from 'react'
import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import '../PropertiesView.css';
import ServiceSvg from '../../../menu-left/img/Service.svg';
import AssignmentRules from './AssignmentRules/AssignmentRules';
import DetailedSteps from './DetailedSteps/DetailedSteps'
import PropertiesTask from './PropertiesTask';
import PropertiesGateway from './PropertiesGateway'

const PropertiesTitle = ({modeler}) => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [element, setElement] = useState(null);
  const [typeELement, setTypeElement] = useState(null);
  const [valueBpmnELement, setValueBpmnELement] = useState(null);

  useEffect(() => {
    modeler.on('selection.changed', (e) => {
      setElement(e.newSelection[0]);
      setSelectedElements(e.newSelection)
    });

    modeler.on('element.changed', (e) => {
      const {element} = e;

      const currentElement = element

      if (!currentElement) {
        return;
      }

      // update panel, if currently selected element changed
      if (element.id === currentElement.id) {
        setElement(element)
      }

    });
  }, [modeler])

  function ElementProperties({element,modeler,setTypeElement,typeELement,setValueBpmnELement,valueBpmnELement,funtBpmnELement}) {
  
    if (element.labelTarget) {
      element = element.labelTarget;
    }
  
    function makeServiceTask(value,type) {
      const bpmnReplace = modeler.get('bpmnReplace');
      document.getElementById('element-properties--modal').style.display = "none"
      if(type === "startEvent") {
        bpmnReplace.replaceElement(element, {
          type: element.businessObject.$type,
          eventDefinitionType: value
        });
      } else if(type === "taskEvent") {
        const modeling = modeler.get('modeling');
        modeling.updateProperties(element, {
          loopCharacteristics: value,
        });
      } else if(type === "Message") {
       bpmnReplace.replaceElement(element, {
          type: element.businessObject.$type,
          eventDefinitionType: value
        });
      } else {
        bpmnReplace.replaceElement(element, {
          type: value
        });
      }
    }

    //task
    const arrayTaskListElement = {
      typeTask: [
        {
          id: 0,
          title: "Empty Task",
          value: 'bpmn:Task',
        },
        {
          id: 1,
          title: "Send Task",
          value: 'bpmn:UserTask',
        },
        {
          id: 2,
          title: "User Task",
          value: 'bpmn:UserTask',
        },
        {
          id: 3,
          title: "Receive Task",
          value: 'bpmn:ReceiveTask',
        },
        {
          id: 4,
          title: "Service Task",
          value: 'bpmn:ServiceTask',
        },
      ],
      typeMarker: [
        {
          id: 0,
          title: "None",
          type: "taskEvent",
          value: undefined
        },
        {
          id: 1,
          title: "Parallel",
          type: "taskEvent",
          value: {
            loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
            isSequential: false
          }
        },
        {
          id: 2,
          type: "taskEvent",
          title: "Sequential",
          value:  {
            loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
            isSequential: true
          }
        },
        {
          id: 3,
          type: "taskEvent",
          title: "Loop",
          value: {
            loopCharacteristics: 'bpmn:StandardLoopCharacteristics'
          }
        },
      ],
      defaultGateway: [
        {
          id: 0,
          title: "None",
          type: "taskEvent",
          value: undefined
        },
        {
          id: 1,
          title: "Task 1",
          type: "",
          value: {}
        },
        {
          id: 2,
          title: "Task 2",
          type: "",
          value: {}
        },
        {
          id: 3,
          title: "Task 3",
          type: "",
          value: {}
        },
      ]
    }

    //start-event
    const arrayStartEventListElement = {
      typeTask: [
        {
          id: 0,
          title: "Empty Task",
          value: 'bpmn:StartEvent',
        },
        {
          id: 1,
          title: "Message",
          type: "Message",
          value: 'bpmn:MessageEventDefinition',
        },
        {
          id: 2,
          title: "Timer",
          type: "startEvent",
          value: 'bpmn:TimerEventDefinition',
        },
      ],
      typeMarker: [
        {
          id: 0,
          title: "Start",
          value: 'bpmn:StartEvent'
        },
        {
          id: 1,
          title: "Intermediate",
          value: 'bpmn:IntermediateThrowEvent'
        },
        {
          id: 2,
          title: "End",
          value: 'bpmn:EndEvent'
        },
      ],
    }

    //gateway
    const arrayGateWayListElement = {
      typeTask: [
        {
          id: 0,
          title: "INCLUSIVE",
          value: 'bpmn:InclusiveGateway',
        },
        {
          id: 1,
          title: "PARALLEL ",
          value: 'bpmn:ParallelGateway',
        },
        {
          id: 2,
          title: "EXCLUSIVE",
          value: 'bpmn:ExclusiveGateway',
        },
      ],
    }

    //gateway
    const arrayFlowListElement = {
      typeTask: [
        {
          id: 0,
          title: "SEQUENCE",
          value: 'bpmn:SequenceFlow',
        },
      ],
    }

    return (
      <div className='properties-other--bd flex justify-center h-screen w-full'>
      {(is(element, 'bpmn:StartEvent') || is(element, 'bpmn:EndEvent') || is(element, 'bpmn:IntermediateThrowEvent') || is(element, 'bpmn:SequenceFlow') || is(element, 'bpmn:Task') || is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && typeELement === "typeTask" && <div className="element-properties" key={ element.id }>
          <div className='modal-children'>
            <ul className='menu-tree--list'>
              {is(element, 'bpmn:Task') && typeELement === "typeTask" && arrayTaskListElement?.typeTask?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {(is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && typeELement === "defaultGateway" && arrayTaskListElement?.defaultGateway?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {(is(element, 'bpmn:StartEvent') || is(element, 'bpmn:EndEvent') || is(element, 'bpmn:IntermediateThrowEvent')) && typeELement === "typeTask" && arrayStartEventListElement?.typeTask?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value,item?.type)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {(is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && typeELement === "typeTask" && arrayGateWayListElement?.typeTask?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value,item?.type)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {is(element, 'bpmn:SequenceFlow') && typeELement === "typeTask" && arrayFlowListElement?.typeTask?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value,item?.type)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
      </div>}
      {(is(element, 'bpmn:StartEvent') || is(element, 'bpmn:EndEvent') || is(element, 'bpmn:IntermediateThrowEvent') || is(element, 'bpmn:Task') || is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && typeELement === "typeMarker" && <div className="element-properties" key={ element.id }>
          <div className='modal-children'>
            <ul className='menu-tree--list'>
              {(is(element, 'bpmn:StartEvent') || is(element, 'bpmn:EndEvent') || is(element, 'bpmn:IntermediateThrowEvent')) && typeELement === "typeMarker" && arrayStartEventListElement?.typeMarker?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {is(element, 'bpmn:Task') && typeELement === "typeMarker" && arrayTaskListElement?.typeMarker?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value,item?.type)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
              {(is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && typeELement === "typeMarker" && arrayGateWayListElement?.typeMarker?.map(item => {
                return (
                  <li className='menu-tree--list__item cursor-pointer'>
                    <div
                      onClick={() => makeServiceTask(item?.value,item?.type)}
                      style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <span style={{ paddingLeft: "8px"}}>{item?.title}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
      </div>}
      {typeELement === "assignmentRules" && <AssignmentRules funtBpmnELement={funtBpmnELement}/>}
      {typeELement === "detailedSteps" && <DetailedSteps funtBpmnELement={funtBpmnELement}/>}
      {typeELement === "propertiesTask" && <PropertiesTask funtBpmnELement={funtBpmnELement}/>}
      {typeELement === "propertiesGateway" && <PropertiesGateway funtBpmnELement={funtBpmnELement}/>}
      </div>
    );
  }
  
  
  // helpers ///////////////////
  
  function hasDefinition(event, definitionType) {
  
    const definitions = event.businessObject.eventDefinitions || [];
  
    return definitions.some(d => is(d, definitionType));
  }

  useEffect(() => {
    if(selectedElements.length === 0) {
      setTypeElement(null)
    }

  }, [selectedElements])

  const funtBpmnELement = (name) => {
    if(name === "typeTask") {
      setTypeElement(name)
    } else if(name === "assignmentRules"){
      setTypeElement(name);
      let elementProperties = document.getElementById("properties-other")
      elementProperties.classList.add("properties-other--assignmentRules")
    } else if(name === "detailedSteps"){
      setTypeElement(name);
      let elementProperties = document.getElementById("properties-other")
      elementProperties.classList.add("properties-other--detailedSteps")
    }else if(name === "typeMarker") {
      setTypeElement(name)
    }else if(name === "propertiesTask") {
      setTypeElement(name);
      let elementProperties = document.getElementById("properties-other")
      elementProperties.classList.add("properties-other--propertiesTask")
    } else if(name === "propertiesGateway") {
      setTypeElement(name);
      let elementProperties = document.getElementById("properties-other")
      elementProperties.classList.add("properties-other--propertiesGateway")
    } else if(name === "defaultGateway") {
      setTypeElement(name)
    } else {
      setTypeElement(null)
    }
  }

  return (
    <div id='element-properties--modal'>
      {selectedElements.length === 1 && typeELement !== "propertiesGateway" && typeELement !== "assignmentRules" && typeELement !== "detailedSteps" && typeELement !== "propertiesTask" && <div>
        <ul className='menu-tree--list' >
          <li className='menu-tree--list__item cursor-pointer' onClick={()=>funtBpmnELement("typeTask")}>
            <span className='menu-tree--list__item-span'>{is(element, 'bpmn:Task') ? "Loại Task" : "Loại Gateway"}</span>
          </li>
          {is(element, 'bpmn:Task') && <li className='menu-tree--list__item cursor-pointer' onClick={()=>funtBpmnELement("typeMarker")}>
            <span className='menu-tree--list__item-span'>Loại Marker</span>
          </li>}
          {is(element, 'bpmn:Task') && <li className='menu-tree--list__item cursor-pointer' onClick={()=>funtBpmnELement("detailedSteps")}>
            <span className='menu-tree--list__item-span'>Các bước</span>
          </li>}
          {is(element, 'bpmn:Task') && <li className='menu-tree--list__item cursor-pointer' onClick={()=>funtBpmnELement("assignmentRules")}>
            <span className='menu-tree--list__item-span'>Quy tắc phân công</span>
          </li>}
          {is(element, 'bpmn:Task') && <li className='menu-tree--list__item cursor-pointer'>
            <span className='menu-tree--list__item-span'>Xóa</span>
          </li>}
          {(is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && <li className='menu-tree--list__item cursor-pointer'>
            <span className='menu-tree--list__item-span' onClick={()=>funtBpmnELement("defaultGateway")}>Mặc định</span>
          </li>}
          {is(element, 'bpmn:Task') && <li className='menu-tree--list__item cursor-pointer'>
            <span className='menu-tree--list__item-span' onClick={()=>funtBpmnELement("propertiesTask")}>Thuộc tính Task</span>
          </li>}
          {(is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && <li className='menu-tree--list__item cursor-pointer'>
            <span className='menu-tree--list__item-span' onClick={()=>funtBpmnELement("propertiesGateway")}>Thuộc tính Gateway</span>
          </li>}
        </ul>
      </div>}
      {
        selectedElements.length === 1
          && <ElementProperties 
            modeler={ modeler }
            element={ element }
            setTypeElement={setTypeElement}
            typeELement={typeELement}
            setValueBpmnELement={setValueBpmnELement}
            valueBpmnELement={valueBpmnELement}
            funtBpmnELement={funtBpmnELement}
          />
      }
  </div>
  )
}

export default PropertiesTitle