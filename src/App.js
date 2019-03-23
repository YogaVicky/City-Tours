import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/navbar'
import './App.scss';
import Tourlist from './Components/Tourlist' ;
class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navbar></Navbar>
      <Tourlist></Tourlist>
     </React.Fragment>
    );
  }
}

export default App;
