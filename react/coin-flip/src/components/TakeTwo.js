import React,{ useState } from 'react';

const TakeTwo = () => {
    const [coin,setCoin] = useState({
        headsCount: 0,
        attempts: 0,
        message: ""
    })

    const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;

    const fiveHeads = () => { 
        while(coin.headsCount < 5 && coin.attempts < 100) {
            setCoin({...coin, attempts: coin.attempts + 1});
            let result = tossCoin();
    
            if(result === "heads"){
                setCoin({...coin, headsCount: coin.headsCount + 1});
            } else {
                setCoin({...coin, headsCount: 0});
            }
        }//end while

        if(coin.headsCount === 5) {
            setCoin({...coin, message: "You won! You won! You won!"});
        } else {
            setCoin({...coin, message: "Waa Waa Waaa...You now owe me 1 MILLION dollars!"});
        }
    }

    return(
        <div className="container">
            <h1>Money Money Money!</h1>
            <p>Flip the coin...you may win a million dollars!</p>
            <button onClick={fiveHeads}>Flip a Coin</button>
            
            <p className="message">{coin.message}</p>
            <p>Attempts: {coin.attempts} </p>
            <p>Head Count: {coin.headsCount} </p>
        </div> 
    );
}

export default TakeTwo;
