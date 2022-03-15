import React from 'react;'

import React,{useState} from 'react';

const TakeOne = () => {
    const [coin,setCoin] = useState({
        headsCount: 0,
        attempts: 0
    })
    
    const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;
        
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;

            while(headsCount < 15 && attempts < 100) {
                attempts++;
                let result = tossCoin();
                
                console.log(`${result} was flipped`);
                if(result === "heads"){
                    headsCount++;
                } else {
                    headsCount = 0;
                }
                
                if(headsCount === 5) {
                    resolve("5 heads in a row!");
                } else if(attempts > 100) {
                    console.log(attempts)
                    reject("You've hit your limit");
                }
            }
        });
    }
    
    fiveHeads()
    .then( res => console.log(res) ) 
    .catch( err => console.log(err) );

    console.log( "When does this run now?" );

    return(
        <div className="container">
            <h1>Money Money Money!</h1>
            <p>Flip the coin...you may win a million dollars!</p>
        </div>  
    );
}

export default TakeOne;