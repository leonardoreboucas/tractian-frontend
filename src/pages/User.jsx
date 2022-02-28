import React from "react";
import { Tag } from 'antd';
import CrudModule from "@/modules/CrudModule";
import UserForm from "@/forms/UserForm";

function User() {
  const entity = "user";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "username, name",
    outputValue: "_id",
  };

  const panelTitle = "User Panel";
  const dataTableTitle = "User Lists";
  const entityDisplayLabels = ["name"];

  const readColumns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Company",
      dataIndex: "company.name",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Active",
      dataIndex: "active",
      render: value => (
        <>
          {value?"True":"False"}
        </>
      )
    },
  ];
  const dataTableColumns = [
    {
      title: "Company",
      dataIndex: "company",
      render: value => (
        <>
          {(value)?value.name:null}
        </>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Active",
      dataIndex: "active",
      render: value => (
        <>
          <Tag color={value?"green":"red"} key={value}>
            {value?"True":"False"}
          </Tag>
        </>
      )
    },
  ];

  const ADD_NEW_ENTITY = "Add new user";
  const DATATABLE_TITLE = "User List";
  const ENTITY_NAME = "user";
  const CREATE_ENTITY = "Create user";
  const UPDATE_ENTITY = "Update user";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default User;
