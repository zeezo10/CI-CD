// CHANGE THIS COLOR VALUE TO TEST CI/CD (e.g., "#10b981" for green, "#ef4444" for red, etc.)
const BALL_COLOR = "#ff0000ff";

export default function Home() {
  return (
    <div 
      className="container" 
      style={{ "--ball-primary-color": BALL_COLOR } as React.CSSProperties}
    >
      <div className="scene">
        <div className="ball"></div>
        <div className="shadow"></div>
      </div>
      <div className="subtitle">
        Bouncing Ball
      </div>
    </div>
  );
}
