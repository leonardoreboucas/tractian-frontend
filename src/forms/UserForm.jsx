import React from "react";
import { useState , useEffect} from 'react';
import { Button, Form, Input, Switch, Select } from "antd";
import { request } from "@/request";

export default function UserForm({ isUpdateForm = false }) {

  const [control, setControl] = useState(false)
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    const resCompanies = request.list('company').then(res => {
      setCompanies(res.result)
    })
  },[control]); 

  return (
    <>

      <Form.Item label="Select"
        name="company_id"
        label="Company"
        rules={[
          {
            required: true,
            message: "Please choose the company!",
          },
        ]}
      >
        <Select>
          <Select.Option value="">----</Select.Option>
          {
            companies.length && companies.map((row,idx) => {
              return (
                <Select.Option key={idx} value={row._id}>{row.name}</Select.Option>
              )
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            min: 10,
            message: "Minimum 10 letters!",
          },
          {
            max: 50,
            message: "Maximun 50 letters!",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input autoComplete="off"/>
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            min: 8,
            message: "Minimum 8 letters!",
          },
          {
            max: 20,
            message: "Maximun 20 letters!",
          },
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input autoComplete="off"/>
      </Form.Item>
      
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            min: 8,
            message: "Minimum 8 letters!",
          },
          {
            max: 20,
            message: "Maximun 20 letters!",
          },
          {
            required: true,
            message: "Please input password!",
          },
        ]}
      >
        <Input type="password" autoComplete="off"/>
      </Form.Item>

      <Form.Item
        name="active"
        label="Active"
        valuePropName="checked"
        rules={[
          {
            required: false,
            message: "Please inform if this user should be activated",
          },
        ]}
      >
        <Switch />
      </Form.Item>
    </>
  );
}
