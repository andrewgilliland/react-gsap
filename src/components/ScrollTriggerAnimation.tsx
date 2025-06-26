import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollTriggerAnimation() {
  const backgroundColor = "#FEF852";
  const textPrimaryColor = "#2A2A2A";

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

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
      color: textPrimaryColor,
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      <div style={{ height: "50vh" }} />
      <div
        style={{
          background: backgroundColor,
          paddingLeft: "30%",
          paddingRight: "10%",
        }}
        className="reveal"
      >
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              className="reveal-text"
              style={{
                fontWeight: "800",
                fontSize: "clamp(3rem, 10vw, 15rem)",
                lineHeight: "clamp(3rem, 10vw, 15rem)",
                color: backgroundColor,
                filter: "drop-shadow(0 0 0.06rem rgb(2, 2, 2))",
              }}
              key={index}
              ref={setlettersRef}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div style={{ height: "50vh" }} />
    </>
  );
}

export default ScrollTriggerAnimation;
