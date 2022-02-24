import React ,{useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Axios from 'axios';
import {NavLink} from "react-router-dom";

const Login = () => {
const [values, setValues] = useState({email: '',password: ''});

  const handleEmailChange = (event) => {
    event.persist()
    setValues((values) => ({
		...values,
		email: event.target.value,
	}));
  }

  const handlePasswordChange = (event) => {
    event.persist()
    setValues((values) => ({
		...values,
		password: event.target.value,
	}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData()
  };

  const sendData = () =>{
    Axios.post('http://localhost/3400/data', values)
    .then((response)=>{
        console.log(response.data);
        setValues((values) => ({
          ...values,
          email: '',
          password: '',
        }));
      })
    }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form'>
       <p>.</p>
      <h1>LOGIN FORM</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      className="form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input onChange={handleEmailChange} placeholder="email" name="email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input onChange={handlePasswordChange} placeholder="password" value="password" type="password"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      
        
      </Form.Item>
      <div className='login'>
      <h1>Don't have an Account <NavLink to="/register"><Button>Register</Button></NavLink></h1>
      <h1>Home Page <NavLink to="/"><Button>Home</Button></NavLink></h1>
    </div>
    </Form>
    </div>
  );
};
export default Login