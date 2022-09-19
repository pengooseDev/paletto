# Palleto

library : https://github.com/bgrins/TinyColor

---

[ 기능 ]

1. Click하면 랜덤 색상 Generate. 이걸 <input type="color" />로 하면 좋을듯?

-   마음에 안들면 reGenerate

> Select 누른 경우 5가지 Variation 제공.
> h() : H값에 난수를 더하고, 360 나머지로 나눔.
> colorness() : 난수를 이용한 채도"만" 변경.
> brightness() : 난수를 이용한 명도"만" 변경.
> h() + colorness() : 색상 바꾸고 채도 변경.
> h() + brightness() : 색상 바꾸고 명도 변경.

반복!

onChange(onmouseup)일 때, 해당 값 다시 recoilState에 저장.

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

---

Framer Motion을 써보는 것도 재밌을 듯..?

내가 고른 색상들 linear-gradient.
Y축 고정하고 Drag로 페이지 넘겼을 때, 색상 변경되는 느낌으로 (H값)
