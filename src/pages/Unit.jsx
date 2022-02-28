import React from "react";
import CrudModule from "@/modules/CrudModule";
import Form from "@/forms/UnitForm";

function Unit() {
  const entity = "unit";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const panelTitle = "Unit Panel";
  const dataTableTitle = "Unit Lists";
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
  ];

  const ADD_NEW_ENTITY = "Add new unit";
  const DATATABLE_TITLE = "Unit List";
  const ENTITY_NAME = "unit";
  const CREATE_ENTITY = "Create unit";
  const UPDATE_ENTITY = "Update unit";
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
      createForm={<Form />}
      updateForm={<Form isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Unit;
