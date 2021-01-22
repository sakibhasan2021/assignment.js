
//probelm No 1 ,killometer to meter
function killometerToMeter(killometer){
    var meter;
    if(killometer<0){
        return "invalid";//number must be positive
    }
    else {
        var meter=killometer*1000; // 1 k.m=1000m;
         return meter;
    }
 }

 // problem No 2 

  //he will buy watch ,mobile, and laptop;
//there is also number for count(how many things he will buy)


function budgetCalculator(WatchPics,MobilePics,LaptopPics){
   var  watch=50,mobile=100,laptop=500;//item cost
    
        var totalCost;
        totalCost=(watch*WatchPics)+(mobile*MobilePics)+(laptop*LaptopPics);
        if(totalCost>0){
            return totalCost;
        }
        else 
        {
            return "InValid";
        }

}


// Problem no 3 to calculate hotel cost

function hotelCost(Days){
    var TotalCost=0;
    const first_10_Days_cost=100;
    const second_10_Days_cost=80;
    const after_20days_cost=50;

    if(Days<=10){
        TotalCost=Days*100;
    }
    else if(Days<=20){
        var First_10_Days=10*first_10_Days_cost;//first 10 days total cost
      
        var RemainingDays=Days-10;//already i spent 10 days ,thats why this statement .
        var Second_10_days=RemainingDays*second_10_Days_cost;
        var TotalCost=First_10_Days+Second_10_days;

    }
    else
    {
        var RemainingDays=Days-20;
        var First_10_Days=10*first_10_Days_cost;
        var Second_10_days=10*second_10_Days_cost;
        var after_20days=RemainingDays*after_20days_cost;
        var TotalCost=First_10_Days+Second_10_days+after_20days;
    }
    return TotalCost;
}
 
//Mega friend.find largest length of a friend name.

function megaFriend(friendList){
    
    
    
    var largestName=friendList[0];// By default , i put Largest name in position 0
    for(var i=0;i<friendList.length;i++){
        var elementToStoreFriend=friendList[i];
        if(elementToStoreFriend.length>largestName.length){
            largestName=elementToStoreFriend;
           
        }
    }
    return largestName;

}
 
 