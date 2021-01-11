import React,{useState} from 'react';
import './App.css';
import MyBody from './components/MainBody'
import MyFooter from './components/MyFooter'
import MyUberuns from './components/MyUberuns'
import MyImpressum from './components/MyImpressum'
import MyDatenschutz from './components/MyDatenschutz';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [withFooter, setWithFooter] = useState(true)
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path='/ueberuns' component={MyUberuns} />
          <Route path='/impressum' component={MyImpressum} />
          <Route path='/datenschutz' component={MyDatenschutz}/>
          <Route path='/:v&:id' render={props => 
            <MyBody {...props} setWithFooter={setWithFooter}/>} />
          <Route path='/' component={MyBody} />
        </Switch>
      </main>
      {withFooter?
      <footer>
        <MyFooter/>
      </footer>
    :null}
    </Router>
  )
}

export default App;
