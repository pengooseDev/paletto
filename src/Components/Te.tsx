import {TeAtom} from "../atoms";
import {useRecoilState} from "recoil";

const Te = () => {
    const [te,setTe] = useRecoilState(TeAtom)

    return (
        <div>
            <input type="range"></input>
            <div>{te}</div>
        </div>       
    )
};

export default Te;