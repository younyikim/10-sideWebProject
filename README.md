# 10-sideWebProject

<p align="left">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</p>

[bradtraversy/vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects) 의 vanilla JavaScript Side Project 아이디어를 참고하였습니다.   

----------------------------------------------------       
## 🌈10가지 프로젝트🌈
|Project|Live Demo|
:----|:----:
|1. Menu Slider & Modal|[Live Demo](https://younyikim.github.io/10-sideWebProject/1.MenuSlider_Modal/index.html)|
|2. Meal Finder|[Live Demo](https://younyikim.github.io/10-sideWebProject/2.Meal_Finder/index.html)|
|3. Expense Tracker|[Live Demo](https://younyikim.github.io/10-sideWebProject/3.Expense_Tracker/index.html)|
|4. Music Player|[Live Demo](https://younyikim.github.io/10-sideWebProject/4.Music_Player/index.html)|
|5. Infinite Scroll|[Live Demo](https://younyikim.github.io/10-sideWebProject/5.Infinite_Scrolling/index.html)|
|6. Typing Game|[Live Demo](https://younyikim.github.io/10-sideWebProject/6.Typing-Game/index.html)|
|7. Memory Cards|[Live Demo](https://younyikim.github.io/10-sideWebProject/7.Memory_Card/index.html)|
|8. Relaxer|[Live Demo](https://younyikim.github.io/10-sideWebProject//8.Relaxer/index.html)|
|9. New Year CountDown|[Live Demo](https://younyikim.github.io/10-sideWebProject/9.New_Year_Countdown/index.html)|
|10. Sortable List||

----------------------------------------------------               
## 1. Menu Slider & Modal            
* Landing Page 제작 및 디자인
* Side Menu와 Modal 스타일
* 버튼 클릭을 사용하여 Menu와 Modal open/close 동작 지정
* Media query 사용하여 반응형 웹 지원

menu slider,modal main page           |  menu slider
:-------------------------:|:-------------------------:
<img src="/1.MenuSlider_Modal/image/menu_modal_main.PNG"> |<img src="/1.MenuSlider_Modal/image/menu_modal_main_side.PNG">
modal     |  main page use media query(320px to 479px)
<img src="/1.MenuSlider_Modal/image/menu_modal_modal.PNG"> | <img src="/1.MenuSlider_Modal/image/menu_modal_main_media.PNG" height="400px">   

----------------------------------------------------           
## 2. Meal Finder
* [themealdb.com](https://www.themealdb.com/) API를 사용하여 음식들을 검색한다.
* 검색한 음식들의 이미지와 정보를 DOM에 표시한다.
* 이미지를 클릭하면 상세 정보(레시피, 재료 등)을 DOM에 표시
* 키워드로 검색, 랜덤 검색 기능

meal finder main           |  search
:-------------------------:|:-------------------------:
<img src="/2.Meal_Finder/image/meal_finder_main.PNG"> |<img src="/2.Meal_Finder/image/meal_finder_search.PNG">
random search   | 
<img src="/2.Meal_Finder/image/meal_finder_detail.PNG"> | 

----------------------------------------------------           
## 3. Expense Tracker      
* localStorage 에 데이터 저장
* transaction을 DOM에 출력
* 총 금액(balance), 수입(income), 지출(expense)를 표시
* transaction 추가 및 삭제
                
expense tracker main       |  transaction add
:-------------------------:|:-------------------------:
<img src="/3.Expense_Tracker/image/expense_main.PNG"> |<img src="/3.Expense_Tracker/image/expense_add.PNG">
transaction history   | transaction delete
<img src="/3.Expense_Tracker/image/expense_history.PNG">| <img src="/3.Expense_Tracker/image/expense_delete.PNG">

----------------------------------------------------           
## 4.  Music Player     
* audio API 사용
* 회전하는 이미지와 음악 설명(제목, 재생시간) 팝업 UI 
* 음악 재생 및 음악 선택
* Progress bar

music player main       |  music player play
:-------------------------:|:-------------------------:
<img src="/4.Music_Player/image/music_player_main.PNG"> |<img src="/4.Music_Player/image/music_player_play.PNG">
music player   | 
<img src="/4.Music_Player/image/ezgif.com-gif-maker.gif">|

----------------------------------------------------           
## 5. Infinite Scroll   
* JSONPlaceholder API 사용
* Scroll 이벤트를 사용한 무한 스크롤 + Intersection Observer를 사용한 무한 
* CSS loader 애니메이션 사용
* fetch API 사용 및 fetch 된 포스트 검색 기능

infinite scroll main       |  infinite scroll play
:-------------------------:|:-------------------------:
<img src="/5.Infinite_Scrolling/image/infinite_main.PNG"> |<img src="/5.Infinite_Scrolling/image/infinite_loading.PNG">
infinite scroll search   | 
<img src="/5.Infinite_Scrolling/image/infinite_search.PNG">|

----------------------------------------------------           
## 6. Typing Game
* 난이도 설정을 포함한 UI 개발
* Random하게 단어를 선택하고 DOM에 출력
* input event를 사용하여, typing game 점수 계산
* 타이머 사용
* localStorage 를 사용한 난이도 저장

typing game main       | typing game setting
:-------------------------:|:-------------------------:
<img src="/6.Typing-Game/image/typing-game-main.PNG"> |<img src="/6.Typing-Game/image/typing-game-setting.PNG">
typing game result | 
<img src="/6.Typing-Game/image/typing-game-result.PNG">|

----------------------------------------------------           
## 7. Memory Card
* CSS를 이용한 card flip 애니메이션
* "Add new card" 폼을 overlay로 구현
* 이전 카드, 다음 카드 버튼
* local Storage를 사용한 새로운 카드 추가
* 전체 카드를 삭제하는 clear 버튼


Memory Card Main    | Card Add form
:-------------------------:|:-------------------------:
<img src="/7.Memory_Card/image/memory-card-main.PNG"> |<img src="/7.Memory_Card/image/memory-card-add.PNG">

----------------------------------------------------           
## 8. Relaxer App
* CSS를 이용한 gradient circle, animation pointer
* grow & shrink animation
* JS를 이용한 숨쉬기 animation 효과


Relaxer    | 
:-------------------------:|
<img src="/8.Relaxer/image/relaxer.gif"> |

----------------------------------------------------           
## 9. New Year Countdown
* 새해까지의 일,시,분,초를 계산하여 보여준다.
* HTML,CSS를 이용한 landing page
* background에 내년의 날짜를 계산하여 보여준다.

New Year Countdown    | 
:-------------------------:|
<img src="/9.New_Year_Countdown/image/result.gif"> |
