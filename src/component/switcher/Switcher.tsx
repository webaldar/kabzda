// @flow
import * as React from 'react';

type SwitcherPropsType = {
    status: boolean
    changeStatus: (value: boolean) => void
};
export const Switcher = (props: SwitcherPropsType) => {

    const onStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: props.status ? 'green' : 'white',
    }
    const offStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: props.status ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginLeft: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.status ? 'green' : 'red',
    }
    const switchOn = () => {
        props.changeStatus(true)
    }
    const switchOff = () => {
        props.changeStatus(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On
            </div>
            <div style={offStyle} onClick={switchOff}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};