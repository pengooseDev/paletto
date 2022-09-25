import { atom } from "recoil";
interface IHSV {
    h: number;
    s: number;
    v: number;
}

export const HSVAtom = atom<IHSV>({
    key: "HSVAtom",
    default: {
        h: 180,
        s: 80,
        v: 50,
    },
});
