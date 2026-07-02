import React, { useState, useEffect } from "react";

// 学生列表
const students = [
  { id: 1, name: "aaa", score: 92 },
  { id: 2, name: "abb", score: 78 },
  { id: 3, name: "bab", score: 85 },
  { id: 4, name: "ddd", score: 66 },
  { id: 5, name: "eee", score: 95 },
  { id: 6, name: "fff", score: 73 },
];

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(students);

  //进行副作用处理 监听keyword的变化
  useEffect(() => {
    const filtered = students.filter((s) =>
      s.name.includes(keyword)//字符串匹配过渡
    );
    setResult(filtered);
  }, [keyword]);

  return (
    <div>
      <h2>搜索案例</h2>
      <input
        type="text"
        placeholder="请输入想搜索的学生姓名"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {result.length > 0 ? (
          result.map((s) => (
            <li key={s.id}>
               姓名：{s.name} 分数：{s.score}
            </li>
          ))
        ) : (
          <li>未查询到匹配的结果</li>
        )}
      </ul>
    </div>
  );
}
