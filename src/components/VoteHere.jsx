import { useState } from "react";

function VoteHere() {
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVote = () => {
    if (!selectedCandidate) {
      alert("Please select a candidate before voting.");
      return;
    }
    alert(`You have successfully voted for ${selectedCandidate}`);
  };

  return (
    <div className="main-content">
      <div className="vote-box">
        <h2>Cast Your Vote</h2>
        <label>
          <input type="radio" name="candidate" value="Candidate A" onChange={(e) => setSelectedCandidate(e.target.value)} />
          Candidate A
        </label>
        <label>
          <input type="radio" name="candidate" value="Candidate B" onChange={(e) => setSelectedCandidate(e.target.value)} />
          Candidate B
        </label>
        <label>
          <input type="radio" name="candidate" value="Candidate C" onChange={(e) => setSelectedCandidate(e.target.value)} />
          Candidate C
        </label>
        <button onClick={handleVote}>Vote Now</button>
      </div>
    </div>
  );
}

export default VoteHere;
