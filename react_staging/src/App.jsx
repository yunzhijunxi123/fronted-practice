import React, { Component } from 'react'
import { Button, DatePicker, ConfigProvider } from 'antd'
import { SearchOutlined, WechatOutlined, WeiboOutlined } from '@ant-design/icons'

export default class App extends Component {

  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'orange',
          },
        }}
      >
        <div>
          <Button type='primary'>Primary Button</Button>
          <Button>Default Button</Button>
          <Button type='link'>Link Button</Button>
          <Button type='primary' icon={<SearchOutlined />}>
            Search
          </Button>
          <WechatOutlined />
          <WeiboOutlined />
          <DatePicker />
        </div>
      </ConfigProvider>
    )
  }
}
