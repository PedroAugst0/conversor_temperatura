import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [conversorType,setConversorType] = useState('celsius');
  const [inputValue, SetInputValue] = useState("");
  const [result,setResult] = useState(NaN);

  useEffect(()=>{
    SetInputValue("");
  },[conversorType])
  const handleResultChange = (event) => {
    const value = event.target.value;
    SetInputValue(value);
    let result = 0;
    if (conversorType == 'celsius'){
      result = (value * 1.8) + 32;
    }
    else if (conversorType == 'fahrenheit'){
      result = (value - 32) * 0.55;
    }
    setResult(result)
  }

  return (
    <div className="App">
      <h1>Conversor de Temperatura</h1>
      <div style={{display:"flex",flexDirection:"column",width:"800px", backgroundColor:"red", textAlign:"center",alignItems:"center", justifyContent:"center"}}>
        <div style={{display:"inline-flex"}}>
          <p>Conversor {conversorType}</p>
          <div style={{marginLeft:"1rem"}}/>
          <img onClick={()=> conversorType == 'celsius' ? setConversorType('fahrenheit') : setConversorType('celsius')} style={{cursor: "pointer"}} width="20px" src="https://visualpharm.com/assets/723/Change-595b40b75ba036ed117d586f.svg"/>
        </div>
        <input value={inputValue} style={{height:"30px"}} onChange={(event) => handleResultChange(event)}/>
        <div style={{marginBottom:"2.5rem"}}/>
      </div>
      <div style={{marginBottom:"2.5rem"}}/>
      <p>Resultado : {!isNaN(result) ? result : ""}</p>
    </div>
  );
}

export default App;
