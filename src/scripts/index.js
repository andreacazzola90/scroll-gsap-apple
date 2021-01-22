/* import ScrollMagic from "scrollmagic";  */// Or use scrollmagic-with-ssr to avoid server rendering problems
import * as $ from 'jquery';

/* import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"; */
import '../styles/index.scss';

/* import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax); */

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

/* //SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Text Animation


$(".box-container").each(function () {

  //Scenes
  let scene = new ScrollMagic.Scene({
    triggerElement: '.box-container .c-video',
    triggerHook: ("onLeave")
  })
    .setPin('.box-container .c-video')
    .addTo(controller);

  const video = this.querySelector("video");

  //Video Animation
  let accelamount = 0.3;
  let scrollpos = 0;
  let delay = 0;

  scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
  });

  setInterval(() => {
    delay += (scrollpos * 4 - delay) * accelamount;

    video.currentTime = delay;
  }, 40);
  console.log(video);

});
 */







/* var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$(".box-container .c-video").each(function (i) {

  if ($(this).find(".c-video")) {
    var outer = $(this).parent();
    console.log({ outer });
    var video = $(this).find('video')
    var videoId = '#';
    videoId += this.id;
    console.log(videoId);

    var video = $(this).find("video");
    let height = $(this).outerHeight();
    var tl = new TimelineMax();

    tl.fromTo(video, 3, { opacity: 0.2 }, { opacity: 1 });

    let scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      offset: -200,
      duration: height,
      reverse: true
    })
      .setPin(videoId)
      .setTween(tl)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(ctrl);


    //Video Animation
    let accelamount = 0.3;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
      scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
      delay += (scrollpos * 4 - delay) * accelamount;

      video.currentTime = delay;
    }, 40);

  }


});
 */


const boxContianers = document.querySelectorAll(".box-container");
const boxsVideo = [];

function checkVideo(x) {
  return x.children >= 18;
}

boxContianers.forEach(x => {
  var nodoChild = x.children
  boxsVideo.push(x);
});
console.log({ boxContianers });
console.log({ boxsVideo });
console.log(typeof boxContianers);


const cVideo = document.querySelector(".c-video");
console.log({ cVideo });
const video = cVideo.querySelector("video");
console.log({ video });
//END SECTION
let section = cVideo.parentNode;
console.log({ section });

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

var tl = new TimelineMax();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2520,
  triggerElement: section,
  triggerHook: 0
})
  .addIndicators()
  .setPin(section)
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








/*
const intro = document.querySelector(".box-container");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

console.log({ intro, video, text });
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
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = gsap.fromTo(video, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller); */




