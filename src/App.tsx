import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switcher} from "./component/switcher";
import {Rating} from "./component/Rating";
import {UncontrolledRating} from "./component/UncontrolledRating";
import {Accordion} from "./component/Accordion";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion";

function App() {
    return (
        <div className="App">
            <Rating value={4}/>
            <UncontrolledRating/>
            <Switcher/>
            <Accordion title={'Menu'} collapsed={false}/>
            <UncontrolledAccordion title={'Menu uncontrolled'} />

        </div>
    );
}

export default App;
