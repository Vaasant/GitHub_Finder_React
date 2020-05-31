import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import User from './components/users/User';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import Alert from './components/layout/Alert'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound'
import GithubState from './context/github/GithubState';
import AlertSatate from './context/alert/AlertState';

const App =()=>  {

 
    return (
      <GithubState>
        <AlertSatate>
          <Router>
          <div className="App">
          <Navbar/>
          <div className="container" >
          <Alert/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route exact path="/*" component={NotFound} />
          </Switch>
          </div>
          </div>
          </Router>
        </AlertSatate>
      </GithubState>
    );
  }
  


export default App;
