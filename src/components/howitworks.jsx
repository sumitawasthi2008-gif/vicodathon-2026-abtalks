const steps = [
  {
    number: "01",
    title: "Join Challenge",
    desc: "Register and commit yourself to a 60-day coding streak."
  },
  {
    number: "02",
    title: "Code Daily",
    desc: "Complete one real-world task every single day."
  },
  {
    number: "03",
    title: "Share Progress",
    desc: "Post GitHub commits and LinkedIn updates."
  },
  {
    number: "04",
    title: "Get Recognized",
    desc: "Build your portfolio and impress recruiters."
  }
];

function HowItWorks() {
  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="how-grid">
        {steps.map((step) => (
          <div className="how-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;