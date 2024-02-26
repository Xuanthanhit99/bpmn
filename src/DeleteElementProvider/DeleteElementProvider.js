import { is } from "bpmn-js/lib/util/ModelUtil";

class DeleteElementProvider {
  constructor(contextPad) {
    // this.modeling = modeling;

    // popupMenu.registerProvider("bpmn-replace", this);

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    if (is(element, "bpmn:Task")) {
      // const ele = document.getElementsByClassName("djs-element ")[0]
      // const modal2 = document.getElementsByClassName("Modal2")[0]
      // console.log("first", ele);
      // ele.addEventListener('contextmenu', (event) => {
      //   event.preventDefault();
      //   modal2.style.display = "flex"
      //   ele.style.position = "relative"
      // });;
    }
    return function(entries) {
        // entries includes all already registered context pad entries
        // remove end event option from entries, for example
      //  delete entries['append.end-event'];
      //  delete entries['append.append-task'];
      //  delete entries['append.gateway'];
      //  delete entries['replace'];
       return entries;
      }
  }
}

DeleteElementProvider.$inject = ["contextPad"];

export default {
  __init__: ["DeleteElementProvider"],
  DeleteElementProvider: ["type", DeleteElementProvider]
};
