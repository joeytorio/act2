import React from 'react';
import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';
import H2 from './components/H2';
import CITELogo from './pictures/Citelogo.png'; 
import PlaceholderImage from './pictures/cat.jpg'; 
import AnotherImage from './pictures/cat2.jpg';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Button background="red" text="Cancel" />
        <Button background="blue" text="Submit" />

        <TextField id="textfield1" classname="custom-textfield" background="white" />
        <TextField id="textfield2" classname="custom-textfield" background="white" />
        <TextField id="textfield3" classname="custom-textfield-green" background="green" />
        <TextField id="textfield4" classname="custom-textfield-green" background="green" />

        <H2>CIRCULAR IMAGES</H2>
        <div className="container">
          <div className="image-container">
            <div className="image-set">
              <img src={CITELogo} alt="CITE Logo" className="circular-image" />
              <img src={CITELogo} alt="CITE Logo" className="circular-image" />
            </div>
          </div>
        </div>

        <H2>ROUNDED SQUARE IMAGES</H2>
        <div className="container">
          <div className="image-container">
            <div className="image-set">
              <img src={PlaceholderImage} alt="Placeholder" className="rounded-square-image" />
              <img src={AnotherImage} alt="AnotherImage" className="rounded-square-image" />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
