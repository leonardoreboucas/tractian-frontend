import React, { useRef, useState, useEffect } from "react";
import { Form, Input, InputNumber, Space, Divider, Row, Col } from "antd";
import { Layout, Breadcrumb, Statistic, Progress, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";
import { request } from "@/request";
import { LoadingOutlined } from '@ant-design/icons';
import PageLoader from "@/components/PageLoader";


export default function Dashboard() {
  const [control, setControl] = useState(false)
  const [assets, setAssets] = useState([])
  useEffect(() => {
    const resAssets = request.list('asset').then(res => {
      setAssets(res.result)
    })
  },[control]); 
  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        {(assets && assets.length) ? assets.map((row, idx) => (
          <Col key={idx} className="gutter-row" span={6}>
            <div className="whiteBox shadow" style={{ height: "380px" }}>
              <div
                className="pad20"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <img src={row.image[0].response.result} width="50em" />
                <h3 style={{ color: "#22075e", marginBottom: 30 }}>
                  {row.name}
                </h3>

                <Progress type="dashboard" percent={row.health_level} width={148} />
                  <p>Health level</p>
                <Divider />

                <Tag size="large" color={row.status==='Running'?"green":(row.status==='Alerting')?"red":"gray"} key={row.status}>
                  {row.status}
                </Tag>
                
              </div>
            </div>
          </Col>
        ))
        :
        (
          <PageLoader />
        )
        }
      </Row>
      <div className="space30"></div>
     
    </DashboardLayout>
  );
}
