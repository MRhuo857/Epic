import React, {useRef} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";

const Uploader = observer(() => {
  const {ImageStore} = useStores()
  const ref = useRef()
  const bind = () => {
    console.log(ref.current)
    if (ref.current.files.length > 0) {
      ImageStore.setFile(ref.current.files[0])
      ImageStore.setFilename(ref.current.files[0].name)
      ImageStore.upload()
        .then((serverFile)=>{
          console.log('上传成功')
          console.log(serverFile)
        }).catch(()=>{
          console.log("上传失败")
      })
    }
    window.file = ref.current
  }
  return (
    <div>
      <h1>上传文件</h1>
      <input type="file" onChange={bind} ref={ref}/>
    </div>
  )
})
export default Uploader;