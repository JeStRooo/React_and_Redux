import React from 'react';
import {newCoordinate} from "./utils";

const Text = ({type, data}) => {
    const result = newCoordinate(type, 'result', data['result'])
    const interest = newCoordinate(type, 'interest', data['interest'])

    return (
        <>
            <text {...result}>{result.value}</text>
            <text {...interest}>{interest.value}</text>
        </>
    );
};

export default Text;