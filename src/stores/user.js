import {observable, action, makeObservable} from 'mobx'
import {Auth} from "../model";

class UserStore {
  constructor() {
    makeObservable(this)
  }
  @observable currentUser = null

  @ action pullUser() {
    this.currentUser = Auth.getCurrentUser()
  }

  @action resetUser() {
    this.currentUser = null
  }
}

export default new UserStore();
