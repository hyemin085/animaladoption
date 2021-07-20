import React from "react";
import './App.css';
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";

import Login from "../page/Login";
import Header from "../components/Header";
import Main from "../page/Main";
import Signup from "../page/Signup";
import PostWrite from "../page/PostWrite";




import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <React.Fragment>

        <ConnectedRouter history={history}>

      <Route path="/login" exact component={Login}/>
      <Route path="/header" exact component={Header}/>
      <Route path="/" exact component={Main}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/write" exact component={PostWrite}/>

        </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;
