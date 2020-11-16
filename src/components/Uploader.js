import React, {useRef} from "react";
import {observer, useLocalStore} from "mobx-react";
import {useStores} from "../stores";
import {Upload,Spin} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {message} from 'antd'
import styled from 'styled-components';


const {Dragger} = Upload;

const Wrapper = styled.div`
  border: 1px dashed #ccc;
  margin-top: 30px;
  padding: 20px;
    ul li img{
      max-width: 300px;
    }
`
const H1 = styled.h1`
  margin: 10px;
  text-align: center;
`
const Uploader = observer(() => {
  const {ImageStore, UserStore} = useStores()
  const ref1 = useRef()
  const ref2 = useRef()
  const store = useLocalStore(() => ({
    width: null,
    setWidth(width) {
      store.width = width
    },
    get widthStr() {
      return store.width ? `/w/${store.width}` : ''
    },
    height: null,
    setHeight(height) {
      store.height = height
    },
    get heightStr() {
      return store.height ? `/h/${store.height}` : ''
    },
    get fullStr() {
      return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
    }
  }));
  const bindWidth = () => {
    store.setWidth(ref1.current.value)
  }
  const bindHeight = () => {
    store.setHeight(ref2.current.value)
  }
  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file)
      ImageStore.setFilename(file.name)
      if (UserStore.currentUser === null) {
        message.warning('请先登录在上传')
        return false
      }
      window.file = file
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error('只能上传png/svg/jpg/gif格式的图片');
        return false;
      }
      if (file.size > 2018 * 2048) {
        message.error('图片最大2M');
        return false;
      }

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
      <Spin tip="加载中" spinning={ImageStore.isLoading}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">点击或拖拽上传图片</p>
        <p className="ant-upload-hint">
        支持jpg,jpeg,png,svg,gif格式。且最大能上传2M的图片
        </p>
      </Dragger>
      </Spin>
      {
        ImageStore.serverFile ? <Wrapper>
          <H1>上传结果</H1>
          <ul>
            <li>原图预览:
              <a target="_blank"
                 href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a>
            </li>
            <li>文件名:
              <span>{ImageStore.filename}</span>
            </li>
            <li>
              <img src={ImageStore.serverFile.attributes.url.attributes.url}/>
            </li>
            <li>尺寸定制</li>
            <li>
              <input placeholder="最大宽度（可选）" ref={ref1} onChange={bindWidth}/>
              <input placeholder="最小高度（可选）" ref={ref2} onChange={bindHeight}/>
            </li>
            <li>
              <a target="_blank" href={store.fullStr}>完成预览</a>
            </li>
          </ul>
        </Wrapper> : null
      }
    </div>
  )
})
export default Uploader;