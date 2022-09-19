# Palleto

library : https://github.com/bgrins/TinyColor

---

[ 기능 ]
화면이 마운트 될 때, useEffect를 이용한 랜덤한 Color Generate.
색상 별로면 Click 다시.

More 버튼을 Click하면 해당 Color과 어울리는 색상 Generate

---

### Atom

palette : []

-   사용자가 선택한 색상의 Data가 해당 palette에 담기게 됨.

1. random한 색상이 display에 셋팅됨.

[ Dislike ]
다시 Generate

[ Like ]

1.  해당 색상을 palette에 담고 다시 새로운 색상을 Generate

palette = [[255,255,255], [132,64,131], [40,64,108]]

---

### type

type TColor = [number, number, number];
palette: TColor[]

palette의 default 값은 빈Array.
React.useEffect를 이용해 Component가 Mount시 Color Generate 후 setRecoilState의 모디파이어를 이용해 color 셋팅.

(paletteAtom);
display는 grid로 []의 데이터에 따라

```ts
const [palette, setPalette] = useRecoilState;
{
    palette.map((i) => <Palette>{i}</Palette>);
}
```

---후순위

-   Palette Component
    Palette Component는 다음과 같은 기능을 내포해야한다.
    (안만들어도 OK 일단 후순위)

```ts
{
    hover: {
        delete: "onClick시 해당 컴포넌트의 값을(id설정해주면 될 듯.) palette에서 삭제."
    },
    betweenComponents: {
        add: "onClick시 두 컴포넌트 사이에 색상을 섞어줌. - tinyColor 쓰면 될 듯"
    }

}
```
