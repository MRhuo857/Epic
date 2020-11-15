import React from 'react';
import {Button} from 'antd';
import {NavLink,useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {useStores} from "../stores";
import {observer} from "mobx-react";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
  color: #fff;
`;


const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;

  &.active {
    border-bottom: 1px solid #fff;
  }
`;

const Login = styled.div`
  margin-left: auto;
`;


const ButtonStyle = styled(Button)`
  margin: 0 10px;
`

const Component = observer(() => {
  const {UserStore, AuthStore} = useStores()
  let history = useHistory();
  const handelLogout = () => {
    AuthStore.logout()
  }
  const handelLogin = () => {
    history.push("/login")
  }
  const handelRegister = () => {
    history.push("/register")
  }
  return (
    <Header>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ?
            <>
              {UserStore.currentUser.attributes.username}
              <ButtonStyle type="primary" onClick={handelLogout}>注销</ButtonStyle>
            </> :
            <>
              <ButtonStyle type="primary" onClick={handelLogin}>登录</ButtonStyle>
              <ButtonStyle type="primary" onClick={handelRegister}>注册</ButtonStyle>
            </>
        }
      </Login>

    </Header>
  );
})

export default Component;