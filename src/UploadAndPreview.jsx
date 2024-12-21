import { InboxOutlined } from '@ant-design/icons';
import { Button, Upload, Typography } from 'antd'
import React, { useState } from 'react'
import ShadowItem from './ShadowItem';

const { Dragger } = Upload;
const { Title } = Typography;

export default function UploadAndPreview(props) {

  const { load, id, style } = props;

  const [fileList, setFileList] = useState([]);

  const uploadProps = {
    accept: 'image/*',
    maxCount: 1,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([{
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: URL.createObjectURL(file)
      }]);
      const reader = new FileReader();
      // reader.onloadend = function () {
      // }
      reader.readAsDataURL(file);
      return false;
    },
    fileList,
  };

  const download = () => {
    const canvas = document.getElementById(id);
    const dataURL = canvas.toDataURL('image/png');

    // 创建一个<a>元素用于下载
    const link = document.createElement('a');
    link.download = 'canvasImage.png'; // 设置下载文件名
    link.href = dataURL;
    link.click(); // 模拟点击下载
  }

   return (
    <div style={style}>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
  
      {fileList.length ? (
        <>
          <Title level={5} style={{ marginTop: '32px' }}>
            Preview
          </Title>

          <ShadowItem src={fileList[0].url} load={load} id={id} style={{ maxWidth: '750px' }} />
        </>
      ) : null}

      <Title level={3} style={{ marginTop: '32px' }}>
        3. Download image
      </Title>

      <Button block size='large' style={{ marginTop: '32px' }} color="default" variant="solid" onClick={() => {
        download();
      }}>Download Image</Button>
    </div>
  )
}
