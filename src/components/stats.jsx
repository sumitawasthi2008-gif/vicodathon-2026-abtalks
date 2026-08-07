function Stats() {
  const stats = [
    { number: "12K+", label: "Students Joined" },
    { number: "60", label: "Challenge Days" },
    { number: "5K+", label: "Projects Built" },
    { number: "95%", label: "Completion Rate" },
  ];

  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;