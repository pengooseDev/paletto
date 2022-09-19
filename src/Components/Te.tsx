import { TeAtom } from "../atoms";
import { useRecoilState } from "recoil";
import React from "react";

const Te = () => {
    const [te, setTe] = useRecoilState(TeAtom);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const targetValue = Number(e.currentTarget.value);
        setTe((prev) => targetValue);
    };

    return (
        <div>
            <input type="range" value={te} onChange={changeHandler}></input>
            <div>{te}</div>
            <div>123</div>
        </div>
    );
};

export default Te;
