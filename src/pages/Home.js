import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";

const Home=observer(()=>{
  const {UserStore}=useStores()
  return(
    <div>
      {
        UserStore.currentUser ?
          <>
            HELLO {UserStore.currentUser.attributes.username}，欢迎登录！
          </> :
          <>
            请先登录！
          </>
      }
    </div>
  )
})
export default Home;