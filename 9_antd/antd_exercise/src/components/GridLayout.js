import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";

const { Title, Text } = Typography;

// ================== 辅助：彩色占位块 ==================
const boxStyle = (color) => ({
  background: color,
  color: "#fff",
  textAlign: "center",
  padding: "16px 0",
  borderRadius: 4,
  fontSize: 14,
  minHeight: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const colors = ["#1677ff", "#52c41a", "#fa8c16", "#eb2f96", "#722ed1", "#13c2c2"];

//children：方块里显示的文字（比如 "左对齐 #1"）
const Box = ({ color, children, style }) => (
  <div style={{ ...boxStyle(color), ...style }}>{children}</div>
);

// ================== Section 包装 ==================
const Section = ({ title, desc, children }) => (
  <Card
    //title显示左侧
    title={<Title level={4} style={{ margin: 0 }}>{title}</Title>}
    style={{ marginBottom: 24 }}
    //desc显示右侧
    extra={desc && <Text type="secondary">{desc}</Text>}
  >
    {children}
  </Card>
);

// ================== 主组件 ==================
export default function GridLayout() {
  return (
    <div style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
         Row / Col 栅格布局 练习一
      </Title>

      <Section title="1. 左对齐" desc='justify="start"'>
        {/* antd行组件 gutter设置相邻 Col 之间左右间隔 16px 当 Col 折行时，上下两行之间间隔 16px */}
        <Row justify="start" gutter={[16, 16]}>
          {/* 截取数组前三个元素  */}
          {colors.slice(0, 3).map((c, i) => (
            <Col key={i} span={6}>
              <Box color={c}>左对齐 #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="2. 居中对齐" desc='justify="center"'>
        <Row justify="center" gutter={[16, 16]}>
          {colors.slice(0, 3).map((c, i) => (
            <Col key={i} span={6}>
              <Box color={c}>居中 #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="3. 右对齐" desc='justify="end"'>
        <Row justify="end" gutter={[16, 16]}>
          {colors.slice(0, 3).map((c, i) => (
            <Col key={i} span={6}>
              <Box color={c}>右对齐 #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="4. 两侧分散对齐" desc='justify="space-between"'>
        <Row justify="space-between" gutter={[16, 16]}>
          {colors.slice(0, 4).map((c, i) => (
            <Col key={i} span={5}>
              <Box color={c}>space-between #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      {/*盒子之间间距是两端间距的2bei*/}
      <Section title="5. 环绕分布" desc='justify="space-around"'>
        <Row justify="space-around" gutter={[16, 16]}>
          {colors.slice(0, 3).map((c, i) => (
            <Col key={i} span={5}>
              <Box color={c}>space-around #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      {/*每个空隙严格相等*/}
      <Section title="6. 等距分布" desc='justify="space-evenly"'>
        <Row justify="space-evenly" gutter={[16, 16]}>
          {colors.slice(0, 4).map((c, i) => (
            <Col key={i} span={5}>
              <Box color={c}>space-evenly #{i + 1}</Box>
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="7. 不等高元素垂直居中" desc='align="middle" — 行内元素在同一水平线上垂直居中'>
        <Row align="middle" gutter={[16, 16]}>
          <Col span={6}>
            <Box color="#1677ff" style={{ height: 60 }}>矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#52c41a" style={{ height: 120 }}>高</Box>
          </Col>
          <Col span={6}>
            <Box color="#fa8c16" style={{ height: 40 }}>更矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#eb2f96" style={{ height: 90 }}>中</Box>
          </Col>
        </Row>
        <Divider />
        <Text type="secondary">
          对比：未设置 align（默认 top），元素顶部对齐
        </Text>
        <Row gutter={[16, 16]} style={{ marginTop: 12 }}>
          <Col span={6}>
            <Box color="#1677ff" style={{ height: 60 }}>矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#52c41a" style={{ height: 120 }}>高</Box>
          </Col>
          <Col span={6}>
            <Box color="#fa8c16" style={{ height: 40 }}>更矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#eb2f96" style={{ height: 90 }}>中</Box>
          </Col>
        </Row>
        
        <Divider />
        <Text type="secondary">
          底部对齐：align="bottom"
        </Text>
        <Row align="bottom" gutter={[16, 16]} style={{ marginTop: 12 }}>
          <Col span={6}>
            <Box color="#1677ff" style={{ height: 60 }}>矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#52c41a" style={{ height: 120 }}>高</Box>
          </Col>
          <Col span={6}>
            <Box color="#fa8c16" style={{ height: 40 }}>更矮</Box>
          </Col>
          <Col span={6}>
            <Box color="#eb2f96" style={{ height: 90 }}>中</Box>
          </Col>
        </Row>
      </Section>

      <Section title="8. 按比例分布" desc="Col 使用 flex 属性实现弹性比例（flex={1|2|3}）">
        <Row gutter={[16, 16]}>
          <Col flex={1}>
            <Box color="#1677ff">flex=1</Box>
          </Col>
          <Col flex={2}>
            <Box color="#52c41a">flex=2</Box>
          </Col>
          <Col flex={3}>
            <Box color="#fa8c16">flex=3</Box>
          </Col>
        </Row>
      </Section>

      <Section title="9. 自动拉伸 / 填充剩余空间" desc='Col flex="auto"' >
        <Text type="secondary">
          左侧自适应内容宽度，右侧自动拉伸填充剩余空间
        </Text>
        <Row gutter={[16, 16]} style={{ marginTop: 12 }}>
          <Col flex="none">
            <Box color="#1677ff" style={{ width: 120 }}>flex=none（固定宽）</Box>
          </Col>
          <Col flex="auto">
            <Box color="#52c41a">flex=auto（拉伸填满）</Box>
          </Col>
        </Row>
      </Section>

      {/* ===== 10. 综合：栅格 span 布局 ===== */}
      <Section title="10. 经典 24 栅格布局" desc="span 总和 24，标准栅格">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Box color="#1677ff">8</Box>
          </Col>
          <Col span={8}>
            <Box color="#52c41a">8</Box>
          </Col>
          <Col span={8}>
            <Box color="#fa8c16">8</Box>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Box color="#eb2f96">6</Box>
          </Col>
          <Col span={6}>
            <Box color="#722ed1">6</Box>
          </Col>
          <Col span={6}>
            <Box color="#13c2c2">6</Box>
          </Col>
          <Col span={6}>
            <Box color="#1677ff">6</Box>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Box color="#52c41a">12</Box>
          </Col>
          <Col span={6}>
            <Box color="#fa8c16">6</Box>
          </Col>
          <Col span={6}>
            <Box color="#eb2f96">6</Box>
          </Col>
        </Row>
      </Section>
    </div>
  );
}
