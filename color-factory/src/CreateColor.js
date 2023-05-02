import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allColors, Color } from './Colors';
import './CreateColor.css';

const CreateColor = () => {
  const [inputValues, setInputValues] = useState({name: '', rgb: 'rgb(0, 0, 0)'});
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setInputValues({...inputValues, [evt.target.name]: evt.target.value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newColor = new Color(inputValues.name, inputValues.rgb);
    allColors.push(newColor);
    navigate("/colors");
  }

  return (
    <div className="CreateColor" style={{backgroundColor: inputValues.rgb}}>
      <div className="CreateColor-form-wrapper">
        <form className="CreateColor-form" onSubmit={handleSubmit}>
          <div className="CreateColor-input-group">
            <label htmlFor="name-input">Color name</label>
            <input type="text" id="name-input" value={inputValues.name} name="name" onChange={handleChange} />
          </div>
          <div className="CreateColor-input-group">
            <label htmlFor="rgb-input">Color value</label>
            <input type="color" id="rgb-input" value={inputValues.rgb} name="rgb" onChange={handleChange} />
          </div>
          <button type="submit">Add this color</button>
        </form>
      </div>
    </div>
  );

}

export default CreateColor;