import ExclusiveGatewaySvg from '../../img/Exclusive-Gateway-svvg.svg';


/**
 * A provider for quick service task production
 */
export default function ExclusiveGatewayPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

ExclusiveGatewayPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

ExclusiveGatewayPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:ExclusiveGateway' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'exclusiveGateway-service-task': {
      group: 'activity',
      title: 'Exclusive Gateway',
      imageUrl: ExclusiveGatewaySvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};