import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0 auto;
  display: flex;
  justify-content:center;
  align-items: center;
`
const Section = styled.section`
  margin-top: 20px;
  border: 1px solid red;
  padding: 10px 10px;
  background: #FFF2F0;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.25);
`
function About() {
  return (
    <> 
      <Title>关于本图床</Title>
      <Section>
        <h2>严禁上传及分享如下类型的图片</h2>
        <ol>
          <li>含有色情、暴力、宣扬恐怖主义的图片</li>
          <li>侵犯版权、未经授权的图片</li>
          <li>其他违反中华人民共和国法律的图片</li>
          <li>其他违反香港法律的图片</li>
        </ol>
      </Section>
    </>
  )
}

export default About