import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cinema">Cinema</Link>
        <Link to="/movies">Movies</Link> 
        <Link to="/movies/add">Add Movie</Link>
      </nav>
    );
  };

export default Navbar;
