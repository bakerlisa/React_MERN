import './App.css';

function App() {
  const hello  = "hello world!!!!!";

  const printStuff = () => {
    console.log("Button pressed!!");
  }

  const thirdButton = (message) => {
    console.log(message);
  }

  const eventTarget = (eventTarget) =>{
    console.log(eventTarget.target.classList);
  }

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <p> {7+8} </p>
      <h2><marquee>{hello}</marquee></h2>
      <button class="button" onClick={printStuff}>Click Me</button>
      <button onClick={ () =>{console.log("I'm a clever button!")} }>Click this for a different message!</button>
      <button onClick={() => {thirdButton("I'm the third button")}} >Thrid Button</button>
      <button class="button" onClick={eventTarget}>Event Click!</button>
    </div>
  );
}

export default App;
