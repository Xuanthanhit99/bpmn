import { is } from 'bpmn-js/lib/util/ModelUtil';
import PropertiesProps from './controller/PropertiesProps';
import PropertiesTitle from './controller/PropertiesTitle';
import React, { Component } from 'react';

import './PropertiesView.css';


export default class PropertiesView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      modeler
    } = this.props;
    return (
      <div>
        <PropertiesProps modeler={ modeler } />
        <PropertiesTitle modeler={ modeler } />
      </div>
    );
  }

}
