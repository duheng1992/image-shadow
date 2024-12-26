import React, { useState } from 'react';
import { Typography } from 'antd';

import './App.css';
import Library from './Library';
import UploadAndPreview from './UploadAndPreview';
import { formatMessage } from './const';

const { Title } = Typography;

const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState();

  const handleTemplateSelect = (template) => {
    setCurrentTemplate({ ...template });
  }

  return (
    <>
      <Title level={3}>
        1. {formatMessage('SelectTemplate')}
      </Title>
      <Library onSelect={handleTemplateSelect} />

      <Title level={3} style={{ marginTop: '32px' }}>
        2. {formatMessage('UploadImage')}
      </Title>
      {currentTemplate ? (
        <UploadAndPreview load={currentTemplate.load} id={currentTemplate.id} />
      ) : null}
    </>
  );
};

export default App;