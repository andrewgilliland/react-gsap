import MotionPathAnimation from "./components/MotionPathAnimation";
import ScrollTriggerAnimation from "./components/ScrollTriggerAnimation";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        height: " 150vh",
      }}
    >
      <MotionPathAnimation />
      <div style={{ height: "80vh" }} />
      <ScrollTriggerAnimation />
    </div>
  );
}

export default App;
