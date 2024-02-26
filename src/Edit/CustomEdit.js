export default class CustomEdit {
    constructor(palette) {
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      return function (entries) {
  
        return {
          "start-service-task": entries["start-service-task"],
        //   "create.subprocess-expanded": entries["create.subprocess-expanded"],
          // "create.data-object": entries["create.data-object"]
        };
      };
    }
  }
  
  CustomEdit.$inject = ["palette"];