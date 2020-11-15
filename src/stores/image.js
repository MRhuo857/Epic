import {observable, action, makeObservable} from 'mobx'
import {Uploader} from "../model";

class ImageStore {
  constructor() {
    makeObservable(this)
  }

  @observable filename = ""
  @observable file = null
  @observable isLoading = false
  @observable serverFile=null

  @ action setFilename(newFilename) {
    this.filename = newFilename
  }

  @action setFile(newFile) {
    this.file = newFile
  }

  @action upload() {
    this.isLoading = true
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then(serverFile => {
          this.serverFile=serverFile
          resolve(serverFile)
        }).catch(error => {
        console.error('上传失败')
        reject(error)
      }).finally(() => {
        this.isLoading = false
      })
    })
  }
}

  export default new ImageStore();
