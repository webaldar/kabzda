import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switcher} from "./component/switcher";
import {Rating} from "./component/Rating";
import {UncontrolledRating} from "./component/UncontrolledRating";
import {Accordion} from "./component/Accordion";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5
function App() {


    const [rating, setRating] = useState<ratingValueType>(0)
    return (
        <div className="App">
            <UncontrolledRating/>
            <Switcher/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Rating value={rating} ratingChange={setRating}/>
            <UncontrolledAccordion title={'Menu uncontrolled'} />

        </div>
    );
}

export default App;
