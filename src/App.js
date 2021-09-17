import { Container } from '@mui/material';
import * as React from 'react';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nomatch from './Components/Header.js/Nomatch/Nomatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
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
