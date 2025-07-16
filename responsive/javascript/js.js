// 한줄주석
// 제이쿼리 선언

// 화면을 열었을때, 다음과 같은 일들이 일어나라
// document가 화면을 뜻함./ 화면을/ ready()괄호안의 일들이 펑션되라.

$(document).ready(function(){

// 실행문작성
// 클래스toggle 을 클릭했을때, 클래스gnb가 슬라이드toggle 되어라.

$('.toggle').click(function(){
$('.gnb').slideToggle()

})

})