'reach 0.1'

const [isHand, ZERO, ONE,TWO,THREE,FOUR,FIVE] = makeEnum(6);
const [isResult, R0,R1,R2,R3,R4,R5,R6,R7,R8,R9,R10] = makeEnum(11);
const [isOutcome, P2_WINS, DRAW, P1_WINS] = makeEnum(3);

const winner = (handP1, handP2, resultP1, resultP2) => {
    if( resultP1 == resultP2) //first check draw
    {
        const playerOutcome = DRAW; //from outcome enum above
        return playerOutcome;
    }
    else{
        if( (handP1 + handP2) == resultP1 ){
            const playerOutcome = P1_WINS;
            return playerOutcome;
        }
        else{
            if( (handP1 + handP2) == resultP2 ){
                const playerOutcome = P2_WINS;
                return playerOutcome;
            }
            else{
                const playerOutcome = DRAW;
                return playerOutcome;
            };
        };
    };
};

//assert our assumptions for the game here *
assert(winner(ZERO,TWO,R0,R2) == P2_WINS);
assert(winner(TWO,ZERO, R2,R0) == P1_WINS);
assert(winner(ZERO,ONE, R0,R2) == DRAW); // same as no result / no winner
assert(winner(ONE,ONE, R1,R1) == DRAW);

forall(UInt, (handP1) =>
    forall(UInt, (handP2) =>
        forall(UInt, (resultP1) =>
            forall(UInt, (resultP2) =>
                assert(isOutcome(winner(handP1,handP2,resultP1,resultP2))))))); //across all combo's assert the above assumptions

forall(UInt, (handP1) =>
    forall(UInt, (handP2) =>
        forall(UInt, (result)=>
                assert(winner(handP1,handP2,result,result) == DRAW )))); //across all draws

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt), //get's a hand for each player
    getGuess: Fun([UInt], UInt), // takes in player hand + and returns a number as a guess.
    getOutcome: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    timeoutNotice: Fun([], Null),
    endGameNotice: Fun([], Null),
}

export const main = Reach.App(() => {

    const playerOne = Participant('Odds', {
        ...Player, 
        wager:UInt, 
        deadline: UInt, //(5)
    });
    const playerTwo = Participant('Evens', {
        ...Player,
        acceptWager: Fun([UInt], Null),//time delta (in blocks)
    });

    const timeoutNotice = () =>{
        each([playerOne, playerTwo], ()=> {
            interact.timeoutNotice(); //will trigger fr-end function for each to give notice
        })
    };

    const endGameNotice = () =>{
        each([playerOne, playerTwo], ()=> {
            interact.endGameNotice(); 
        })
    }

    init();

    //pre-game "lobby"

    playerOne.only(()=>{
            const wager = declassify(interact.wager);
            const deadline = declassify(interact.deadline); 
    });
    playerOne.publish(wager, deadline)
             .pay(wager);
   commit();

    playerTwo.only(()=>{
        interact.acceptWager(wager);
    });
    playerTwo.pay(wager)
             .timeout(relativeTime(deadline), () => closeTo(playerOne, timeoutNotice));
             
 // now we have both players wager - game is ready to start below:  
    var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome));
    while(outcome == DRAW){
        commit(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
        playerOne.only(() =>{
            const _handP1 = interact.getHand(); //local steps interaction
            const _guessP1 = interact.getGuess(_handP1); //local step stuff                   
    
            const [_commitP1, _saltP1] = makeCommitment(interact, _handP1);   
            const commitP1 = declassify(_commitP1);                     
            const [_savouryP1, _pepperP1] = makeCommitment(interact, _guessP1);           
            const savouryP1 = declassify(_savouryP1);
        })   

        playerOne.publish(commitP1)
                 .timeout(relativeTime(deadline), () => closeTo(playerTwo, timeoutNotice));
        commit();
        playerOne.publish(savouryP1)
                 .timeout(relativeTime(deadline), () => closeTo(playerTwo, timeoutNotice));
        commit();
           
        unknowable(playerTwo, playerOne(_handP1, _saltP1)); //surely P2 can't know? Let's check! 
        unknowable(playerTwo, playerOne(_guessP1, _pepperP1));
        
        playerTwo.only(() =>{
            
            const _handP2 = interact.getHand();
            const _guessP2 = interact.getGuess(_handP2);

            const[_commitP2, _saltP2] = makeCommitment(interact, _handP2);
            const[_savouryP2, _pepperP2] = makeCommitment(interact,  _guessP2);

            const commitP2 = declassify(_commitP2);
            const savouryP2 = declassify(_savouryP2);
    
        });
        playerTwo.publish(commitP2)
                 .timeout(relativeTime(deadline), () => closeTo(playerOne, timeoutNotice));                
        commit();

        playerTwo.publish(savouryP2)
                 .timeout(relativeTime(deadline), () => closeTo(playerOne, timeoutNotice));                
        commit(); 

        unknowable(playerOne, playerTwo(_handP2, _saltP2));
        unknowable(playerOne, playerTwo(_guessP2, _pepperP2));
    
        playerOne.only(()=>{
            
            const saltP1 = declassify(_saltP1);
            const handP1 = declassify(_handP1);
            const pepperP1 = declassify(_pepperP1);
            const guessP1 = declassify(_guessP1);
        
        });
        playerOne.publish(saltP1, handP1, pepperP1, guessP1)
                 .timeout(relativeTime(deadline), () => closeTo(playerTwo, timeoutNotice));
    
        checkCommitment(commitP1, saltP1, handP1);
        checkCommitment(savouryP1, pepperP1, guessP1);
        commit();
    
        playerTwo.only(() => {
           
            const saltP2 = declassify(_saltP2);
            const pepperP2 = declassify(_pepperP2);
            const handP2 = declassify(_handP2);
            const guessP2 = declassify(_guessP2);
        });
        playerTwo.publish(saltP2, handP2, pepperP2, guessP2)
                 .timeout(relativeTime(deadline), () => closeTo(playerOne, timeoutNotice));  
        checkCommitment(commitP2, saltP2, handP2);
        checkCommitment(savouryP2, pepperP2, guessP2);
        commit();

        playerOne.only(()=>{
            const winningNum = handP1 + handP2;
            interact.getOutcome(winningNum);
        });

        playerOne.publish(winningNum)
                 .timeout(relativeTime(deadline), () => closeTo(playerTwo, timeoutNotice));
        
        outcome = winner(handP1, handP2, guessP1,guessP2);
        continue;
    }

    //end of game lobby + payouts

    assert(outcome == P1_WINS || outcome == P2_WINS); //this is asserting that either player wins, if false then the it's a draw and loop again
    transfer(2*wager).to(outcome == P1_WINS ? playerOne : playerTwo);
    commit();

    each([playerOne,playerTwo], () =>{
        interact.endGameNotice(); 
    });


    exit();
    //Goodbye!

});