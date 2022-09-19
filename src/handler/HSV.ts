import { TColor, THSV } from "../atoms";

// RGB -> HSV convert fomula : https://www.had2know.org/technology/hsv-rgb-conversion-formula-calculator.html
// H(Hue; 색조), S(Saturation; 채도), V(Value; 명도)
export const HSV = (color: TColor): THSV => {
    if (!color[0] || !color[1] || !color[2])
        return {
            h: 0,
            s: 0,
            v: 0,
        }; //undefined exception
    const r = color[0] / 255;
    const g = color[1] / 255;
    const b = color[2] / 255;

    let rabs,
        gabs,
        babs,
        rr,
        gg,
        bb,
        h,
        s,
        v: number,
        diff: number,
        diffc,
        percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs);
    diff = v - Math.min(rabs, gabs, babs);
    diffc = (c: number) => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = (num: number) => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = 1 / 3 + rr - bb;
        } else if (babs === v) {
            h = 2 / 3 + gg - rr;
        }
        h = h ? h : (h = 0);

        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100) * 250,
    };
};
