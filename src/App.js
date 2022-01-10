import React from "react";
import "./App.css";
import Feed from "./components/Body/Feed/Feed";
import Sidebar from "./components/Body/Sidebar/Sidebar";
import Contacts from "./components/Body/Contacts/Contacts";
import Header from "./components/Header/Header";
import Login from "./Login/Login";

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Contacts />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
