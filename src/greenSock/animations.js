import { TimelineMax, Back } from "gsap";
export const gsapCardsCycleIn = (timeline, dataArray, onComplete) => {
  timeline
    .to(
      dataArray,
      0.8,
      {
        scale: 1.09,
        opacity: 1,
        ease: Back.easeInOut.config(10)
      },
      0.3
    )
    .staggerTo(
      dataArray,
      0.4,
      {
        left: "45vw",
        bottom: "25vh",
        scale: 1.4,
        cycle: {
          rotation: i => Math.random() * ((i + 3) * 2),
          ease: i => Back.easeOut.config((i + 1) * 0.5)
        }
      },
      1.2
    )
    .staggerTo(
      dataArray,
      0.5,
      {
        left: "45vw",
        bottom: "5vh",
        rotation: 0,
        scale: 1
      },
      0.2
    )
    .to(dataArray, 0.7, {
      opacity: 0,
      y: "100vh",
      ease: Back.easeInOut.config(1.2),

      delay: 0.4
    })
    .to(dataArray, 0, { onComplete: onComplete, delay: 1 });
};
