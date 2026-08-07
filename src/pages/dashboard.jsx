import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>👋 Welcome, Sumit</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h3>🔥 Current Streak</h3>
          <p>18 Days</p>
        </div>

        <div className="card">
          <h3>📅 Today's Task</h3>
          <p>Build a Responsive Landing Page</p>

          <button
            className="primary-btn"
            onClick={() => navigate("/day/12")}
          >
            Open Today's Challenge
          </button>
        </div>

        <div className="card">
          <h3>📊 Overall Progress</h3>
          <p>42%</p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "42%" }}
            ></div>
          </div>
        </div>

        <div className="card">
          <h3>🏆 Badges</h3>
          <p>5 Earned</p>
        </div>

        <div className="card">
          <h3>⭐ Leaderboard</h3>
          <p>#148</p>
        </div>

        <div className="card">
          <h3>📂 GitHub</h3>
          <p>17 Commits</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;