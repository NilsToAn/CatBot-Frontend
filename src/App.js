import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader'
import MyBody from './components/ExampleBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
    <div className="App">
      <header>
        <MyHeader />
      </header>
      <body>
        <MyBody />
      </body>
    </div>
    </Container>
  )
}

export default App;
