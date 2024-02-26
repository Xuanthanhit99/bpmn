import InclusiveGatewaySvg from '../../img/Inclusive-Gateway-svg.svg';


/**
 * A provider for quick service task production
 */
export default function InclusiveGatewayPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

InclusiveGatewayPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

InclusiveGatewayPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:InclusiveGateway' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'InclusiveGateway-service-task': {
      group: 'activity',
      title: 'Inclusive Gateway',
      imageUrl: InclusiveGatewaySvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};