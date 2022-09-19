import {TeAtom} from "../atoms";
import {useRecoilState} from "recoil";

const Te = () => {
    const [te,setTe] = useRecoilState(TeAtom)

    const changeHandler = () => {
        
    }

    return (
        <div>
            <input type="range" onChange={changeHandler}></input>
            <div>{te}</div>
        </div>       
    )
};

export default Te;