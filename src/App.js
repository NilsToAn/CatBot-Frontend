import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader'
import MyBody from './components/MyBody'

function App() {
  return (
    <div className="App">
      <header>
        <MyHeader />
      </header>
      <body>
        <MyBody />
      </body>
    </div>
  )
}

export default App;
