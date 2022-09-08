import * as React from "react";
// import "./styles.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import lottie from "lottie-web";
import animationData from "../../assets/Landscape.json";

const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  const lottieRef2 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      CallsStacks();
    } else {
      console.log("====================================");
      console.log("not support dom!");
      console.log("====================================");
    }
  }, []);

  const CallsStacks = () => {
    var animDuration = 7500; //all routed
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });
    const anim2 = lottie.loadAnimation({
      container: lottieRef2.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

//dev dun
    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      const frame = (maxFrames / 50) * (scrollPosition / (duration / 100));
      anim.goToAndStop(frame, true);
    }
    function animatebodymovin2(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      const frame = (maxFrames / 50) * (scrollPosition / (duration / 100));
      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log("Scrolling" , window.screen.height);
      animatebodymovin(animDuration);
      animatebodymovin2(animDuration)
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      anim2.destroy()
      document.removeEventListener("scroll", onScroll);
    };
    
  };

  return (
    <>
      <section ref={lottieRef} style={{position:'fixed'}}></section>
      {/* <section ref={lottieRef2}></section> */}
    </>
  );
};

export default LottieControl;
