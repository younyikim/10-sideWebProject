## InterSection Observer API

Intersection Observer API(교차 관찰자 API)는 Chrome 51버전 부터 사용할 수 있는 Web API이다.     

MDN에서 말하는 Intersection Observer을 사용해야 하는 이유는 다음과 같은 것들이 있다. 

1. 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩.
2. 스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 infinite-scroll 을 구현.
3. 광고 수익을 계산하기 위한 용도로 광고의 가시성 보고.
4. 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정.

-----------------------------------------------------     
### ⁉ `scroll` 이벤트의 문제점 ⁉          

`Infinite Scrolling` 프로젝트에서 스크롤을 끝까지 내린 경우, 아래에 계속하여 포스트들을 추가하여 보여준다.   
여기서는 `scroll` 이벤트를 사용하여 특정 위치에 도달하였을 때의 액션을 추가하였다. 하지만 `scroll` 이벤트는 짧은 시간 내에 수백, 수천 건까지 호출될 수 있고, 동기적으로 실행되기 때문에 메인 쓰레드에 영향을 미친다.  
그리고 한 페이지 안에 여러 개의 `scroll` 이벤트가 존재한다면 이벤트가 끊임 없이 호출될 수 있다.      

그렇기 때문에 `scroll` 이벤트에 조금이라도 무거운 코드를 작성한다면, 원하는 결과를 얻지 못하거나 최악에는 브라우저가 다운될 수 있다.        

이러한 이유들 때문에 가능하다면 `scroll` 이벤트 대신, `Intersection observer API` 를 사용하는 것이 좋다. 

-----------------------------------------------------           
### 🌈intersection observer 사용법

* 기본 문법
```javascript
const io = new IntersectionObserver(callback, options); // 관찰자 초기화
io.observer(element); // 관찰할 요소 등록
```
* `callback`   

관찰할 대상이 등록되거나, 가시성(보이는지 보이지 않는지)에 변화가 생기면, 관찰자는 callback을 실행한다.   
callback은 `entries`,`observer` 두가지의 인수를 가진다. 

```javascript
const io = new IntersectionObserver((entries, observer) => {}, options);
```  

* `entries`  
  IntersectionObserverEntry 인스턴스의 배열이다.    
  IntersectionObserverEntry는 읽기 전용(Read only)의 다음 속성들을 포함한다.    
  
  * `boundingClientRect`: 관찰 대상의 사각형 정보(DOMRectReadOnly)
  * `intersectionRect`: 관찰 대상의 교차한 영역 정보(DOMRectReadOnly)
  * `intersectionRatio`: 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
  * `isIntersecting`: 관찰 대상의 교차 상태(Boolean)
  * `rootBounds`: 지정한 루트 요소의 사각형 정보(DOMRectReadOnly)
  * `target`: 관찰 대상 요소(Element)
  * `time`: 변경이 발생한 시간 정보(DOMHighResTimeStamp)

* `options`
  * `root`     
        
      default : `null`, 브라우저의 viewport   
      
      ![](https://raw.githubusercontent.com/hyeyoon/blog/master/public/img/4/root.png)
  * `rootMargin`
           
      default : `0px 0px 0px 0px`  
      root 엘리먼트의 margin 값이다.
      ![](https://raw.githubusercontent.com/hyeyoon/blog/master/public/img/4/rootmargin.png)
  
  * `threshold`    
     
     default : `0`      
     
     0.0~1.0 사이의 숫자 혹은 이 숫자들로 이루어진 배열로, 타겟 엘리먼트에 대한 교차 영역 비율을 의미한다.        
     0.0의 경우, 타겟 엘리먼트가 교차영역에 진입했을 시점에 observer를 실행하는 것이고,      
     1.0의 경우, 타겟 엘리먼트가 전체 교차영역에 들어왔을 때 observer를 실행하는 것을 의미한다.    
     ![](https://raw.githubusercontent.com/hyeyoon/blog/master/public/img/4/threshold.png)   
 -----------------------------------------------------              
 * methods
 
  * `observe()`  : 타겟 element에 대한 observer를 등록할 때(관찰을 시작할 때) 
  * `unobserve()` : 타겟 element에 대한 observer 등록을 해제
  * `disconnect()` : 여러개의 element를 관찰하고 있을 때, 이에 대한 모든 관찰을 해제할 때
