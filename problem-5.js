

function calculateWatchTime(times){

    if(typeof times === 'number'){
        return "Invalid";
    };
    let sum = 0;
    for(let time of times){
        sum = sum+time;
    }
 
    // sum = Number(sum);
    var hour = Math.floor(sum/ 3600);
    var minute = Math.floor(sum % 3600 / 60);
    var second = Math.floor(sum % 3600 % 60);
    return `hour: ${hour} , minute: ${minute} , second: ${second}`;
}

const sec = [390,499,5399,750];
console.log(calculateWatchTime(sec));
