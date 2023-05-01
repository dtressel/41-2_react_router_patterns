import { Link } from 'react-router-dom';
import './DogListItem.css';

const DogListItem = ( {dog} ) => {
  return (
    <div className="DogListItem">
      <h3><Link to={`/dogs/${dog.name}`} >{dog.name}</Link></h3>
      <Link to={`/dogs/${dog.name}`} ><img src={dog.src} /></Link>
    </div>
  )
}

export default DogListItem;