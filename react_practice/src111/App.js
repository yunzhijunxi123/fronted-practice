import React, { useState, useEffect, useRef } from "react";

import ListItem from "./components/ListItem";
import AnimalList from "./components/AnimalList";
import CountDown from "./components/CountDown";
import CountDown2 from "./components/CountDown2";
import SearchBox from "./components/SearchBox";
import SearchBox2 from "./components/SearchBox2";

export default function App() {
  return (
    <div>
      <AnimalList/>
      <hr />
      <CountDown2/>
      <hr/>
      <SearchBox2/>
    </div>
  );
}