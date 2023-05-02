import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  return (
    <div className="Banner">
      <h3>Welcome to the color factory.</h3>
      <h1><Link to="/colors/new">Add a color</Link></h1>
    </div>
  )
}

export default Banner;