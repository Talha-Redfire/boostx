import React from "react";
import "./App.css";
import Router from "./routes";
import Layout from "./Layout";

function App() {
  return (
    <div className="MainComponent">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}
export default App;
