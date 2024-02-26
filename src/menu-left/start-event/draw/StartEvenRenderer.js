import inherits from 'inherits-browser';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import startEvenSvg from '../../img/start-event-svg.svg';

import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';


export default function StartEvenRenderer(eventBus,modeling) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:StartEvent') && element.color;
  };

// this.drawShape = function(parent, shape) {

//   var bpmnShape = this.drawBpmnShape(parent, shape);

//   svgAttr(bpmnShape, { fill: shape.color });

//   return bpmnShape;
// };


  // this.drawShape = function(parent, shape) {
  //   var url = startEvenSvg;

  //   var catGfx = svgCreate('image', {
  //     x: 0,
  //     y: 0,
  //     width: shape.width,
  //     height: shape.height,
  //     href: url
  //   });

  //   svgAppend(parent, catGfx);

  //   return catGfx;
  // };
}

inherits(StartEvenRenderer, BaseRenderer);

StartEvenRenderer.$inject = [ 'eventBus' ];