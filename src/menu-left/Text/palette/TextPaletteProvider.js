import TextSvg from '../../img/Text-svg.svg';


/**
 * A provider for quick service task production
 */
export default function TextPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

TextPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

TextPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:TextAnnotation' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'textAnnotation-service-task': {
      group: 'activity',
      title: 'TextAnnotation',
      imageUrl: TextSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};