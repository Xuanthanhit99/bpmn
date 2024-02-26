import endEvenSvg from '../../img/end-event-svg.svg';


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
      'shape', { type: 'bpmn:EndEvent' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'end-service-task': {
      group: 'activity',
      title: 'End Event',
      imageUrl: endEvenSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};