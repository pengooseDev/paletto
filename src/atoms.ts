import { atom } from "recoil";

export type TColor = [number, number, number];

export const colorAtom = atom<TColor>({
    key: "colorAtom",
    default: [0, 0, 0],
});
