

function electionResult(votes){

    if(!Array.isArray(votes) || votes.some(vote => typeof vote !== 'string')){
        return "Invalid";
    }
    let mango = 0;
    let banana = 0;
    for (const vote of votes){
        if(vote === 'mango'){
            mango++;
        }else if (vote === 'banana'){
            banana++;
        }
    }

    if(mango > banana){
        return 'mango';
    }else if(banana > mango){
        return 'banana';
    }else{
        return 'draw';
    }
}


const votes = ["mango", "banana", "mango","banana",];
const bb = electionResult(votes);
console.log(bb); 



