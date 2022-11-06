import * as backend from './build/index.main.mjs';
import { loadStdlib } from "@reach-sh/stdlib";

const stdlib = loadStdlib();

//const startBal = await stdlib.parseCurrency(100000); // error 400? min has to be 100000 not sure why this is occuring if use 10 or 100 or 26 //do update! 
//const fmt = (x) => stdlib.formatCurrency(x, 4);

const startingBal = await stdlib.parseCurrency(10);
const accP1 = await stdlib.newTestAccount(startingBal);
const accP2= await stdlib.newTestAccount(startingBal);

const fmt = (x) => stdlib.formatCurrency(x);


//const accP1 = await stdlib.newTestAccount(fmt(startBal));
console.log(`Player One has a starting balance of ${await stdlib.balanceOf(accP1)}`); 
//const accP2 = await stdlib.newTestAccount(fmt(startBal));
console.log(`Player Two has a starting balance of ${await stdlib.balanceOf(accP2)}`);


const getBalance = async(who) => fmt(await stdlib.balanceOf(who)); 

const P1BalBefore = await getBalance(accP1);
const P2BalBefore = await getBalance(accP2);

const ctcP1 = accP1.contract(backend);
const ctcP2 = accP2.contract(backend, ctcP1.getInfo());

//players have hand and are unknowables. We can include a timeout and wager.
//GAME TIME

const HAND = [0,1,2,3,4,5];
const CALL = [0,1,2,3,4,5,6,7,8,9,10];
const RESULT = ['Player 2 Wins', 'Draw', 'Player 1 Wins']; 

const Player = (who) =>({
    ...stdlib.hasRandom,
    getHand: () => {
        const num = Math.floor(Math.random() * 6); // 0 (no hand) is an option
        console.log(`${who} played ${HAND[num]}.`);
        return num;
    },

    getGuess: async (num) => {
        const call = Math.floor(Math.random() * 6) + HAND[num];

        //let's add some horsing around
        if(Math.random() <= 0.025){
            for(let i = 0; i < 10; i++){
                console.log(`${who} is horsing around...`);
                await stdlib.wait(1);
            };
        };

        console.log(`${who} made a guess of ${call}.`);
        return call;
    },
    getOutcome: (RESULT) => {console.log(`The winning number is: ${CALL[RESULT]}.`)},
    seeOutcome:(RESULT) => { console.log(`${who} saw outcome ${CALL[RESULT]}.`);}, 
    timeoutNotice: () => { console.log(`${who} timed out! Come on ${who}, get your act together!`);},
    endGameNotice: () => {console.log(`Thanks for playing ${who}. The winner is ${who(RESULT)}.`)}
});

await Promise.all([
    ctcP1.p.Odds({
        ...Player('Odds'),
        wager: stdlib.parseCurrency(3),
        deadline: 10, //number in blocks
    }),
    ctcP2.p.Evens({
        ...Player('Evens'),
        acceptWager: async (amt) => {
            if(Math.random() <= 0.5){
                for(let i = 0; i < 10; i++){
                    console.log(`Player Two is horsing around...`);
                    await stdlib.wait(1);
                };
            };
           console.log((`Player 2 accepts the wager of ${fmt(amt)}`));
        },
    })
]);

const P1Bal = await getBalance(accP1);
const P2Bal = await getBalance(accP2);

console.log(`Player 1 went from ${P1BalBefore} to ${P1Bal}`);
console.log(`Player 2 went from ${P2BalBefore} to ${P2Bal}`);