import React from "react";
import {Form, Input, Button} from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  border: 1px solid rgba(230,230,230);
`
const FormWrapper = styled.div`
  padding: 30px 20px;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
`
const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {offset: 6, span: 16},
};
const Register = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Title>注册</Title>
      <FormWrapper>
        <Form
          {...layout}
          name="basic"
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}
export default Register