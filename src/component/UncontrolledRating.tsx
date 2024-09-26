// @flow
import * as React from 'react';
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;


export const UncontrolledRating = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} value={1} changeStatus={setValue}/>

            <Star selected={value > 1} value={2} changeStatus={setValue}/>

            <Star selected={value > 2} value={3} changeStatus={setValue}/>

            <Star selected={value > 3} value={4} changeStatus={setValue}/>

            <Star selected={value > 4} value={5} changeStatus={setValue}/>

        </div>
        // <div>
        //     <Star selected={value > 0}/><button onClick={ () => {setValue(1)}}>1</button>
        //     <Star selected={value > 1}/><button onClick={ () => {setValue(2)}}>2</button>
        //     <Star selected={value > 2}/><button onClick={ () => {setValue(3)}}>3</button>
        //     <Star selected={value > 3}/><button onClick={ () => {setValue(4)}}>4</button>
        //     <Star selected={value > 4}/><button onClick={ () => {setValue(5)}}>5</button>
        // </div>
    );

};
type StarProps = {
    selected: boolean
    value: number
    changeStatus: (value: number) => void
}

function Star(props: StarProps) {
    const changeStatusHandler = () => {
        props.changeStatus(props.value)
    }
    return <span onClick={changeStatusHandler}>{props.selected ? <b>Star</b> : "Star"}</span>
    // return (props.selected ?
    //         <span onClick={changeStatusHandler}><b>Star</b></span> :
    //         <span onClick={changeStatusHandler}>Star</span>
    // )
}