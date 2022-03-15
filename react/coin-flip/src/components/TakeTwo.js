import React,{ useState } from 'react';
import CountUp from 'react-countup';

const TakeTwo = () => {
    const [coin,setCoin] = useState({
        count: 0,
        flips: 0,
        message: "Now flip that coin, and win your million dollars!",
        beenFlipped: false

    })

    const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;

    const fiveHeads = () => { 
        setCoin({count: 0, flips: 0, message: "Now flip that coin, and win your million dollars!"});

        let headsCount = 0;
        let attempts = 0;

        for(let x=0;x < 100 ; x++){
            if(headsCount === 5 ){ 
                break;
            }else{
                attempts++;
                let result = tossCoin();
                console.log(`attempts ${attempts} : headsCount ${headsCount}`)

                if(result === "heads"){
                    headsCount++;
                } else {
                    headsCount = 0;
                } 
            }    
        }
        
        //Had to do it down here, because it wasn't working in the for loop.
        if(headsCount === 5 ){
            setCoin({count: headsCount, flips: attempts, message: "You won! You won! You won!",beenFlipped:true });
        }else if(attempts >= 100){
            setCoin({count: headsCount, flips: 100, message: "Waa Waa Waaa...You now owe me a MILLION dollars!",beenFlipped:true });
        }
    }

    return(
        <div className="container">
            <h1>Money Money Money!</h1>
            <p><strong>Rules: 100 attempts to get 5 heads in a row</strong></p>
            <p className="message">{coin.message}</p>
            {/* Had to make it a function call or else it would just call itself */}
            <button className="button" onClick={() => {fiveHeads()} }><span>Flip a Coin</span></button>
            
            <p>Attempts: <CountUp end={coin.flips} /> </p>
            <p>Heads in a row: <CountUp end={coin.count} />  </p>
        </div> 
    );
}

export default TakeTwo;
