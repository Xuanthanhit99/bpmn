import inherits from 'inherits-browser';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import ImmediateSvg from '../../img/Immediate-svg.svg';

import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';


export default function ImmediateRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:IntermediateThrowEvent');
  };


  // this.drawShape = function(parent, shape) {
  //   var url = ImmediateSvg;

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

inherits(ImmediateRenderer, BaseRenderer);

ImmediateRenderer.$inject = [ 'eventBus' ];