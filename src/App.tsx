import React from "react";
import "./App.css";

import { formListData } from "./formlist/mockFormListData";
import FormList from "./formlist/FormList";

function App() {
  return (
    <div className="App">
      <FormList formDataList={formListData}></FormList>
    </div>
  );
}

export default App;
