import inherits from 'inherits-browser';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import LaneSvg from '../../img/Lane-svg.svg';

import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';


export default function LaneRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:Lane');
  };


  // this.drawShape = function(parent, shape) {
  //   var url = LaneSvg;

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

inherits(LaneRenderer, BaseRenderer);

LaneRenderer.$inject = [ 'eventBus' ];