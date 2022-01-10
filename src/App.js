import React from "react";
import "./App.css";
import Feed from "./components/Body/Feed/Feed";
import Sidebar from "./components/Body/Sidebar/Sidebar";
import Contacts from "./components/Body/Contacts/Contacts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
