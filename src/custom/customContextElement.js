var HIGH_PRIORITY = 1500;


export default function InteractionLogger(eventBus,contextPad) {

  // we log user clicks
  eventBus.on('element.click', HIGH_PRIORITY, function(evt) {
  });

  
  eventBus.on("element.contextmenu", event => {
    event.preventDefault();
    event.stopPropagation();

    const { element } = event;

    if (!contextPad._overlayId) {
      contextPad.open(element);
    } else {
      contextPad.close();
    }
  });

}

InteractionLogger.$inject = [ 'eventBus' ];