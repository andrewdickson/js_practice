
//greedy
var makeChangeGreedy = function(coins, amount){
    if(amount == null || amount == 0){
        return [];
    }

//important make sure coins are sorted
    coins.sort(function(a,b){ return b - a });
    var accum = 0, coinIdx = 0, coinValue, numCoin, delta, ret = [];


    for(; coinIdx < coins.length && accum < amount; ++coinIdx){
        coinValue = coins[coinIdx];
        delta = amount - accum;
        if(delta >= coinValue){
            accum += Math.floor(delta / coinValue) * coinValue;
            ret.push({ value: coinValue, count: Math.floor(delta / coinValue) });
        }
    }

    return ret;
};


console.log(makeChangeGreedy([25, 10, 5, 1], 56));