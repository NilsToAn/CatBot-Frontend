import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader'
import MyBody from './components/MainBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
    <div className="App">
      <header>
        <MyHeader />
      </header>
      <main>
        <MyBody />
      </main>
    </div>
    </Container>
  )
}

export default App;
