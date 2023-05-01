import DogListItem from './DogListItem';
import './DogList.css';

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {dogs.map(dog => <DogListItem dog={dog} key={dog.id} />)}
    </div>
  )
}

export default DogList;