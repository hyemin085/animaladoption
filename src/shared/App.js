import React from "react";
import './App.css';

import Login from "../page/Login";
import Header from "../components/Header";
import Main from "../page/Main";



import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
      <Route path="/login" exact component={Login}/>
      <Route path="/header" exact component={Header}/>
      <Route path="/" exact component={Main}/>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
