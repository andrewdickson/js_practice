var findAverage = function(list){
    if(list == null || list.length <= 2){
        return 0;
    }
    var min = list[0], max = list[0], accum = 0;

    for(var i = 0, len = list.length; i < len; ++i){
        if(list[i] < min){
            min = list[i];
        }
        else if(list[i] > max){
            max = list[i];
        }
        accum += list[i];
    }

    return (accum - max - min) / (list.length - 2);
}


console.log(findAverage(null)); 0
console.log(findAverage([])); 0
console.log(findAverage([1,2, 3, 6, 6])); // [2,3,6] => 11/3 => 3.666666