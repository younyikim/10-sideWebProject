# 10-sideWebProject

<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

[bradtraversy/vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects) 의 vanilla JavaScript Side Project 아이디어를 참고하였습니다.   

----------------------------------------------------       
## 🌈10가지 프로젝트🌈
|Project|Live Demo|
:----|:----:
|1. Menu Slider & Modal|[Live Demo](https://younyikim.github.io/10-sideWebProject/1.MenuSlider_Modal/index.html)|
|2. Meal Finder|[Live Demo](https://younyikim.github.io/10-sideWebProject/2.Meal_Finder/index.html)|
|3. Expense Tracker|[Live Demo](https://younyikim.github.io/10-sideWebProject/3.Expense_Tracker/index.html)|
|4. Music Player|[Live Demo](https://younyikim.github.io/10-sideWebProject/4.Music_Player/index.html)|
|5. Infinite Scroll||
|6. Typing Game||
|7. Memory Cards||
|8. Relaxer||
|9. New Year CountDown||
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


