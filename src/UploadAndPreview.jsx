import { InboxOutlined } from '@ant-design/icons';
import { Button, Upload, Typography } from 'antd'
import React, { useState } from 'react'
import ShadowItem from './ShadowItem';
import { formatMessage } from './const';

const { Dragger } = Upload;
const { Title } = Typography;

export default function UploadAndPreview(props) {

  const { load, id, style } = props;

  const [fileList, setFileList] = useState([]);
  const [fileType, setFileType] = useState('image/png');

  const uploadProps = {
    accept: 'image/png,image/jepg,image/webp',
    maxCount: 1,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileType(file.type);
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
    const dataURL = canvas.toDataURL(fileType);

    // 创建一个<a>元素用于下载
    const link = document.createElement('a');
    link.download = `Shadow-Snapshot-Download.${fileType.split('/')[1] || 'png'}`; // 设置下载文件名
    link.href = dataURL;
    link.click(); // 模拟点击下载
  }

  return (
    <div style={style}>
      <div style={{ marginLeft: '32px' }}>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">{formatMessage('DropTitle')}</p>
          <p className="ant-upload-hint">
            {formatMessage('DropTip')}
          </p>
        </Dragger>

        {fileList.length ? (
          <>
            <Title level={5} style={{ marginTop: '32px' }}>
              {formatMessage('Preview')}
            </Title>

            <ShadowItem src={fileList[0].url} load={load} id={id} preview style={{ maxWidth: '750px' }} />
          </>
        ) : null}
      </div>

      <Title level={3} style={{ marginTop: '32px' }}>
        3. {formatMessage('DownloadImage')}
      </Title>

      <Button size='large' style={{ marginTop: '32px', marginLeft: '32px', width: 'calc(100% - 32px)' }} color="default" variant="solid" onClick={() => {
        download();
      }}>{formatMessage('DownloadAction')}</Button>
    </div>
  )
}
