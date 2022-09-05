import { atom } from "recoil";

export type TColor = [] | [number, number, number];

export const paletteAtom = atom<TColor>({
    key: "paletteAtom",
    default: [],
});
