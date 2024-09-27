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
            <AccordionTitle title={props.title} onClick={changeCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProrpsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitleProrpsType) => {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}