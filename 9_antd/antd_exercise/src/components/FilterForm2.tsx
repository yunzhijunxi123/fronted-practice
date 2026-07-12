import { InputNumber, message, Typography } from "antd";
import { DatePicker, Card, Form, Select, Cascader, Button } from "antd";
import React from "react";
import { jsx } from "react/jsx-runtime";

const { Title } = Typography;
const { RangePicker } = DatePicker;

interface FormValues {
  dateRange?: [moment.Moment, moment.Moment];
  city?: string;
  region?: (string | number)[];
  amount?: number;
}

interface OutputValues {
  dateRange?: [number, number];
  city?: string;
  region?: (string | number)[];
  amount?: number;
}

const regionOptions = [
  {
    value: "zhejiang",
    label: "浙江",
    children: [
      { value: "hangzhou", label: "杭州" },
      { value: "ningbo", label: "宁波" },
    ],
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      { value: "nanjing", label: "南京" },
      { value: "suzhou", label: "苏州" },
    ],
  },
];

const toUndefined = <T,>(v: T): T | undefined => {
  if (v === "" || v === null) return undefined;
  return v;
};

export default function FilterForm2() {
  //创建表单实例 用于读取或设置表单数据
  const [form] = Form.useForm<FormValues>();
  //提交处理函数
  const onFinish = (raw: FormValues) => {
    //转时间戳
    const dateRange =
      raw.dateRange && raw.dateRange[0] && raw.dateRange[1]
        ? ([raw.dateRange[0].valueOf(), raw.dateRange[1].valueOf()] as [
            number,
            number,
          ])
        : undefined;
    //组装最终要输出的数据对象 toUndefined  把 "" 或 null 统一转成 undefined，
    const output: OutputValues = {
      dateRange,
      city: toUndefined(raw.city),
      region: toUndefined(raw.region),
      amount: toUndefined(raw.amount),
    };
    console.log("提交数据", output);
    message.success("提交成功，查看控制台");
    alert(JSON.stringify(output,null,2))
  };

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        高级筛选表单 练习四
      </Title>
      <Card>
        {/* 把 form 和 onFinish 绑到 <Form> 上 */}
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="时间范围" name="dateRange">
            <RangePicker
              style={{ width: "100%" }}
              showTime
              allowClear //允许清除
              placeholder={["开始时间", "结束时间"]}
            ></RangePicker>
          </Form.Item>

          <Form.Item label="城市" name="city">
            <Select allowClear placeholder="请选择城市">
              <Select.Option value="beijing">北京</Select.Option>
              <Select.Option value="shanghai">上海</Select.Option>
              <Select.Option value="lanzhou">兰州</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="地区" name="region">
            <Cascader
              allowClear
              placeholder="请选择地区"
              options={regionOptions}
            />
          </Form.Item>

          <Form.Item
            label="金额"
            name="amount"
            normalize={(v) => (v === "" || v === null ? undefined : v)}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="请输入金额"
              min={0}
            ></InputNumber>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
