import React, { useRef, useState, useEffect } from "react";
import { Form, Input, InputNumber, Space, Divider, Row, Col } from "antd";
import { Layout, Breadcrumb, Statistic, Progress, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";
import { request } from "@/request";
import { LoadingOutlined } from '@ant-design/icons';
import PageLoader from "@/components/PageLoader";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



export default function Dashboard() {
  const [control, setControl] = useState(false)
  const [controlHistory, setControlHistory] = useState(false)
  const [assets, setAssets] = useState([])
  const [options, setOptions] = useState({})
  useEffect(() => {
    const resAssets = request.list('asset').then(res => {
      setAssets(res.result)
    })
  },[control]); 
  useEffect(() => {
    const resHistory = request.list('asset/history').then(res => {
      let processed = []
      if (res.result){
        processed = Object.keys(res.result).map((row)=>{
          return {
            name: `${res.result[row].name} (${res.result[row]._id})`,
            data: res.result[row].history.map(r=>[new Date(r.date).toString(),r.health_level])
          }
        })
      }
        setOptions({
          chart: {
            type: 'line',
            width: 1000,
            align: 'center'
          },
        
          title: {
            text: 'Health level history'
          },
        
          yAxis: {
            title: {
                text: 'Health level'
            }
        },
        
        xAxis: {
            title: {
                text: 'Register'
            }
        },
        
        series: processed,
        })
      })
     
  },[controlHistory]); 



  

  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          width="100%"
        />
      </Row>

      <Divider />

      <Row gutter={[24, 24]}>
        {(assets && assets.length) ? assets.map((row, idx) => (
          <Col key={idx} className="gutter-row" span={6}>
            <div className="whiteBox shadow" style={{ height: "380px" }}>
              <div
                className="pad20"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <img src={row.image[0].response.result} width="50em" />
                <h3 style={{ color: "#22075e" }}>
                  {row.name}
                </h3>
                <h6 style={{ color: "#22075e", marginBottom: 30 }}>
                  {row._id}
                </h6>

                <Progress type="dashboard" percent={row.health_level} width={118} />
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
