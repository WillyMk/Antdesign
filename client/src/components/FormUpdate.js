import React, { useState } from 'react';
import Axios from 'axios';

import {
  Form,
  Input,
  Button,
} from 'antd';

const BASE_URL = 'https://gorest.co.in/'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormUpdate = () => {
  const [form] = Form.useForm();
  const [users,setUsers] = useState([])

  const onFinish = (values) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer a167da9923f5af3060de33cffe5328df25b7eeb6eb0914da195782d0be4b4778',
      'Accept':'application/json'
    }
    // adding user
    Axios.post(`${BASE_URL}public/v2/users/`, values, {
      headers: headers
    })
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error)
    })

    //updateing user
    Axios.put(`${BASE_URL}public/v2/users/4338`, values, {
      headers: headers
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

    //   //deleting user
    Axios.delete(`${BASE_URL}public/v2/users/4338`, values, {
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
    <div>
       <h1>Registration</h1>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >

      <Form.Item
        name="name"
        label="Name"
        style={{width:"500px"}}
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input/>
      </Form.Item>

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

      <Form.Item
        name="gender"
        label="Gender"
        style={{width:"500px"}}
        rules={[
          {
            required: true,
            message: 'Please input your Gender!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="status"
        label="Status"
        style={{width:"500px"}}
        rules={[
          {
            required: true,
            message: 'Please input your Status!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item {...tailFormItemLayout} style={{width:"500px"}}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
    <div>
    <h1>Table list</h1>
        <table>
          <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Status</td>
          </tr>
          {
            users.map((item,id)=>{
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
              </tr>
            })
          }
          </tbody>
        </table> 
        </div>
    </div>
  );

};
export default FormUpdate