// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import React, { useRef } from "react";
// import LottieControl from "../../components/scroll";
// import lottie from "lottie-web";
// import animationData from "../../assets/Landscape.json";

// function Scroll() {
//   const ref = useRef<any>();
//   const lottieRef = React.useRef<any>(null);
//   React.useEffect(() => {
//    if(typeof window !== "undefined"){
// CallsStacks()
//    }else{
//     console.log('====================================');
//     console.log('not support dom!');
//     console.log('====================================');
//    }
//   }, []);

//   const CallsStacks = ()=> {
//     var animDuration = 10000;
//     const anim = lottie.loadAnimation({
//       container: lottieRef.current!,
//       renderer: "svg",
//       loop: false,
//       autoplay: false,
//       animationData
//     });

//     function animatebodymovin(duration: number) {
//       const scrollPosition = window.scrollY;
//       const maxFrames = anim.totalFrames;
//       const frame = (maxFrames / 50) * (scrollPosition / (duration / 100));
//       anim.goToAndStop(frame, true);
//     }
//     const onScroll = () => {
//       console.log("Scrolling");
//       animatebodymovin(animDuration);
//     };

//     document.addEventListener("scroll", onScroll);

//     return () => {
//       anim.destroy();
//       document.removeEventListener("scroll", onScroll);
//     };
//   }
//   return (
//     <>
//       <Parallax pages={5} ref={ref}>
//         <ParallaxLayer offset={0} speed={1} factor={3} ref={lottieRef}/>

//         <ParallaxLayer offset={1} speed={1} factor={1}>
//           <h2> 2 selection </h2>
//         </ParallaxLayer>

//         <ParallaxLayer offset={2} speed={1} factor={1}>
//           <h2> 2 selection </h2>
//         </ParallaxLayer>
//       </Parallax>
//     </>
//     //     <div style={{display:'flex' , flexDirection:'column'}}>
//     // <section style={{width:'100%',height:600,backgroundColor:'aqua', position:'relative'}}>
//     //     <div style={{position:'sticky'}}>
//     // <LottieControl/>
//     //     </div>
//     // </section>
//     // <section style={{width:'100%',height:600,backgroundColor:'aqua'}}>
//     //     2
//     // </section>

//     // <section style={{width:'100%',height:600,backgroundColor:'aqua'}}>
//     //     3
//     // </section>

//     // <section style={{width:'100%',height:600,backgroundColor:'aqua'}}>
//     //     4
//     // </section>
//     //     </div>
//   );
// }

// export default Scroll;


import React from 'react'
import LottieControl from '../../components/scroll'

function index() {
  return (
    <div>
        <LottieControl/>
    </div>
  )
}

export default index