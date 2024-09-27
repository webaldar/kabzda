// @flow
import * as React from 'react';

type AccordionProps = {
    title: string
    collapsed: boolean
    changeCollapsed: (collapsed: boolean) => void
};
export const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {props.changeCollapsed(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody/>}
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