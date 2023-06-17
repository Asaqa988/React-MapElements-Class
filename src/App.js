import React from "react";
import MyHead from "./componentes/head";
import MyFooter from "./componentes/foot";
import MyMain from "./componentes/main";

import "../src/css/App.css";

import MyProduct from "./componentes/products";

export default function App() {
  return (
    <div>
      <MyHead />
      <MyMain />
      <MyProduct />

      <MyFooter />
    </div>
  );
}
