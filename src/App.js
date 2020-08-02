import React from 'react';
import './App.css';
import MyBody from './components/MainBody'
import MyFooter from './components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <main className="App">
        <MyBody />
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </>
  )
}

export default App;
