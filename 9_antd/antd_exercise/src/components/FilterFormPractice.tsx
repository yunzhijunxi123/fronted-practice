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

// ============================================================
// 第1步：解构子组件 —— 把一个大组件里的"零件"拆出来，后面直接用短名字
// ============================================================
const { Title } = Typography;       // Typography.Title → Title
const { RangePicker } = DatePicker; // DatePicker.RangePicker → RangePicker

// ============================================================
// 第2步：定义类型 —— 告诉 TypeScript 表单里存什么、输出什么
// ============================================================

// 表单内部存的数据类型（日期是 moment 对象）
interface FormValues {
  dateRange?: [moment.Moment, moment.Moment]; // 时间范围（可选）
  city?: string;                               // 城市（可选）
  region?: (string | number)[];                // 地区级联值（可选）
  amount?: number;                             // 金额（可选）
}

// 提交后输出的数据类型（日期转成了数字时间戳）
interface OutputValues {
  dateRange?: [number, number];
  city?: string;
  region?: (string | number)[];
  amount?: number;
}

// ============================================================
// 第3步：准备数据 —— 级联选择器的选项数据
// ============================================================
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

// ============================================================
// 第4步：工具函数 —— 把空字符串 / null 统一转成 undefined，保证输出干净
// ============================================================
const toUndefined = <T,>(v: T): T | undefined => {
  if (v === "" || v === null) return undefined;
  return v;
};

// ============================================================
// 第5步：写组件本体
// ============================================================
export default function FilterFormPractice() {
  // 【关键】创建表单实例 —— 这个对象替我们管理所有表单数据
  const [form] = Form.useForm<FormValues>();

  // 【关键】提交回调 —— 用户点"提交"且校验通过后触发
  const onFinish = (raw: FormValues) => {
    // --- 后处理1：把 Moment 对象转成数字时间戳 ---
    const dateRange =
      raw.dateRange && raw.dateRange[0] && raw.dateRange[1]
        ? ([raw.dateRange[0].valueOf(), raw.dateRange[1].valueOf()] as [
            number,
            number,
          ])
        : undefined;

    // --- 后处理2：组装最终输出，空值统一转 undefined ---
    const output: OutputValues = {
      dateRange,
      city: toUndefined(raw.city),
      region: toUndefined(raw.region),
      amount: toUndefined(raw.amount),
    };

    message.success("提交成功！");
    console.log("提交数据：", output);
  };

  // ============================================================
  // 渲染：标题 + 卡片 + 表单
  // ============================================================
  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        高级筛选表单 - 练习重写
      </Title>

      <Card>
        {/* form={form} 把实例注入   onFinish={onFinish} 绑定提交回调 */}
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* ---------- 字段1：时间范围 ---------- */}
          <Form.Item label="时间范围" name="dateRange">
            <RangePicker
              style={{ width: "100%" }}
              showTime
              allowClear
              placeholder={["开始时间", "结束时间"]}
            />
          </Form.Item>

          {/* ---------- 字段2：城市下拉 ---------- */}
          <Form.Item label="城市" name="city">
            <Select allowClear placeholder="请选择城市">
              <Select.Option value="beijing">北京</Select.Option>
              <Select.Option value="shanghai">上海</Select.Option>
              <Select.Option value="guangzhou">广州</Select.Option>
              <Select.Option value="shenzhen">深圳</Select.Option>
            </Select>
          </Form.Item>

          {/* ---------- 字段3：地区级联 ---------- */}
          <Form.Item label="地区" name="region">
            <Cascader
              allowClear
              options={regionOptions}
              placeholder="请选择地区"
            />
          </Form.Item>

          {/* ---------- 字段4：金额数字 ---------- */}
          {/* normalize 作用：值在"存入 form"之前先拦截处理，空值直接变成 undefined */}
          <Form.Item
            label="金额"
            name="amount"
            normalize={(v) => (v === "" || v === null ? undefined : v)}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="请输入金额"
              min={0}
            />
          </Form.Item>

          {/* ---------- 提交按钮 ---------- */}
          {/* htmlType="submit" 让它触发 Form 的 onFinish */}
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
