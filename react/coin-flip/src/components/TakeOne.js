import React,{useState} from 'react';

const TakeOne = () => {    
    const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"} ;
        
    function fiveHeads() {

            let headsCount = 0;
            let attempts = 0;

            while(headsCount !== 5 && attempts < 100) {
                attempts++;
                let result = tossCoin();
                
                console.log(`${result} was flipped`);
                if(result === "heads"){
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            
            }
        
        return new Promise ( (resolve, reject)  => {
            if(attempts >= 100) {
                console.log(`attempts from reject ${attempts} `);
                reject("no more flips")
            }
            else if (headsCount === 5) {
                console.log(`attempts from resolve ${attempts} `);
                resolve("yay")
            }
        })
    }
    
    
    fiveHeads().then().catch();

    console.log( "When does this run now?" );

    return(
        <div className="container">
            <h1>Money Money Money!</h1>
            <p>Flip the coin...you may win a million dollars!</p>
        </div>  
    );
}

export default TakeOne;