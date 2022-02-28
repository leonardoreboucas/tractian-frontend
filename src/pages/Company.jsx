import React from "react";

import CrudModule from "@/modules/CrudModule";
import CompanyForm from "@/forms/CompanyForm";

function Company() {
  const entity = "company";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name, email, manager, phone",
    outputValue: "_id",
  };

  const panelTitle = "Company Panel";
  const dataTableTitle = "Company Lists";
  const entityDisplayLabels = ["name"];

  const readColumns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Manager",
      dataIndex: "manager",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  const dataTableColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Manager",
      dataIndex: "manager",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];

  const ADD_NEW_ENTITY = "Add new company";
  const DATATABLE_TITLE = "company List";
  const ENTITY_NAME = "company";
  const CREATE_ENTITY = "Create company";
  const UPDATE_ENTITY = "Update company";
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
      createForm={<CompanyForm />}
      updateForm={<CompanyForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Company;
