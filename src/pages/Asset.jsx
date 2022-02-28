import React from "react";
import { Tag } from 'antd';
import CrudModule from "@/modules/CrudModule";
import AssetForm from "@/forms/AssetForm";

function Asset() {
  const entity = "asset";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const panelTitle = "Asset Panel";
  const dataTableTitle = "Asset Lists";
  const entityDisplayLabels = ["asset"];

  const readColumns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
     {
      title: "Unit",
      dataIndex: "unit.name",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Owner",
      dataIndex: "owner.name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Health level",
      dataIndex: "health_level",
    },
    
  ];
  const dataTableColumns = [
    {
      title: "Image",
      dataIndex: "image",
      render: value => (
        <>
          <img src={(value) && value[0].response.result} alt="avatar" style={{ width: '8em' }} /> 
        </>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: status => (
        <>
          <Tag color={status==='Running'?"green":(status==='Alerting')?"red":"gray"} key={status}>
            {status}
          </Tag>
        </>
      )
    },
    {
      title: "Health level",
      dataIndex: "health_level",
      render: value => (
        <>
          {value}%
        </>
      )
    },
  ];

  const ADD_NEW_ENTITY = "Add new asset";
  const DATATABLE_TITLE = "asset List";
  const ENTITY_NAME = "asset";
  const CREATE_ENTITY = "Create asset";
  const UPDATE_ENTITY = "Update asset";
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
      createForm={<AssetForm/>}
      updateForm={<AssetForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Asset;
