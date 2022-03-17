import './App.css';
import { useState } from 'react';

import { Switch,Route,useHistory } from 'react-router-dom';

import Home from './components/views/Home';
import People from './components/views/People';
import Planets from './components/views/Planets';
import Starship from './components/views/Starships';

import planet from './components/img/explode.jpeg';
import obi from './components/img/obi-wan.jpg';
import warp from './components/img/warp.jpeg';

function App() {
  const [form,setform] = useState({
    type: "people",
    id: 0,
    valid:true
  })

  const history = useHistory();

  const onChangeHandler = (event) => {
    if(form.type.length > 0 && form.id.length > 0){
      setform({...form,valid:true,[event.target.name]: event.target.value})
    }else{
      setform({...form,valid:false,[event.target.name]: event.target.value})
    }
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    if(form.valid){
      history.push(`/${form.type}/${form.id}`);
    }
  }

  const onBlurCheck = (event) =>{
    form.id <= 0 || form.id === 0 ? setform({ ...form,valid:false }) : setform({ ...form,valid:true })
  }

  return (
    <div className="App">
      <div className="banner">
        <h1>Star Wars</h1>
      </div>
      <form className="formWrp">
        <div className="wrp">
          <div>
            <select name="type" value={form.type} onChange={onChangeHandler}>
              <option>people</option>
              <option>planets</option>
              <option>starships</option>
            </select>
          </div>

          <div>
            <input type="number" name="id" placeholder="ID..." className="input" min="0" onChange={onChangeHandler} onBlur={onBlurCheck}/>
            
            {
              form.valid === false ? <span>Please input an id</span> : ""
            }
            
          </div>

          <input type="submit" value="Search" className="submit" onClick={onClickHandler} />
        </div>
      </form>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/people/:num">
            <People img={obi} />
          </Route>

          <Route exact path="/planets/:num">
            <Planets img={planet} />
          </Route>

          <Route exact path="/starships/:num">
            <Starship img={warp} />
          </Route>
        </Switch>


    </div>
  );
}

export default App;
