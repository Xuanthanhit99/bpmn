import CommandInterceptor from "diagram-js/lib/command/CommandInterceptor";

import { is, getBusinessObject, getDi } from "bpmn-js/lib/util/ModelUtil";

class MyCommandInterceptor extends CommandInterceptor {
  constructor(eventBus, modeling) {
    super(eventBus);

    this.postExecuted(["shape.create"], ({ context }) => {
      const { shape } = context;

      if (is(shape, "bpmn:StartEvent")) {
        modeling.setColor(shape, {
          fill: '#E6FDFA',
          stroke: '#00E3C8' });
      }
      if (is(shape, "bpmn:IntermediateThrowEvent")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#D99E74' });
      }
      if (is(shape, "bpmn:EndEvent")) {
        modeling.setColor(shape, {
          fill: '#FFEEEE',
          stroke: '#FF5959' });
      }
      if (is(shape, "bpmn:ExclusiveGateway")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:ParallelGateway")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:InclusiveGateway")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:Task")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:Participant")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:Lane")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:Group")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
      if (is(shape, "bpmn:TextAnnotation")) {
        modeling.setColor(shape, {
          fill: '#FFFFFF',
          stroke: '#596481' });
      }
    });
  }
}

MyCommandInterceptor.$inject = ["eventBus", "modeling"];

export default {
  __init__: ["myCommandInterceptor"],
  myCommandInterceptor: ["type", MyCommandInterceptor]
};
