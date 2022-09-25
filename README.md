# Palleto

library : https://github.com/bgrins/TinyColor

---

[ 기능 ]

1. 테마컬러 설정.

-   HSV 컨트롤러 제공.

하단의 Variation 컴포넌트에서 10가지 색상 제공.

-   Saturation / Value에 따른 색상 6개.
-   Hue+120 Variation 3개(Saturation / Value).
-   Hue+240 Variation 3개(Saturation / Value).

해당 Color과 어울리는 색상 Generate

---

### Atom & Type

HSV : {
h:number,
s:number,
v:number,
}

palette : []

interface IHSV {
h:number,
s:number,
v:number,
}

type THexCode = string;

palette: THexCode[];

palette의 default 값은 [].

(paletteAtom);
display는 grid로 []의 데이터에 따라 map으로 렌더링.

```ts
const [palette, setPalette] = useRecoilState;
{
    palette.map((i) => <Palette>{i}</Palette>);
}
```

---

# 추가할 것.

1. interation 할 때 sound 추가.
2. Copy되었음을 알 수 있는 UI

```

---

Framer Motion을 써보는 것도 재밌을 듯..?

내가 고른 색상들 linear-gradient.
Y축 고정하고 Drag로 페이지 넘겼을 때, 색상 변경되는 느낌으로 (H값)
```
