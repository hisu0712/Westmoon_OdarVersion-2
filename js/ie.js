// const ver = navigator.userAgent;
// console.log(ver);

// const isIE = /trident/i.test(ver);
// console.log(isIE);

// if(isIE){
//   alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
// }

const modelViewer = document.querySelectorAll("model-viewer")[1]; //모든 모델뷰어를 부른 다음에 2번 뷰어로 설정
    
window.switchSrc = (element, name) => {
  const base = "glb/" + name;
  modelViewer.src = base + '.glb';
  modelViewer.poster = base + '.webp';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((e) => {e.classList.remove("selected");});
  element.classList.add("selected");
};

// document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
//   // Keep slider interactions from affecting the XR scene.
//   ev.preventDefault();
// });


// var num = 1;

// function changePic(idx){
//   if(idx){
//       if(num==3) return;
//       num++;
//     }else{
//       if(num==1) return;
//       num--;
//     }
//     var imgTag = document.getElementById("change");
//     imgTag.setAttribute("src","img/ar_fillter" + num + ".gif");
// }



// window.onload = function(){
//   const elm = document.querySelectorAll('.part');
//   const elmCount = elm.length;
//   elm.forEach(function(item, index){
//     item.addEventListener('mousewheel', function(event){
//       event.preventDefault();
//       let delta = 0;

//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//           delta = event.wheelDelta / 120;
//           if (window.opera) delta = -delta;
//       } 
//       else if (event.detail)
//           delta = -event.detail / 3;

//       let moveTop = window.scrollY;
//       let elmSelector = elm[index];

//       // wheel down : move to next section
//       if (delta < 0){
//         if (elmSelector !== elmCount-1){
//           try{
//             moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
//           }catch(e){}
//         }
//       }
//       // wheel up : move to previous section
//       else{
//         if (elmSelector !== 0){
//           try{
//             moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
//           }catch(e){}
//         }
//       }

//       const body = document.querySelector('html');
//       window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
//     });
//   });
// }


// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }