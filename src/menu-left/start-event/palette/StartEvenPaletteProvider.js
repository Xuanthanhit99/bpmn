import startEvenSvg from '../../img/start-event-svg.svg';


/**
 * A provider for quick service task production
 */
export default function StartEvenPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

StartEvenPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

StartEvenPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:StartEvent' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'start-service-task': {
      group: 'activity',
      title: 'Start Event',
      imageUrl: startEvenSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};