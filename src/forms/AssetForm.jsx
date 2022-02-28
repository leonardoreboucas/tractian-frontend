import React from "react";
import { API_BASE_URL } from "@/config/serverApiConfig";
import { Button, Form, Input, Select, Radio, Slider, Upload, message } from "antd";
import { useState , useEffect} from 'react';
import { request } from "@/request";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


export default function AssetForm({ isUpdateForm = false }) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const [controlUnit, setControlUnit] = useState(false)
  const [controlUser, setControlUser] = useState(false)
  const [units, setUnits] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    request.list('unit').then(res => {
      setUnits(res.result)
    })
  },[controlUnit]); 

  useEffect(() => {
    request.list('user').then(res => {
      setUsers(res.result)
    })
  },[controlUser]); 

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const handleChange = info => {
      if (info.file.status === 'uploading') {
        setLoading(true)
        setImageUrl(null)
        delete info.file.response
        return;
      }
      if (info.file.status === 'done') {
        if (info.file.response && info.file.response.result) {
          setImageUrl(info.file.response.result)
        }
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          setLoading(false),
          //setImageUrl(imageUrl),
        );
      }
    };

    const getFile = (e) => {
      console.log('Upload event:', e);
    
      if (Array.isArray(e)) {
        return e;
      }
     return e && e.fileList;
    };

  return (
    <>
      <Form.Item
        label="Unit"
        name="unit_id"
        rules={[
          {
            required: false,
            message: "Please select the unit!",
          },
        ]}
      >
        <Select>
          <Select.Option value="">----</Select.Option>
          {
            units.length && units.map((row,idx) => {
              return (
                <Select.Option key={idx} value={row._id}>{row.name}</Select.Option>
              )
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input asset name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        getValueFromEvent={getFile}
      >
       <Upload
          name="file"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={`${API_BASE_URL}/upload`}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          data={{imgID:Math.ceil(Math.random()*100000)}}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
      

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: false,
            message: "Please input asset description!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Model"
        name="model"
        rules={[
          {
            required: false,
            message: "Please input asset model!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Owner"
        name="owner_id"
        rules={[
          {
            required: false,
            message: "Please input asset Owner user!",
          },
        ]}
      >
        <Select>
          <Select.Option value="">----</Select.Option>
          {
            users.length && users.map((row,idx) => {
              return (
                <Select.Option key={idx} value={row._id}>{row.name}</Select.Option>
              )
            })
          }
        </Select>
      </Form.Item>

      <Form.Item 
        label="Status" 
        name="status"
        rules={[
          {
            required: false,
            message: "Please input asset status!",
          },
        ]}>
        <Radio.Group> 
          <Radio.Button value="Running" >Running</Radio.Button>
          <Radio.Button value="Alerting">Alerting</Radio.Button>
          <Radio.Button value="Stopped" >Stopped</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Health Level"
        name="health_level"
        rules={[
          {
            required: false,
            message: "Please input asset status!",
          },
        ]}
      >
        <Slider />
      </Form.Item>
    </>
  );
}
