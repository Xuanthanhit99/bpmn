import LaneSvg from '../../img/Lane-svg.svg';


/**
 * A provider for quick service task production
 */
export default function LanePaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

LanePaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

LanePaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:Lane' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'lane-service-task': {
      group: 'activity',
      title: 'Lane',
      imageUrl: LaneSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};