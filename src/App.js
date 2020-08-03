import React from 'react';
import './App.css';
import MyBody from './components/MainBody'
import MyFooter from './components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path='/ueberuns'>
              <div>Über uns</div>
          </Route>
          <Route path='/impressum'>
              <div>impressum</div>
          </Route>
          <Route path='/'>
            <MyBody />
          </Route>
        </Switch>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </Router>
  )
}

export default App;
