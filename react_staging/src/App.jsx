import React, { Component } from 'react'
import { Button,DatePicker} from 'antd'
import {SearchOutlined, WechatOutlined,WeiboOutlined} from "@ant-design/icons"

export default class App extends Component {
  
  render() {
    //antd element vant
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Primary Button</Button>
        <Button type="link">Primary Button</Button>
        <Button type="primary" icon={<SearchOutlined/>}>
          Search
          </Button>
        <WechatOutlined />
        <WeiboOutlined />
        <DatePicker />
      </div>
    )
  }
}
