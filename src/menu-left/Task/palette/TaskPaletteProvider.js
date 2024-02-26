import TaskSvg from '../../img/Task-svg.svg';


/**
 * A provider for quick service task production
 */
export default function TaskPaletteProvider(palette, create, elementFactory) {

  this._create = create;
  this._elementFactory = elementFactory;

  palette.registerProvider(this);
}

TaskPaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory'
];

TaskPaletteProvider.prototype.getPaletteEntries = function() {

  var elementFactory = this._elementFactory,
      create = this._create;

  function startCreate(event) {
    var serviceTaskShape = elementFactory.create(
      'shape', { type: 'bpmn:Task' }
      // 'shape', { type: 'bpmn:ServiceTask' }
    );

    create.start(event, serviceTaskShape);
  }

  return {
    'task-service-task': {
      group: 'activity',
      title: 'Task',
      imageUrl: TaskSvg,
      action: {
        dragstart: startCreate,
        click: startCreate,
      }
    }
  };
};