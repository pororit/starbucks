const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간 초단위, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0, //세미콜론 아니고 쉼표
      display: 'none' //문제데이터는 따옴표 필요함
    });
  } else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
},300)); /*300은 0.3초단위로 부하를 줌*/ 
// _.throttle(함수, 시간)