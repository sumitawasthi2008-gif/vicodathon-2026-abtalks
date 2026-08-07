import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">🚀 ABTalks</h2>

      <button
        className="join-btn"
        onClick={() => navigate("/dashboard")}
      >
        Join Challenge
      </button>
    </nav>
  );
}

export default Navbar;