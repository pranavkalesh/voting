import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/votehere">Vote Here</Link>
    </nav>
  );
}

export default Navbar;
