import styled from "styled-components";
import { useRecoilState } from "recoil";
import { colorAtom, TColor } from "../atoms";

// 제네릭 타입: 기존 타입은 하나로 고정되어있는것에 반해, 여러 상황에 따라 다른 타입을 적용하기 위해 존재하는 것
// 별 상관 없어요
// 문서보고 올게요
// https://styled-components.com/docs/api#using-custom-props

// 어떤거가 이해가 안되시나요

// 네네
/*
type CustomColor = { customColor: string }
Object안에 customColor가 네네
: 이거는 Object안에서 key가 무슨 값인지 알려줄때 사용하는 겁니다
<> <- 이게 제네릭을 나타내는건데
저렇게 쓰는 이유가 아마 StyledComponent쪽에서 div가
div<T> => (

)
이런 식으로 선언이 되어있겠죠
펭춤님이 스토리지 클래스를 제네릭과 함께 만들어둔 것처럼
스타일드 컴포넌트도 제네릭 첫번째를 props로 쓰도록 해놓은거죠
이해가 되시나요?
네네
사실 더 햇갈릴만한게
일반 함수가 아니니까요
atoms에

const Header = styled.div:{ customColor: string }`

 */

// 저희는 알고있지, styled.div는 props로 뭐가 들어올지 몰라요
// 제네릭으로 알려주지 않은 상태에서는 그저 props는 any일 뿐입니다

// 해결법을 알려드리자면, Color을 export해서 이곳에서 import해서 사용하세요
/*
background: ${(props => 
이렇게 사용 안하시고
rgb(props[0], props[1])
이렇게 쓰시니까요
rgb(props.color[0])
*/

const ColorBox = styled.div<{ bgColor: [number, number, number] }>`
    background: ${(props) => {
        return `rgb(${props.bgColor[0]}, ${props.bgColor[1]}, ${props.bgColor[2]})`;
    }};
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    transition: ease-in-out 0.2s;
`;

const Button = styled.div`
    left: 35%;
    width: 50px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    background: whitesmoke;
    color: black;
    transition: 0.2s ease-in-out;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    :hover {
        cursor: pointer;
        background: white;
        color: black;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

const Color = () => {
    const [color, setColor] = useRecoilState(colorAtom);
    const randomPicker = () => {
        setColor((prev) => {
            const prevColor = [...prev];
            const randomColor = () => {
                return Math.floor(Math.random() * 255);
            };
            console.log([randomColor(), randomColor(), randomColor()]);
            const newColor: TColor = [
                randomColor(),
                randomColor(),
                randomColor(),
            ];
            return newColor;
        });
    };

    return (
        <>
            <ColorBox bgColor={color}></ColorBox>
            <Button onClick={randomPicker}>Click</Button>
        </>
    );
};

export default Color;
