import React, { useState, useMemo } from "react";
import { Table, Select, Typography, Card } from "antd";

const { Title } = Typography;
const { Option } = Select;

//模拟数据库
const dataSource = [
  { key: "1", name: "芹菜花生米", category: "凉菜", price: 8, stock: 120 },
  { key: "2", name: "凉拌土豆丝", category: "凉菜", price: 5, stock: 200 },
  { key: "3", name: "蒜香茄条", category: "凉菜", price: 15, stock: 60 },
  { key: "4", name: "宫保鸡丁", category: "热菜", price: 3, stock: 300 },
  { key: "5", name: "溜肉段", category: "热菜", price: 4, stock: 180 },
  { key: "6", name: "锅包肉", category: "热菜", price: 6, stock: 250 },
  { key: "7", name: "米饭", category: "主食", price: 28, stock: 80 },
  { key: "8", name: "面条", category: "主食", price: 45, stock: 50 },
  { key: "9", name: "油饼", category: "主食", price: 18, stock: 100 },
];

const columns = [
  { title: "名称", dataIndex: "name", key: "name" },
  { title: "类别", dataIndex: "category", key: "category" },
  { title: "单价 (元)", dataIndex: "price", key: "price", sorter: (a, b) => a.price - b.price },
  { title: "库存", dataIndex: "stock", key: "stock", sorter: (a, b) => a.stock - b.stock },
];

export default function TableFilter() {
  const [category, setCategory] = useState("全部");

  // 去重类别列表
  //用map把所有记录的category提取出来 再用set去重 
  const categories = useMemo(() => {
    const set = new Set(dataSource.map((d) => d.category));
    return ["全部", ...set];
  }, []);

  // 按类别筛选
  //最后的[category] 是依赖数组 变化则重新执行函数
  const filtered = useMemo(() => {
    if (category === "全部") return dataSource;
    return dataSource.filter((d) => d.category === category);
  }, [category]);

  return (
    <div style={{ padding: 32, maxWidth: 800, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        表格分类筛选 练习二
      </Title>

      <Card>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 8 }}>筛选类别：</span>
          <Select
            value={category}
            onChange={setCategory}
            style={{ width: 160 }}
          >
            {categories.map((c) => (
              <Option key={c} value={c}>{c}</Option>
            ))}
          </Select>
          <span style={{ marginLeft: 16, color: "#999" }}>
            共 {filtered.length} 条
          </span>
        </div>

        <Table
          dataSource={filtered}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
}