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
