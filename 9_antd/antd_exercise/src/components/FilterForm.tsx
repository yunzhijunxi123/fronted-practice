import React from "react";
import {
  Form,
  DatePicker,
  Select,
  Cascader,
  InputNumber,
  Button,
  Card,
  Typography,
  message,
} from "antd";
import moment from "moment";
//	从 Typography 组件里取出 Title 子组件，后面直接写 <Title> 就行
const { Title } = Typography;
//	从 DatePicker 里取出 RangePicker（时间范围选择器），后面直接写 <RangePicker>
const { RangePicker } = DatePicker;

//描述表单字段的类型 四个都是可选字段
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

//级联数据
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

//把 "" 或 null 统一转成 undefined，保证输出干净 T为泛型
const toUndefined = <T,>(v: T): T | undefined => {
  if (v === "" || v === null) return undefined;
  return v;
};

//组件
export default function FilterForm() {
  const [form] = Form.useForm<FormValues>();
  //用户点击了 htmlType="submit" 的按钮，且所有校验通过  触发onFinish 处理函数
  const onFinish = (raw: FormValues) => {
    // 用户选了时间范围 开始时间选了 结束时间选了 则输出时间戳 否则输出undefined
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

    message.success("提交成功，查看控制台");
    console.log("提交数据：", output);
    alert(JSON.stringify(output, null, 2));
  };

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        高级筛选表单 练习四
      </Title>

      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* 时间范围 */}
          <Form.Item label="时间范围" name="dateRange">
            <RangePicker
              style={{ width: "100%" }}
              showTime
              allowClear
              placeholder={["开始时间", "结束时间"]}
            />
          </Form.Item>

          {/* 选择器 */}
          <Form.Item label="城市" name="city">
            <Select allowClear placeholder="请选择城市">
              <Select.Option value="beijing">北京</Select.Option>
              <Select.Option value="shanghai">上海</Select.Option>
              <Select.Option value="guangzhou">广州</Select.Option>
              <Select.Option value="shenzhen">深圳</Select.Option>
            </Select>
          </Form.Item>

          {/* 级联选择 */}
          <Form.Item label="地区" name="region">
            <Cascader
              allowClear
              options={regionOptions}
              placeholder="请选择地区"
            />
          </Form.Item>

          {/* 数字输入（双向绑定） */}
          {/*  读方向： form 里存着 amount 的值，自动塞给输入框显示——输入框长什么样，全看 form 里记了什么。
               写方向： 用户在输入框里敲一个字，form 立刻记下来——form 里永远跟输入框保持同步。*/}
          <Form.Item
            label="金额"
            name="amount"
            normalize={(v) => (v === "" || v === null ? undefined : v)}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="请输入金额（选中后按 Delete 清除）"
              min={0}
            />
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
