import inherits from 'inherits-browser';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import TextSvg from '../../img/Text-svg.svg';

import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';


export default function TextRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:TextAnnotation');
  };


  // this.drawShape = function(parent, shape) {
  //   var url = TextSvg;

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

inherits(TextRenderer, BaseRenderer);

TextRenderer.$inject = [ 'eventBus' ];