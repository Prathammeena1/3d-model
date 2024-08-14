gsap.registerPlugin(ScrollTrigger);

// // gsap.to('#bottle',{
// //     position : 'absolute',
// //     
// //     opacity:0,
// //     scrollTriger:{
// //         scroller:'body',
// //         trigger:'.page2',
// //         start:'top 50%',
// //         // end:'top 0%',
// //         markers:true,
// //         scrub:1,
// //     }
// // })



gsap.to(".model", {
    // top:'100%',
    scale:.5,
    rotate:'0deg',
    left:'30vw',
    duration: 2,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.page2',
      start: 'top 100%',
      end: 'top 0%',
      markers: true,
      scrub: 1
    },
  });
  

