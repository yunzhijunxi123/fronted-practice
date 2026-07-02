import React from "react";
import ListItem from "./ListItem";

export default function AnimalList() {
  const animals = ["大象", "蚂蚁", "长颈鹿"];
  return (
    <div>
      <h2>动物列表</h2>
      <ul>
        {animals.map((animal) => (
          <ListItem key={animal} name={animal} />
        ))}
      </ul>
    </div>
  );
}
