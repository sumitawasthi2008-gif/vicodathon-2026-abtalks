const features = [
  {
    icon: "💻",
    title: "Daily Coding",
    desc: "Complete one coding challenge every day."
  },
  {
    icon: "🚀",
    title: "GitHub Streak",
    desc: "Maintain public coding consistency."
  },
  {
    icon: "📢",
    title: "LinkedIn Growth",
    desc: "Share your progress and build your profile."
  },
  {
    icon: "🏆",
    title: "Achievements",
    desc: "Earn badges and showcase your progress."
  }
];

function Features() {
  return (
    <section className="features">

      <h2>Why Join ABTalks?</h2>

      <div className="feature-grid">

        {features.map((item, index) => (

          <div className="feature-card" key={index}>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;