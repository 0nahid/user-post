import { Container } from '@mui/material';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import PostDetails from './Components/PostDetails/PostDetails';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
