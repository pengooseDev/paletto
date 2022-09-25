import { useRecoilState } from "recoil";
import { HSVAtom, palettoAtom } from "../atoms";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const PalettoContainer = styled.div`
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
`;

const Paletto = styled.div`
    background: white;
    height: 100%;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

const Color = styled.div<{ color: string }>`
    display: grid;
    grid-template-rows: 1fr 30px;
    background: ${(props) => props.color};
    font-weight: 600;
    color: white;
    :hover {
        cursor: pointer;
    }

    :last-child {
        border-radius: 0px 5px 5px 0px;
    }
    :first-child {
        border-radius: 5px 0px 0px 5px;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const DeleteContainer = styled.div<{ color: string }>`
    background: ${(props) => props.color};
    display: flex;
`;

const Delete = styled.svg`
    background: white;
    width: 100%;
    height: 30px;
    background: rgba(255, 255, 255, 0.25);
    transition: 0.15s ease-in-out;
    :hover {
        background: rgba(255, 255, 255, 0.85);
    }
`;

const MyPaletto = () => {
    const [paletto, setPaletto] = useRecoilState(palettoAtom);
    const [color, setColor] = useRecoilState(HSVAtom);

    const palettoClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        copyFunc(e);
        const target = e.currentTarget.innerHTML;
        const tinyHSV = tinycolor(target).toHsv();
        setColor((prev) => {
            const newData = {
                ["h"]:
                    Math.floor(tinyHSV.h) % 2 === 1
                        ? Math.floor(tinyHSV.h) + 1
                        : Math.floor(tinyHSV.h),
                ["s"]: Math.floor(
                    Math.floor(tinyHSV.s * 100) % 2 === 1
                        ? Math.floor(tinyHSV.s * 100) + 1
                        : Math.floor(tinyHSV.s * 100)
                ),
                ["v"]: Math.floor(
                    Math.floor(tinyHSV.v * 100) % 2 === 1
                        ? Math.floor(tinyHSV.v * 100) + 1
                        : Math.floor(tinyHSV.v * 100)
                ),
            };
            return newData;
        });
    };

    const deleteClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        setPaletto((prev) => {
            const target =
                e.currentTarget.parentElement?.firstElementChild?.innerHTML;
            const newArray = [...prev];

            if (!target) return prev;
            newArray.splice(newArray.indexOf(target), 1);
            return newArray;
        });
    };

    const copyFunc = (e: React.MouseEvent<HTMLElement>) => {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = e.currentTarget.innerHTML;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
    };

    return (
        <PalettoContainer>
            <Paletto>
                {paletto.map((v, i) => (
                    <Color color={v} key={i}>
                        <div onClick={palettoClickHandler}>{v}</div>
                        <DeleteContainer color={v} onClick={deleteClickHandler}>
                            <Delete
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                            </Delete>
                        </DeleteContainer>
                    </Color>
                ))}
            </Paletto>
        </PalettoContainer>
    );
};

export default MyPaletto;
