import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const MotionPathAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const onClickGood = contextSafe(() => {
    gsap.to(".button", {
      duration: 2,
      ease: "none",
      motionPath: {
        path: ".path",
        align: ".path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  });

  return (
    <div style={{ position: "relative" }} ref={container}>
      <button
        onClick={onClickGood}
        className="button"
        style={{
          position: "absolute",
          top: "64px",
          left: "-52px",
          rotate: "-45deg",
          borderRadius: "8px 24px 24px 8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: 500,
          fontFamily: "inherit",
          backgroundColor: "#1a1a1a",
          cursor: "pointer",
          outline: "4px auto deeppink",
        }}
      >
        Animate Me
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100.8616 213.3919 499.1384 173.4066"
        width="499.138px"
        height="173.407px"
      >
        <path
          style={{ stroke: "deeppink", fill: "none" }}
          d="M 100.8616 300.7359 C 100.8616 300.7359 254.913 104.7034 400 300 C 545.087 495.2966 600 300 600 300"
          className="path"
        />
      </svg>
    </div>
  );
};

export default MotionPathAnimation;
