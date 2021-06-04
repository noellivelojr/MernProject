import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <main>
        <Container>
          <h1> Hello</h1>
        </Container>
      </main>
    </Router>
  );
};

export default App;
