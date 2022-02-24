import React, { useState } from 'react';
import {Form,Input,Select,Button,} from 'antd';

const { Option } = Select;
const formItemLayout = {labelCol: {xs: {span: 24,},sm: {span: 8,},},wrapperCol: {xs: {span: 24,},sm: {span: 16,},},};
const tailFormItemLayout = {wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},};

const Forms = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Axios.post("https://gorest.co.in/public-api/user",values)
    // .then((response)=>{
    //   console.log(response);
    // })
    console.log(values);
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >

    <Form.Item
        name="id"
        label="Id"
        rules={[
          {
            required: true,
            message: 'Please input an id!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="name"
        label="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please input your Gender!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
            message: 'Please input your Status!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};



export default Forms