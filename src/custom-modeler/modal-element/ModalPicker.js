import {
    is
  } from 'bpmn-js/lib/util/ModelUtil';
import ServiceSvg from '../../menu-left/img/Exclusive-Gateway-svvg.svg';

  /**
   * A basic color picker implementation.
   *
   * @param {EventBus} eventBus
   * @param {ContextPad} contextPad
   * @param {CommandStack} commandStack
   */
  export default function ModalPicker(eventBus, contextPad, commandStack) {
    contextPad.registerProvider(this);
  
    function changeColor(event, element) {
    //   var color = window.prompt('type a color code');
      if(is(element, 'bpmn:Task')) {
        // document.getElementsByClassName('djs-overlay-context-pad')[0].style.display = "none"
        document.getElementsByClassName('Modal')[0].style.display = "none"
        document.getElementById('js-properties-panel').style.display = "block"

        //2modal
        document.getElementById('element-properties--modal').style.display = "flex"
      }
    }
  
  
    this.getContextPadEntries = function(element) {
  
      if (is(element, 'bpmn:Task')) {
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
  function UpdateModalHandler() {
  
    this.execute = function(context) {
      context.oldColor = context.element.color;
      context.element.color = context.color;
  
      return context.element;
    };
  
    this.revert = function(context) {
      context.element.color = context.oldColor;
  
      return context.element;
    };
  
  }