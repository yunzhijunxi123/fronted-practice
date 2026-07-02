import React, { useState, useEffect, useRef } from "react";

import ListItem from "./components/ListItem";
import AnimalList from "./components/AnimalList";
import CountDown from "./components/CountDown";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <div>
      <AnimalList/>
      <hr />
      <CountDown/>
      <hr/>
      <SearchBox/>
    </div>
  );
}