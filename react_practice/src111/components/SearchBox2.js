import React, { useEffect, useState } from "react";

const students = [
  { id: 1, name: "aaa", score: 95 },
  { id: 2, name: "abb", score: 95 },
  { id: 3, name: "acc", score: 95 },
];
export default function SearchBox2() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(students);

  useEffect(() => {
    const filtered = result.filter((s) => {
      return s.name.includes(keyword);
    });
    setResult(filtered)
  }, [keyword]);

  return (
    <div>
      <h2>搜索案例</h2>
      <input
        type="text"
        placeholder="请输入文本"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {result.length > 0 ? (
          result.map((s) => (
            <li key={s.id}>
              {s.name} {s.score}
            </li>
          ))
        ) : (
          <li>未查找到结果</li>
        )}
      </ul>
    </div>
  );
}
