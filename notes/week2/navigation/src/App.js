import { useState } from 'react';
import './App.css';
import Step from './component/Step';
import baby from './img/babygif.gif';
import banana from './img/banana-dance.gif'

function App() {
  const [steps,setSteps] = useState([
    {direction: "right", instruction:"turn right Raccoon Lane",distance:3.4},
    {direction: "Straight", instruction:"Go straight till Phaontas Ave.",distance:7.4},
    {direction: "Left", instruction:"turn left John Smith",distance:1.4},
    {direction: "right", instruction:"turn RIGHT into the lake",distance:Infinity},
  ]);

  const [form,setForm] = useState({
    direction: "left",
    instruction: "",
    distance: 0
  })

  const onChangeHandler = (event) => {
      setForm({
          ...form,
          [event.target.name]:event.target.value
      })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setForm([
        ...steps,
        form
    ])
  }
  

  return (
    <div className="App">
      <div className="nav">
        <img src={baby} alt="dancing baby gif" />
        <h1><marquee>Looking Good!</marquee></h1>
        <img src={banana} alt="dancing bananas gif" />
      </div> 

      <form>
            <div>
                <label htmlFor="direction">Direction</label>
                <select name="direction" onChange={onChangeHandler}>
                    <option>Left</option>
                    <option>Right</option>
                    <option>Straight</option>
                </select>
            </div>
            <div>
                <label htmlFor="instruction">Direction</label>
                <input type="text" name="instruction" onChange={onChangeHandler}/>
            </div>
            <div>
                <label htmlFor="distance">Miles</label>
                <input  type="number" name="distance" onChange={onChangeHandler}/>
            </div>
            <input type="submit" value="submit" onClick={onSubmit}/>
        </form>

      <div classaName="stesWrapper">
        {
          steps.map( (item,key) => { 
            return <Step key={key} direction={item.direction} instruction={item.instruction} distance={item.distance}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
