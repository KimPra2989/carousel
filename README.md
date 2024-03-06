# Carousel (캐러셀)
옛날 옛적에 JS 수업 다 듣고 만들어봤던 캐러셀입니다. 

DOM을 조작하는 연습과 기능구현이 주목적이었습니다.

![캐러셀](https://github.com/KimPra2989/carousel/assets/106394183/7d5dac29-32bf-4794-955d-1af4d9b5cfaf)

## 기능 설명

flex box로 이미지를 옆으로 길게 늘어놓고, 이미지 한 개와 같은 크기의 액자 div에 overflow : hidden을 주어 마크업을 헀고, 
JS로 setInterval 3초마다 tranform : translateX를 줘서 기능을 완성했습니다. 
|![Frame 3](https://github.com/KimPra2989/carousel/assets/106394183/f7dcc13d-fb1b-4501-b168-be877dbd3fca)|
|:--:|
|피그마로 만들어본 설명 사진|

액자 내부 사진에 따라 우측 상단의 원에 차례로 색칠이 됩니다.
액자 div에 position absolute를 주고, 
아래와 같은 css로 옆면에 고정했습니다.
```css
  {
    display: inline-block;
    transform-origin: 0% 0%;
    transform: rotate(90deg);
    position:  absolute;
    top: 0;
}
```

처음 transform을 주웠더니 중심을 기준으로 회전을 해서 배치가 쉽지 않았는데 transform-origin이라는 속성을 찾아내서 해결할 수 있었습니다.
해당 속성은 transform 기준저을 정해주는 속성입니다.

## 생각해볼 점

1. 현재 resize 시에 캐러셀이 꺠지는 문제가 있다. resize 이벤트 등으로 해결할 수 있지 않을까 싶다.
2. carousel 쓰기 귀찮아서 crs로 줄여서 썼는데 다시보니 가독성이 별로인 것 같다고 느꼇다. 
