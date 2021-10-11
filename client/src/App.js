import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routers/Home';
import Jangbi from './Pages/Jangbi';
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
      <Route path="/jangbi">
        <Jangbi />
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
