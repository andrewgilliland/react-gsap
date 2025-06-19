import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Animation = () => {
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container }); // we can pass in a config object as the 1st parameter to make scoping simple

  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
  // selector text is scoped properly to the container.
  const onClickGood = contextSafe(() => {
    gsap.to(".good", {
      motionPath: [
        { scale: 0.5, rotation: 10 },
        { scale: 1, rotation: -10 },
        { scale: 0.8, rotation: 3 },
      ],
      duration: 2,
    });
  });

  return (
    <div ref={container}>
      <button onClick={onClickGood} className="good">
        Press Me
      </button>
    </div>
  );
};

export default Animation;
