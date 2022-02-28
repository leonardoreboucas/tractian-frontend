import React from "react";
import { Button, Form, Input } from "antd";

export default function CompanyForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input company name!",
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
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: false,
            message: "Please input company E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="manager"
        label="Manager"
        rules={[
          {
            required: false,
            message: "Please input the company's manager name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            type: "string",
            message: "The input is not valid string",
          },
          {
            required: false,
            message: "Please input company phone!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
