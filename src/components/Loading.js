import React from "react";
import {Spin} from "antd";
import styled from "styled-components";
const SpinWrapper=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
function Loading() {
  return (
      <SpinWrapper>
        <Spin tip="加载中"/>
      </SpinWrapper>
  )
}
export default Loading