import ReactDOM from 'react-dom/client';
import React from 'react';

import PropertiesView from './PropertiesView';


export default class PropertiesPanel {

  constructor(options) {
    const {
      modeler,
      container
    } = options;
    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<PropertiesView modeler={ modeler } />);


    // ReactDOM.render(
    //   <PropertiesView modeler={ modeler } />,
    //   container
    // );
  }
}