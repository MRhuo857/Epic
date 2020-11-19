import AV, {User} from 'leancloud-storage'
import {Upload} from "antd";
import i from "styled-components/dist/styled-components-macro.esm";

AV.init({
  appId: "oIAVQHGu3k80ou8msKitpx6k-gzGzoHsz",
  appKey: "C2x8avjcpLr2Jyp2F0AuJBg5",
  serverURL: "https://oiavqhgu.lc-cn-n1-shared.com"
});

const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    });
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },
  logout() {
    User.logOut()
  },
  getCurrentUser() {
    return User.current()
  },
}
const Uploader = {
  add(file, filename) {
    const item = new AV.Object('Image');
    const avFile = new AV.File(filename, file)
    item.set('filename', filename)
    item.set('owner', AV.User.current())
    item.set('url', avFile)
    return new Promise((resolve, reject) => {
      item.save().then(serveFile => resolve(serveFile), error => reject(error))
    })
  },

  find({page=0, limit=10}) {
    const query = new AV.Query('Image');
    query.include('owner');
    query.limit(limit);
    query.skip(page*limit);
    query.descending('createdAt');
    query.equalTo('owner', AV.User.current());
    return new Promise((resolve, reject) => {
      query.find()
        .then(results => resolve(results))
        .catch(error => reject(error))
    });
  }
}
export {Auth, Uploader}