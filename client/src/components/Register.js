import React from 'react';
import {Form,Input,Select,Checkbox,Button,} from 'antd';
import Axios from 'axios';

const BASE_URL = 'https://gorest.co.in/'

const { Option } = Select;
 const formItemLayout = {labelCol: {xs: {span: 24,},sm: {span: 8,},},wrapperCol: {xs: {span: 24,},sm: {span: 16,},},};
 const tailFormItemLayout = {wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
     let data = {
      "name" :  "Naikteseerets",
     "email" :  "naik_siddarth5trrrest5@goyette-berge.biz",
     "gender":  "female",
     "status"  : "active"
     }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer a167da9923f5af3060de33cffe5328df25b7eeb6eb0914da195782d0be4b4778',
      'Accept':'application/json'
    }
    
    Axios.post(`${BASE_URL}public/v2/users/`, data, {
        headers: headers
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  return (
    <div className='fr'>
      <h1>Registration Form</h1>
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{marginTop:"5em"}}
    >
      <Form.Item name="email" label="E-mail" style={{width: "500px"}}
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

      <Form.Item name="password" label="Password" style={{width: "500px"}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="confirm" label="Confirm Password" style={{width: "500px"}} dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="gender" label="Gender"
        style={{width: "500px",}}
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
      style={{marginRight:"4em",marginTop:"2em"}}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};



export default Register