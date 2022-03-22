import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [dogs,setDogs] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/dogs')
        .then(response=>{setDogs(response.data.allDogs) })
  }, []); 

  return (
    <div className="App">
      <h1>Hello Dogs</h1>
      <div>
        {
          dogs.map((item,i) => {
            return <div key={i}>Name: {item.name}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
