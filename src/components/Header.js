import React, {useState} from 'react';
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

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

function Component() {
  const [isLogin, setLogin] = useState(false)
  return (
    <Header>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
      <Login>
        {
          isLogin ?
            <>
              huo <ButtonStyle type="primary" onClick={()=>setLogin(false)} >注销</ButtonStyle>
            </> :
            <>
              <ButtonStyle type="primary" onClick={()=>setLogin(true)}>登录</ButtonStyle>
              <ButtonStyle type="primary">注册</ButtonStyle>
            </>
        }
      </Login>

    </Header>
  );
}

export default Component;