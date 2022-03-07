class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Units extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost,power,resilience);
        this.power = power
        this.resilience = resilience
    }

    attack(target){
        target.resilience -= this.power
    }
}

class Effects extends Card{
    constructor(name,cost,text,type,magnitude){
        super(name,cost,text);
        this.text = text
        this.type = type
        this.magnitude = magnitude
    }

    play( target ){
        if( target instanceof Units ) {
            console.log(this.type)

            if(this.type === 'resilience'){    
                target.resilience += this.magnitude
            }else if(this.type === 'power'){
                target.power += this.magnitude
            }

            console.log(`${this.text}`)
        } else {
            console.log("Sorry can't preform action")
            // throw new Error( "Target must be a unit!" );
        }
    }
}


// make  Effects cards
const hardAlgorithm = new Effects("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const unhandledPromiseRejection = new Effects("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const pairProgramming = new Effects("Pair Programming",3,"increase target's power by 2","power",2)

// ===== PLAY =====
// 1.
const redBelt = new Units('Red Belt Ninja',3,3,4);

// 2.
hardAlgorithm.play(redBelt)

// 3.
const BlackBelt = new Units('Black Belt Ninja',4,5,4);
const BlackerBelt = new Units('Blacker Belt Ninja',4,5,4);

// 4.
unhandledPromiseRejection.play(redBelt)

// // 5.
pairProgramming.play(redBelt)

// // 6. 
redBelt.attack(BlackBelt)