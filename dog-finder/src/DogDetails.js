import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => name === dog.name);
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} />
      <div>Age: {dog.age}</div>
      <div>Facts:</div>
      {dog.facts.map((fact, index) => <div key={index}>{fact}</div>)}
    </div>
  )
}

 export default DogDetails;