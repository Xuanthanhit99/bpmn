import {
    is
  } from 'bpmn-js/lib/util/ModelUtil';
import ServiceSvg from '../../../icons/menu.svg';

  /**
   * A basic color picker implementation.
   *
   * @param {EventBus} eventBus
   * @param {ContextPad} contextPad
   * @param {CommandStack} commandStack
   */
  export default function ExclusiveGatewayContextEntries(eventBus, contextPad, commandStack) {
    contextPad.registerProvider(this);
  
    function changeColor(event, element) {
    //   var color = window.prompt('type a color code');
      if((is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway'))) {
        // document.getElementsByClassName('djs-overlay-context-pad')[0].style.display = "none"
        document.getElementsByClassName('Modal')[0].style.display = "none"
        document.getElementById('js-properties-panel').style.display = "block"

        //2modal
        document.getElementById('element-properties--modal').style.display = "flex"
      }
    }
  
  
    this.getContextPadEntries = function(element) {
  
      if ((is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway'))) {
        return {
          'changeColor-1': {
            group: 'edit-1',
            className: 'modal-element',
            imageUrl: ServiceSvg,
            title: 'Change element color',
            action: {
              click: changeColor
            }
          }
        };
      }
    };
  }
  
  
  
  /**
   * A handler updating an elements color.
   */