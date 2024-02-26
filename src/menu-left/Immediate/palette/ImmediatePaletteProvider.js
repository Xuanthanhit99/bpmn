import ImmediateSvg from '../../img/Immediate-svg.svg';


/**
 * A provider for quick service task production
 */
export default function ImmediatePaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

ImmediatePaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

ImmediatePaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:IntermediateThrowEvent' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'IntermediateThrowEvent-service-task': {
      group: 'activity',
      title: 'Immediate',
      imageUrl: ImmediateSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};