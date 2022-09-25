import { atom } from "recoil";
interface IHSV {
    h: number;
    s: number;
    v: number;
}

export const HSVAtom = atom<IHSV>({
    key: "HSVAtom",
    default: {
        h: 0,
        s: 100,
        v: 100,
    },
});
