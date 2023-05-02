import Banner from './Banner';
import { Link } from 'react-router-dom';
import './ColorFactory.css';
import { allColors } from './Colors';

const ColorFactory = () => {
  return (
    <>
      <Banner />
      <p>Please select a color.</p>
      {allColors.map(color => <Link to={`/colors/${color.name}`} key={color.id} className="ColorFactory-color-links">{color.name}</Link>)}
    </>
  )
}

export default ColorFactory;