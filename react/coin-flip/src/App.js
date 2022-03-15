import './App.css';
import { useState } from 'react';

function App() {
  const [coin,setCoin] = useState({
    headsCount: 0,
    attempts: 95,
    message: ""
  })

  const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;
      
  const fiveHeads = (event) => {
    return new Promise( (resolve, reject) => {
          while(coin.headsCount < 5 && coin.attempts < 100) {
            setCoin({...coin, attempts: coin.attempts + 1});
            let result = tossCoin();

          //   console.log(`${result} was flipped`);
            if(result === "heads"){
              setCoin({...coin, headsCount: coin.headsCount + 1});
            } else {
              setCoin({...coin, headsCount: 0});
            }
          // }//end while

        // if(coin.headsCount === 5) {
        //   setCoin({...coin, message: "You won! You won! You won!"});
        //   resolve("You won! You won! You won!");
        // } else {
        //   setCoin({...coin, message: "Waa Waa Waaa...You now owe me 1 MILLION dollars!"});
        //   reject("Waa Waa Waaa...I won! I won! I won! You owe me $1 MILLION!");
        }
    });
  }

  fiveHeads()
  .then( res => console.log(res) ) 
  .catch( err => console.log(err) );
    
  return (
    <div className="App">
      <div className="container">
        <h1>Money Money Money!</h1>
        <p>Flip the coin...you may win a million dollars!</p>
        <button onClick={fiveHeads}>Flip a Coin</button>
        <p className="message">{coin.message}</p>
        <p>Attempts: {coin.attempts} </p>
        <p>Head Count: {coin.headsCount} </p>
      </div>  
      <div className="background"></div>
    </div>
  );
}

export default App;
