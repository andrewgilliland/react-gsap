import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollTriggerAnimation() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div ref={container}>
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
}

export default ScrollTriggerAnimation;
