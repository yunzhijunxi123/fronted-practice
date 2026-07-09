import React from "react";
import GridLayout from "./components/GridLayout";
import TableFilter from "./components/TableFilter";
import FormDemo from "./components/FormDemo";
import FilterForm from "./components/FilterForm";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GridLayout />
      <TableFilter />
      <FormDemo />
      <FilterForm />
    </div>
  );
}

export default App;