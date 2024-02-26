import GroupSvg from '../../img/Group-svg.svg';


/**
 * A provider for quick service task production
 */
export default function GroupPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

GroupPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

GroupPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:Group' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'group-service-task': {
      group: 'activity',
      title: 'Group',
      imageUrl: GroupSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};