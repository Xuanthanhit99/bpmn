import EventRenderer from './EventRenderer';
import EventContextEntries from './EventContextEntries';

export default {
  __init__: [ 'eventRenderer', 'eventContextEntries' ],
  eventRenderer: [ 'type', EventRenderer ],
  eventContextEntries: [ 'type', EventContextEntries ]
};
