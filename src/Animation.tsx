import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Animation = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container }); // we can pass in a config object as the 1st parameter to make scoping simple

  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
  // selector text is scoped properly to the container.
  const onClickGood = contextSafe(() => {
    // gsap.to(".good", { rotation: 180 });

    gsap.to(".good", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 20, y: 0 },
          { x: 30, y: 50 },
          { x: 50, y: 50 },
        ],
        type: "cubic",
      },
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
