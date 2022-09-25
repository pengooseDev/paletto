import { atom } from "recoil";
interface IHSV {
    h: number;
    s: number;
    v: number;
}

type IPaletto = string[];
export const palettoAtom = atom<IPaletto>({
    key: "palettoAtom",
    default: [],
});

export const HSVAtom = atom<IHSV>({
    key: "HSVAtom",
    default: {
        h: 180,
        s: 70,
        v: 60,
    },
});
