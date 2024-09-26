// @flow
import * as React from 'react';
import {useState} from "react";

type AccordionProps = {
    title: string
};



export const UncontrolledAccordion = (props: AccordionProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <h3 onClick={() => {changeCollapsed()}}>{props.title}</h3>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}