import inherits from 'inherits-browser';

import {
  attr as svgAttr
} from 'tiny-svg';

import BpmnRenderer from 'bpmn-js/lib/draw/BpmnRenderer';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function ExclusiveGatewayRenderer(
    config, eventBus, styles,
    pathMap, canvas, textRenderer) {

  BpmnRenderer.call(
    this,
    config, eventBus, styles,
    pathMap, canvas, textRenderer,
    1400
  );

  this.canRender = function(element) {
    // return is(element, 'bpmn:BaseElement') && element.color;
    return (is(element, 'bpmn:ExclusiveGateway') || is(element, 'bpmn:InclusiveGateway') || is(element, 'bpmn:ParallelGateway')) && element.color;
  };

  // this.drawShape = function(parent, shape) {

  //   var bpmnShape = this.drawBpmnShape(parent, shape);

  //   svgAttr(bpmnShape, { fill: shape.color });

  //   return bpmnShape;
  // };
}

inherits(ExclusiveGatewayRenderer, BpmnRenderer);

ExclusiveGatewayRenderer.prototype.drawBpmnShape = BpmnRenderer.prototype.drawShape;


ExclusiveGatewayRenderer.$inject = [
  'config.bpmnRenderer',
  'eventBus',
  'styles',
  'pathMap',
  'canvas',
  'textRenderer'
];