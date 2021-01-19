import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems


import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import '../styles/index.scss';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//   triggerElement: ".section-trigger"
// })
//   .setTween(".image-animation", { rotation: 27, x: 100 }) // trigger a TweenMax.to tween
//   .addTo(controller);

//selettore della sezione
// var controller = new ScrollMagic.Controller();

// var els = document.getElementsByClassName("container-vh");

// Array.from(els).forEach((elem) => {

//   // Init ScrollMagic Controller

//   // Create Animations

//   //selettore dell'tag da animare
//   var title = elem.querySelector('img');
//   let video = elem.querySelector('.video-animation');

//   // text = $(elem).find('p'),
//   // btn = $(elem).find('a');


//   var tl = new TimelineMax();

//   // var tl = TweenMax.to(title, 1, { x: '50vh', rotation: 360 });
//   tl.fromTo(title, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1 }, "start")
//     .fromTo(title, 1, { x: '100px', opacity: 0.5 }, { x: '50px', opacity: .7 });

//   // tl.fromTo(title, 0.9, { y: '40px', opacity: .5, rotation: 50 }, { y: 0, opacity: 1, rotation: 0 });
//   // .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
//   // .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")

//   // Create the Scene and trigger when visible
//   var scene1 = new ScrollMagic.Scene({
//     triggerElement: elem

//   })
//     .setTween(tl)
//     .addTo(controller);

// });




const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2520,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = gsap.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.3;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos * 4 - delay) * accelamount;
  //console.log(scrollpos, delay);

  video.currentTime = delay;
}, 40);
console.log(video);


// var frameNumber = 0, // start video at frame 0
//   // lower numbers = faster playback
//   playbackConst = 1000,
//   // get page height from video duration
//   setHeight = document.querySelector(".section-video"),
//   // select video element         
//   vid = document.getElementById('v0');
// // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function () {
//   console.log(vid.duration);
//   setHeight.style.height = Math.floor(vid.duration) + playbackConst + "px";
// });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay() {
//   var videoHeight = document.querySelector(".section-video");
//   console.log(videoHeight);
//   var frameNumber = 0;
//   console.log(frameNumber);
//   vid.currentTime = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);