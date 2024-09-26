// @flow
import * as React from 'react';
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;


export const UncontrolledRating = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} value={1} changeStatus={() => {setValue(1)}}/>
            <Star selected={value > 1} value={2} changeStatus={() => {setValue(2)}}/>
            <Star selected={value > 2} value={3} changeStatus={() => {setValue(3)}}/>
            <Star selected={value > 3} value={4} changeStatus={() => {setValue(4)}}/>
            <Star selected={value > 4} value={5} changeStatus={() => {setValue(5)}}/>
        </div>

    );

};
type StarProps = {
    selected: boolean
    value: number
    changeStatus: () => void
}

function Star(props: StarProps) {
    return <span onClick={props.changeStatus}>{props.selected ? <b>Star</b> : "Star"}</span>
}