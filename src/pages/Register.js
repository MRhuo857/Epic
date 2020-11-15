import React from "react";
import {Form, Input, Button} from 'antd';
import styled from 'styled-components';
import {useStores} from "../stores";
import {NavLink,useHistory } from 'react-router-dom';

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
  const {AuthStore}= useStores()
  let history = useHistory();
  const onFinish = values => {
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.register()
      .then(() => {
        console.log('注册成功')
        history.push("/")
      }).catch((e) => {
      console.log(e);
      console.log('注册失败-----')
    })
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是数字、字母、下划线')
    if (value.length < 4 || value.length > 10) return Promise.reject('长度为4-10个字符')
    return Promise.resolve()
  }
  const validateConfirm = ({getFieldValue}) => ({
    validator(rule, value) {
      if (getFieldValue('password') === value) return Promise.resolve()
      return Promise.reject('两密码不一样')
    }
  })
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
            rules={
              [
                {required: true, message: '请输入用户名!'},
                {validator: validateUserName}
              ]
            }
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {required: true, message: '请输入密码'},
              {
                min: 4,
                message: '长度为4-8'
              },
              {
                max: 8,
                message: '最大长度为8'
              }

            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={
              [
                {required: true, message: '再次确认密码'},
                validateConfirm
              ]}
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