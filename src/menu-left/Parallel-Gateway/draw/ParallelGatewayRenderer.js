import inherits from 'inherits-browser';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import ParallelGatewaySvg from '../../img/Parallel-Gateway-svg.svg';

import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';


export default function ParallelGatewayRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:ParallelGateway');
  };


  // this.drawShape = function(parent, shape) {
  //   var url = ParallelGatewaySvg;

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

inherits(ParallelGatewayRenderer, BaseRenderer);

ParallelGatewayRenderer.$inject = [ 'eventBus' ];