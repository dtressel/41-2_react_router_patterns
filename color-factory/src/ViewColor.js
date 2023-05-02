import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ViewColor.css';
import { allColors } from './Colors';

const ViewColor = () => {
  const { color } = useParams();
  const colorObj = allColors.find(colorObj => colorObj.name === color); 
  return (
    <div className="ViewColor" style={{backgroundColor: colorObj.rgb}}>
      <p>THIS IS {color.toUpperCase()}.</p>
      <p>ISN'T IT BEAUTIFUL?</p>
      <p><Link to="/colors">GO BACK</Link></p>
    </div>
  );
}

export default ViewColor;