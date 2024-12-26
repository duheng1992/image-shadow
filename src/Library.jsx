import { useState, useEffect } from 'react';
import { Radio } from 'antd';

import ShadowItem from './ShadowItem';
import { baseImage } from './const';
import { shadowPattern } from './template';

const initialValue = shadowPattern[0];

export default function Library(props) {
  const { onSelect } = props;

  const [templateId, setTemplateId] = useState(initialValue.id);

  const onLibrarySelect = (template) => {
    setTemplateId(template.id);
    onSelect(template);
  }

  useEffect(() => {
    onLibrarySelect(initialValue);
  }, []);

  return (
    <Radio.Group
      value={templateId}
      optionType="button"
      // buttonStyle="solid"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginLeft: '16px' }}
    >
      {shadowPattern.map((shadow, index) => {
        return <div key={shadow.id} className='flex-center' style={{ cursor: 'pointer', width: '150px' }} onClick={() => onLibrarySelect(shadow)}>
          <ShadowItem key={shadow.id} style={shadow.style} src={baseImage} load={shadow.load} id={`template_${shadow.id}`} />
          <Radio value={shadow.id} style={{ display: 'flex', alignItems: 'center', gap: '16px 8px', marginTop: '4px' }}>
            {shadow.id}
          </Radio>
        </div>
      })}
    </Radio.Group>
  )
}
