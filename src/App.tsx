import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switcher} from "./component/switcher";
import {Rating} from "./component/Rating";
import {UncontrolledRating} from "./component/UncontrolledRating";

function App() {
  return (
    <div className="App">
      <Switcher/>
      {/*<Rating value={5}/>*/}
      {/*<UncontrolledRating/>*/}
    </div>
  );
}

export default App;
