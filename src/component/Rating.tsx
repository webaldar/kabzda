// @flow
import * as React from 'react';
import './Rating.css'
import {ratingValueType} from "../App";

type StarType = {
    value: ratingValueType
    ratingChange: (value: ratingValueType) => void
};
export const Rating = (props: StarType) => {
    return (
        <div>
            <Star selected={props.value > 0} value={1} onClick={props.ratingChange}/>
            <Star selected={props.value > 1} value={2} onClick={props.ratingChange}/>
            <Star selected={props.value > 2} value={3} onClick={props.ratingChange}/>
            <Star selected={props.value > 3} value={4} onClick={props.ratingChange}/>
            <Star selected={props.value > 4} value={5} onClick={props.ratingChange}/>
        </div>
    );

};
type StarProps = {
    selected: boolean
    value: ratingValueType
    onClick: (value: ratingValueType) => void
}
function Star(props: StarProps) {

    // return props.selected ? <span><b>Star</b></span> : <span>Star</span>

    return <span onClick={() =>{props.onClick(props.value)}}>{ props.selected ? <b>Star </b> : "Star "}</span>
}