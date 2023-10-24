import "./jumbotron.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Jumbotron = () => {
  const [sm, setSm] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const content1Move = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["0vw", "100vw", "100vw"]
  );

  const content2MoveTop = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["20vh", "20vh", "-15vh"]
  );

  useEffect(() => {
    const windowChecker = () => {
      if (window.innerWidth >= 1024) {
        setSm(true);
      } else {
        setSm(false);
      }
    };

    window.addEventListener("resize", windowChecker);
    return windowChecker;
  }, [sm]);

  // const content2Scale = () => {
  //   if (sm) {
  //     return useTransform(scrollYProgress, [0, 0.5, 1], ["1", "1", "5"]);
  //   } else {
  //     return useTransform(scrollYProgress, [0, 0.5, 1], ["1", "1", "2"]);
  //   }
  // };

  let content2MoveLeft;
  let content2Scale;

  if (sm) {
    content2Scale = useTransform(scrollYProgress, [0, 0.5, 1], ["1", "1", "4"]);
    content2MoveLeft = useTransform(
      scrollYProgress,
      [0, 0.25, 0.5],
      ["0vw", "0vw", "30vw"]
    );
  } else {
    content2Scale = useTransform(scrollYProgress, [0, 0.5, 1], ["1", "1", "2"]);
    content2MoveLeft = useTransform(
      scrollYProgress,
      [0, 0.25, 0.5],
      ["0vw", "0vw", "18vw"]
    );
  }

  return (
    <div className="jumbotron container" ref={containerRef}>
      <div className="wrapper">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          style={{ x: content1Move }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
          className="content1"
        >
          <p className="text">Front-end Web Developer & Designer</p>
          <h1 className="title">Ramadhani</h1>
        </motion.div>

        <motion.div
          className="content2"
          style={{
            marginTop: content2MoveTop,
            x: content2MoveLeft,
            scale: content2Scale,
          }}
        >
          <p className="text">
            Pouring heart, soul, and code into a complete website
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Jumbotron;
