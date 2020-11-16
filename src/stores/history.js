import {observable, action, makeObservable} from 'mobx'
import {Uploader} from "../model";
import UserStore from './user'
import {message} from "antd";

class HistoryStore {
  constructor() {
    makeObservable(this)
  }
  @observable list=[]
  @observable isLoading=false
  @observable hasMore=true
  @observable page=0
  limit=10

  @action append(newList){
    this.list=this.list.concat(newList)
  }
  @action find (){
    this.isLoading=true
    Uploader.find({page:this.page,limit:this.limit})
      .then(newList=>{
        this.append(newList)
        if (newList.length<this.limit){
          this.hasMore=false
        }
      }).catch(error=>{
        message.error('数据加载失败')
    }).finally(()=>{
      this.isLoading=false
    })
  }
}
export default new HistoryStore();
