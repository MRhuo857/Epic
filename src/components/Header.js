import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'
import LogUrl from './logo.svg'

const Header = styled.header`
display:flex;
aline-items:center;
padding:10px 100px;
color:#fff;
background-color:#02101f;
`;
const Logo = styled.img`
height:30px;
`;
const StyledLink = styled(NavLink)`
color:#fff;
margin-left:30px;
&.active{
border-bottom:2px solid rgb(0,145,255);
color:rgb(0,145,255);
}
`;

function Component() {
  return (
    <Header>
      <Logo src={LogUrl} alt=""/>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
    </Header>
  )
}

export default Component