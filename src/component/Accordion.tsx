// @flow
import * as React from 'react';

type AccordionProps = {
    title: string
    collapsed: boolean
};
export const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProrpsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitleProrpsType) => {
    return <h3>{props.title}</h3>
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}