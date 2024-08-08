// @flow
import * as React from 'react';

type StarType = {
    value: number
};
export const Rating = (props: StarType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );

};
type StarProps = {
    selected: boolean
}
function Star(props: StarProps) {
    return props.selected ? <span><b>Star</b></span> : <span>Star</span>
}