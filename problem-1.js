
//function cashOut
function cashOut(money){
      
    //condition applied and return output
    if(typeof money !== 'number' || money < 0){
        return "Invalid";
    }else{
        let cashOutCharge = money * 1.75/100;
       return cashOutCharge;
    }
}
//Funciton closed