import {observer} from "mobx-react";
import {useStores} from "../stores";
import Uploader from "./Uploader";
import React from "react";
import styled from 'styled-components';
const Title=styled.div`
  background: rgb(255,242,240);
  padding: 20px 0;
  text-align: center;
  font-size: 18px;
  color: #333333;
  border: 1px solid red;
`
const Main=styled.div`
`
const Header=styled.div`
  background: rgb(246,255,237);
  padding: 6px 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 12px;
  color: #333333;
  border: 1px solid green;
`
const Tips=observer(()=>{
  const {UserStore}=useStores()
  return(
    <div>
      {
        UserStore.currentUser ?
          <Main>
            <Header>
              Hello, {UserStore.currentUser.attributes.username}，
              欢迎登录！
            </Header>
            <Uploader/>
          </Main> :
          <Title>
            为了更好的使用本产品,请您先登录！
          </Title>
      }

    </div>

  )
})
export default Tips