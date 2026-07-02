import React, { useState, useEffect, useRef } from "react";

import ListItem from "./components/ListItem";
import AnimalList from "./components/AnimalList";
import CountDown from "./components/CountDown";

export default function App() {
  return (
    <div>
      <AnimalList/>
      <hr />
      <CountDown/>
      <hr/>
    </div>
  );
}
