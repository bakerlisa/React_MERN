const Fighter = require('./notes_week1');

class Samus extends Fighter{
    
    constructor(playerNum=1){
        super("Samus",playerNum,8,6,8);
            this.charged = false
        }

        special(opponent){
            if(this.charged){
                this.charged = false;
                opponent.percent += 35;
                console.log(`You've been cannoned! ${opponent.name} from 35%`)
            }else{
                this.charged = true;
                console.log(`Samus is charging her arm cannon`);
            }
        }
}



class JigglyPuff extends Fighter{
    constructor(playerNum){
        super("JigglyPuff",playerNum,3,8,1);
    }
    special(opponent){
        if(Math.floor(Math.random() * 2) === 1){
            opponent.percent += 40;
            console.log(`JigglyPuff user rest on ${opponent.name}. It's super effective!`)
        }else{
            console.log(`JigglyPuff user rest on ${opponent.name}, It didn't work...bummer.`)
        }
    }
}

class DonkeyKong extends Fighter{
    constructor(playerNum){
        super("Donkey Kong",10,4,10);
    }
    special(opponent){
        if(opponent.percent >= 100){
            opponent.percent = 0;
            console.log(`Donkey Kong picked up ${opponent.name} and yeeted them to their death!`);
        }else{
            console.log(`Donkey Kong reited to pick up and carry ${opponent.name}, but they got away`);
            opponent.attack(this);
        }
    }
}

//const rob = new Fighter("Rob",0,8,7,5);

const samus = new Samus(2)
const Jigg = new JigglyPuff(3)
const dk = new DonkeyKong(4)
samus.special(Jigg)
samus.special(Jigg)
samus.special(Jigg)
samus.special(Jigg)
samus.special(Jigg)
samus.special(Jigg)
dk.special(Jigg)