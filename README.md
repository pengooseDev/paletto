# Palleto

---
### Atom
palette : []
- 사용자가 선택한 색상의 Data가 해당 palette에 담기게 됨.

1. random한 색상이 display에 셋팅됨.

[ Dislike ] 
 다시 Generate

[ Like ]
 1. 해당 색상을 palette에 담고 다시 새로운 색상을 Generate

palette = [[255,255,255], [132,64,131], [40,64,108]]

---
### type
type TColor = [number, number, number];
palette: TColor[]

palette의 default 값은 빈Array.
React.useEffect를 이용해 Component가 Mount시 Color Generate