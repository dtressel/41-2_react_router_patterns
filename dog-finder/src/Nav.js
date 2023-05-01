import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = ({ dogNames }) => {
  return (
    <div className="Nav">
      <NavLink to='./dogs' >Home</NavLink>
      {dogNames.map((name, index) => <NavLink to={`./dogs/${name}`} key={index}>{name}</NavLink>)}
    </div>
  )
}

export default Nav;