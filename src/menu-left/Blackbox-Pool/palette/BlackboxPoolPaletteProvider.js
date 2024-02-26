import BlackboxPoolSvg from '../../img/Blackbox-Pool-svg.svg';


/**
 * A provider for quick service task production
 */
export default function BlackboxPoolPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

BlackboxPoolPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

BlackboxPoolPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:Participant' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'Participant-service-task': {
      group: 'activity',
      title: 'Blackbox Pool',
      imageUrl: BlackboxPoolSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};