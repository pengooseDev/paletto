import { atom } from "recoil";

export type TColor = [] | [number, number, number];
export type TPalette = TColor[];

export const paletteAtom = atom<TPalette>({
    key: "paletteAtom",
    default: [],
});

export const generateColorAtom = atom<TColor>({
    key: "generateColorAtom",
    default: [],
});

/* HSV */
export type THSV = {
    h: number;
    s: number;
    v: number;
};

export const HSVAtom = atom<THSV> ({
    key:"HSVAtom",
    default:{h:0,s:0,v:0}
})



///////
type TTe = number;

export const TeAtom = atom<TTe>({
    key:"TeAtom",
    default:0
})