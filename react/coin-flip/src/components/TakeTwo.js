import React,{ useState } from 'react';

const TakeTwo = () => {
    const [coin,setCoin] = useState({
        headsCount: 0,
        attempts: 0,
        message: ""
    })

    const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;

    const fiveHeads = () => { 
        let coinAttempts = 0;
        let coinHeads = 0;
        // while(coinHeads !== 5 && coinAttempts < 100) {
            coinAttempts++;
            let result = tossCoin();
            console.log(result)

            if(result === "heads"){
                coinAttempts++;
                setCoin({...coin, headsCount: coin.headsCount + 1,attempts: coin.attempts + 1});
            } else {
                coinAttempts = 0;
                setCoin({...coin, headsCount: 0,attempts: coin.attempts + 1});
            }
            console.log(coin.attempts)
        // }//end while

        return new Promise ( (resolve, reject)  => {
            if(coin.attempts >= 100) {
                setCoin({...coin, message: "Waa Waa Waaa...You now owe me 1 MILLION dollars!"});
                reject("success")
            }
            else if (coin.headsCount === 5) {
                setCoin({...coin, message: "You won! You won! You won!"});
                resolve("error")
            }
        });
    }

    return(
        <div className="container">
            <h1>Money Money Money!</h1>
            <p>Flip the coin...you may win a million dollars!</p>
            <button onClick={fiveHeads }>Flip a Coin</button>
            
            <p className="message">{coin.message}</p>
            <p>Attempts: {coin.attempts} </p>
            <p>Head Count: {coin.headsCount} </p>
        </div> 
    );
}

export default TakeTwo;
