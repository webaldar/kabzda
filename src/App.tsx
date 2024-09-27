import React, {useState} from 'react';
import './App.css';
import {Switcher} from "./component/switcher/Switcher";
import {Rating} from "./component/rating/Rating";
import {UncontrolledRating} from "./component/rating/UncontrolledRating";
import {Accordion} from "./component/accordion/Accordion";
import {UncontrolledAccordion} from "./component/accordion/UncontrolledAccordion";
import {UncontrolledSwitcher} from "./component/switcher/UncontroledSwitcher";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5
function App() {
    const [rating, setRating] = useState<ratingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switcherStatus, setSwitcherStatus] = useState<boolean>(true)

    return (
        <div className="App">
            <UncontrolledRating/>
            <Switcher status={switcherStatus} changeStatus={setSwitcherStatus}/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed} changeCollapsed={setAccordionCollapsed}/>
            <Rating value={rating} ratingChange={setRating}/>
            <UncontrolledAccordion title={'Menu uncontrolled'} />
            <UncontrolledSwitcher/>
        </div>
    );
}

export default App;
