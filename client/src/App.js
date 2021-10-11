import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routers/Home';
import {Models} from './Pages/Jangbi/Models';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import styled from 'styled-components';
import Add from './Components/WriteModal';


const Div = styled.div``;
const App = () => {
  return (
    <Div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/models">
        <Models />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
        <Route path = "/add">
          <Add />
          </Route>
    </Div>
  );
};

export default App;
