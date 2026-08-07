import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <span className="badge">
        🚀 India's Largest 60-Day Coding Challenge
      </span>

      <h1>
        Build Consistency.
        <br />
        Become Recruiter Ready.
      </h1>

      <p>
        Code every day.
        Build real projects.
        Share your progress on GitHub and LinkedIn.
      </p>

      <button
        className="start-btn"
        onClick={() => navigate("/dashboard")}
      >
        Start Your Journey
      </button>
      <p style={{marginTop:"15px",color:"#666"}}>
Join 12,000+ students building projects every day.
</p>
    </section>
  );
}

export default Hero;