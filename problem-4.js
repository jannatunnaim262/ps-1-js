

function isBestFriend(friend1,friend2){

    if(typeof friend1 !== "object" || friend1 === null || typeof friend2 !== "object" || friend2 === null){
        return "Invalid";
    }

    if(friend1.roll === friend2.bestfriend && friend1.bestfriend === friend2.roll){
        return true;
    }else{
        return false;
    }

}
const friend = [
    {name:"hashem",roll:1,bestfriend:2},{name:"kashem", roll:2, bestfriend:1}
];
console.log(isBestFriend(friend[0],friend[1]));
