import { TColor } from "../atoms";

export const generateColor = ():TColor => {
    const color = [0,0,0]
    const returnData = color.map((i)=>Math.floor(Math.random() * 255));
    console.log(returnData)
    console.log(typeof returnData)
    return returnData;
};