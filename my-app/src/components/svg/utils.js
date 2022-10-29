import {coordinateMock} from "./coordinateMock";

export const newCoordinate = (type,key,value) => {
    const str = String(value)

    if (str.length === 1)
        return {
            value,
            ...coordinateMock[type][key]
        }

    const leftShift = ((str.length - 1 ) * 8.63) / 2

    return {
        ...coordinateMock[type][key],
        x: coordinateMock[type][key].x - leftShift,
        value,
    }
}