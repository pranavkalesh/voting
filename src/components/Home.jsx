import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="home-box">
        <h2>Welcome to the Voting System</h2>
        <button onClick={() => navigate("/votehere")}>Cast Your Vote</button>
      </div>
    </div>
  );
}

export default Home;
