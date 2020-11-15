import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import { message} from 'antd'


const {Dragger} = Upload;




const Uploader = observer(() => {
  const {ImageStore} = useStores()
  const props = {
    showUploadList:false,
    beforeUpload:file=>{
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
      <div>
        <h1>上穿结果：</h1>
        {
          ImageStore.serverFile?<div>{ImageStore.serverFile.attributes.url.attributes.url}</div>:null
        }
      </div>
    </div>

  )
})
export default Uploader;