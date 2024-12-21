import React, { useState } from 'react';
import { Typography } from 'antd';

import './App.css';
import Library from './Library';
import UploadAndPreview from './UploadAndPreview';

const { Title } = Typography;

const App = () => {

  const [currentTemplate, setCurrentTemplate] = useState();

  const handleTemplateSelect = (template) => {
    setCurrentTemplate({...template});
  }

  return (
    <>
    <Title level={3}>
      1. Select Template
    </Title>
      <Library onSelect={handleTemplateSelect} />

    <Title level={3} style={{ marginTop: '32px' }}>
      2. Upload your image
    </Title>
      {currentTemplate ? (
        <UploadAndPreview load={currentTemplate.load} id={currentTemplate.id} style={{ marginLeft: '32px' }} />
      ) : null}
    </>
  );
};

export default App;