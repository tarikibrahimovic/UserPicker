import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Gender from "./pages/GenderPage/Gender";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch("https://randomuser.me/api/?results=10");
  //     const data = await response.json();
  //     console.log(data.results);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gender/>} />
        <Route path="/users" element={<UsersPage/>} />
      </Routes>
    </div>
  );
}

export default App;
