import { html } from 'htm/preact';

import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';
import { useEffect, useState } from '@bpmn-io/properties-panel/preact/hooks';

export default function(element) {

  return [
    {
      id: 'spell',
      element,
      component: Spell,
      isEdited: isTextFieldEntryEdited
    }
  ];
}

function Spell(props) {
  const { element, id } = props;
  const [valueSpell, setValueSpell] = useState("")
  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  let inputHtml = document.getElementById("title-frame")?.value


  const getValue = () => {
    return valueSpell || element.businessObject.spell;
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      spell: inputHtml || value
    });
  }

  useEffect(() => {
    setValueSpell(inputHtml)
  }, [inputHtml])
  

  return html`<${TextFieldEntry}
    id=${ id }
    element=${ element }
    description=${ translate('Apply a black magic spell') }
    label=${ translate('Spell') }
    getValue=${ getValue }
    setValue=${ setValue }
    debounce=${ debounce }
  />`
}