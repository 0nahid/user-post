import { Container } from '@mui/material';
import * as React from 'react';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>This is /App.js component</h1>
      <Header />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
