import React, { Component } from "react";
//in react-router-dom v6, "Switch" is replaced by routes "Routes".
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";


class App extends Component() {
  render() {
    return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
