import {
    is
  } from 'bpmn-js/lib/util/ModelUtil';
import ServiceSvg from '../../icons/menu.svg';

  /**
   * A basic color picker implementation.
   *
   * @param {EventBus} eventBus
   * @param {ContextPad} contextPad
   * @param {CommandStack} commandStack
   */
  export default function ColorPicker(contextPad, commandStack) {
    contextPad.registerProvider(this);
    commandStack.registerHandler('shape.updateColor', UpdateColorHandler);
  
    function changeColor(element) {
      if(is(element, 'bpmn:Task')) {
        document.getElementsByClassName('djs-overlay-context-pad')[0].style.display = "none"
        document.getElementsByClassName('Modal')[0].style.display = "flex"
        document.getElementById('js-properties-panel').style.display = "block"
         //2modal
         document.getElementById('element-properties--modal').style.display = "none"
      }
      if(is(element, 'bpmn:ExclusiveGateway')) {
        document.getElementsByClassName('djs-overlay-context-pad')[0].style.display = "none"
        document.getElementsByClassName('Modal')[0].style.display = "flex"
        document.getElementById('js-properties-panel').style.display = "block"
         //2modal
         document.getElementById('element-properties--modal').style.display = "none"
      }
    }
  
  
    this.getContextPadEntries = function(element) {
  
      if (is(element, 'bpmn:Task')) {
        return {
          'changeColor': {
            group: 'edit',
            // className: 'icon-red',
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
  function UpdateColorHandler() {
  
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