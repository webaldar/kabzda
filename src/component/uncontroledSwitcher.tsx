// @flow
import * as React from 'react';
import {useState} from "react";

type SwitcherPropsType = {};
export const UncontrolledSwitcher = () => {
    let [on, setOn] = useState(true)
    // let on = true
    const onStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginLeft: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
    }
    const switchOn = () => {
        setOn(true)
    }
    const switchOff = () => {
        setOn(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On
            </div>
            <div style={offStyle} onClick={switchOff}>Off
            </div>
            {/*<div style={onStyle} onClick={() => {setOn(true)}}>On</div>*/}
            {/*<div style={offStyle} onClick={() => {setOn(false)}}>Off</div>*/}
            <div style={indicatorStyle}></div>
        </div>
    );
};