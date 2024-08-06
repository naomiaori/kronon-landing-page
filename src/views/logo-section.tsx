'use client'

import Logo from "#/public/logo/logo.svg"

import { useScroll, motion, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import React from "react";


// const LogoSection = () => {
//     const { scrollYProgress } = useScroll();
//     const scale = useTransform(scrollYProgress, [0, 1], [0, 400]);
  

//   return (

//     <div className="relative h-[300vh] bg-black overflow-hidden">
//     <div className="flex flex-col items-center justify-center h-[300vh] relative">
//       <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
//         <Logo />
//       </div>

//       <motion.div
//         style={{
//           scale: scale,
//           background: "white",
//           width: "20px",
//           height: "20px",
//           borderRadius: "50%",
//           position: "absolute", // Position relative to the container div
//           top: "18%", // Center vertically
//           left: "50%", // Center horizontally
//           transform: "translate(-50%, -50%)", // Adjust position to truly center
//           zIndex: 2,
//         }}
//       />
//     </div>
//   </div>
//     // <section ref={sectionRef} className="relative h-[300vh] overflow-hidden">
//     //     <div
//     //         ref={scrollBoundaryRef}
//     //         className="flex top-0 flex-col items-center sticky"
//     //         style={{ top: '10%' }}
//     //     >
//     //         <Logo />
//     //         <div
//     //             ref={sectionRef}
//     //             className=""
//     //         >
              
//     //             <motion.div
//     //             style={{

//     //                 scale: scale,
//     //                 background: "white",
//     //                 width: "20px", 
//     //                 height: "20px", 
//     //                 borderRadius: "50%", 
//     //                 position: "absolute", // Position relative to the container div
//     //                 // top: "55%", // Center vertically
//     //                 // left: "50%", // Center horizontally
//     //                 transform: "translate(-50%, -50%)", // Adjust position to truly center
//     //                 zIndex: 0,
//     //             }}
//     //             />
//     //         </div>
//     //     </div>
//     // </section>
//   );
// };

// export default LogoSection



const LogoSection = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0, 350]);
  
    return (
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center z-10 relative"> {/* Ensure z-index is higher */}
        <div className="flex flex-col items-center justify-center">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "> {/* Ensure high z-index */}
            <Logo className="fixed-logo" />
          </div>
  
          <motion.div
            style={{
              // scale: scale,
              // background: "white",
              // width: "20px",
              // height: "20px",
              // borderRadius: "50%",
              // top: "65%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
              // zIndex: 2, // Ensure this is below the logo
  
              scale: scale,
              background: "white",
              width: "20px", 
              height: "20px", 
              borderRadius: "50%", 
              position: "absolute", // Position relative to the container div
              top: "55%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Adjust position to truly center
              zIndex: 2,
            }}
          />
        </div>
      </div>
    );
  };
  
  export default LogoSection
  