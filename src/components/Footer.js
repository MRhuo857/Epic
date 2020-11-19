import React from "react";
import styled from 'styled-components'
const Footer =styled.footer`
padding:10px 100px;
text-align:center;
color:#aaa;
font-size:12px;
background: #eee;
`

function Component(){
  return (
    <Footer>
      <div>
        请勿上传违反中国大陆和香港法律的图片，违者后果自负。
      </div>
    </Footer>
  )
}
export default Component