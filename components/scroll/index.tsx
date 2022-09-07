import * as React from "react";
// import "./styles.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import lottie from "lottie-web";
import animationData from "../../assets/Landscape.json";


const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
   if(typeof window !== "undefined"){
CallsStacks()
   }else{
    console.log('====================================');
    console.log('not support dom!');
    console.log('====================================');
   }
  }, []);

  const CallsStacks = ()=> {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      const frame = (maxFrames / 50) * (scrollPosition / (duration / 100));
      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }

  return (
    <>

<section ref={lottieRef} style={{position:'fixed'}}></section>

    </>
  );
};

export default LottieControl;
