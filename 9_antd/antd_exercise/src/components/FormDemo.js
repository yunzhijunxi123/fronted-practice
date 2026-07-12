import React from "react";
import { Form, Input, Select, Button, Card, Typography, message } from "antd";
//Typography排版 字体相关 文本排列与间距
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function FormDemo() {
  const [form] = Form.useForm();
  //用户点击了 htmlType="submit" 的按钮，且所有校验通过  触发onFinish
  const onFinish = (values) => {
    message.success("提交成功！");
    console.log("表单数据：", values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        表单提交 练习三
      </Title>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ gender: "男" }}
        >
          <Form.Item
            label="姓名"
            name="name"
            //required: true 必填
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>

          <Form.Item
            label="性别"
            name="gender"
            rules={[{ required: true, message: "请选择性别" }]}
          >
            <Select>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: "请输入邮箱" },
              { type: "email", message: "邮箱格式不正确" },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item label="备注" name="remark">
            <TextArea rows={3} placeholder="选填" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" block>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}