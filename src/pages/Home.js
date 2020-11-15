import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import Uploader from "../components/Uploader";

const Home=observer(()=>{
  const {UserStore}=useStores()
  return(
    <div>
      {
        UserStore.currentUser ?
          <>
            HELLO {UserStore.currentUser.attributes.username}，欢迎登录！
            <Uploader/>
          </> :
          <>
            请先登录！
          </>
      }

    </div>

  )
})
export default Home;