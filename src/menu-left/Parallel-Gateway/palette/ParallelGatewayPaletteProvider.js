import ParallelGatewaySvg from '../../img/Parallel-Gateway-svg.svg';

/**
 * A provider for quick service task production
 */
export default function ParallelGatewayPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

ParallelGatewayPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

ParallelGatewayPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:ParallelGateway' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'parellelGateway-service-task': {
      group: 'activity',
      title: 'Parallel Gateway',
      imageUrl: ParallelGatewaySvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};