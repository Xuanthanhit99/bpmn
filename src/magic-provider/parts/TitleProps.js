import { html } from 'htm/preact';

import { SelectEntry, isSelectEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel'

// import hooks from the vendored preact package
import { useEffect, useState } from '@bpmn-io/properties-panel/preact/hooks';

export default function(element) {

  return [
    {
      id: 'title',
      element,
      component: Title,
      isEdited: isSelectEntryEdited
    }
  ];
}

function Title(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');


  const getValue = () => {
    return element.businessObject.title || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      title: value
    });
  }

  const [ titles, setTitles ] = useState([]);

//   useEffect(() => {
//     function fetchSpells() {
//       fetch('http://localhost:1234/spell')
//         .then(res => res.json())
//         .then(spellbook => setSpells(spellbook))
//         .catch(error => console.error(error));
//     }

//     fetchSpells();
//   }, [ setSpells ]);

  const getOptions = () => {
    return [
      { label: '<none>', value: undefined },
      ...titles.map(title => ({
        label: title,
        value: title
      }))
    ];
  }

  return html`<${SelectEntry}
    id=${ id }
    element=${ element }
    description=${ translate('Apply a black magic spell') }
    label=${ translate('Title') }
    getValue=${ getValue }
    setValue=${ setValue }
    getOptions=${ getOptions }
    debounce=${ debounce }
  />`
}