import { atom } from "recoil";
export type IColorPick = string;

export const colorPickAtom = atom<IColorPick>({
    key: "colorPickAtom",
    default: "black",
});
