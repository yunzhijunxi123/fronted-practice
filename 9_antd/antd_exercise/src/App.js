import React from "react";
import GridLayout from "./components/GridLayout";
import TableFilter from "./components/TableFilter";
import FormDemo from "./components/FormDemo";
import FilterForm from "./components/FilterForm";
import FilterForm2 from "./components/FilterForm2";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GridLayout />
      <TableFilter />
      <FormDemo />
      <FilterForm2/>
    </div>
  );
}

export default App;