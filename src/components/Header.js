import { Link } from "react-router-dom";
import "./Header.css";
function Header(props) {
  return (
    <nav>
      
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/#contact">Contact Me</Link>
    
   
    </nav>
  );
}

export default Header;
