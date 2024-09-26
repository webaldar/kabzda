// @flow
import * as React from 'react';

type AccordionProps = {
    title: string
    collapsed: boolean
};
export const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            {!props.collapsed && <AccordionBody/>}
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