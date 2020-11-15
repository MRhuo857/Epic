import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {message} from 'antd'
import styled from 'styled-components';


const {Dragger} = Upload;

const Wrapper=styled.div`
  border: 1px dashed #ccc;
  margin-top: 30px;
  padding: 20px;
`
const H1=styled.h1`
  margin: 10px;
  text-align: center;
`
const Uploader = observer(() => {
  const {ImageStore} = useStores()
  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file)
      ImageStore.setFilename(file.name)
      ImageStore.upload()
        .then((serverFile) => {
          message.success('上传成功')
          console.log(serverFile)
        }).catch(() => {
        message.error('上传失败');
      })
      return false
    }
  }
  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      {
        ImageStore.serverFile ? <Wrapper>
          <H1>上传结果</H1>
          <ul>
            <li>线上地址:
            <a target="_blank"
                   href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a>
            </li>
            <li>文件名:
            <span>{ImageStore.filename}</span>
            </li>
            <li>尺寸定制</li>
            <li>
              <input placeholder="最大宽度（可选）"/>
              <input placeholder="最小宽度（可选）"/>
            </li>
          </ul>
        </Wrapper> : null
      }
    </div>
  )
})
export default Uploader;