//helper method to merge 2 sorted lists
var merge = function(left, right){
    var result  = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length){

        //if left is less than right add it as the next item in the list
        if (left[il] < right[ir]){
            result.push(left[il]);
            ++il;
        }
        else {
            result.push(right[ir]);
            ++ir;
        }
    }

    if(il < left.length){
        result = result.concat(left.slice(il));
    }
    else if(ir < right.length){
        result = result.concat(right.slice(ir));
    }

    return result;
};

var mergeSort = function(list){

    //terminating condition
    if(list == null || list.length <= 1){
        return list;
    }

    //get the middle of the list
    var middle = Math.floor(list.length / 2),
        left = list.slice(0, middle),
        right = list.slice(middle);

    //keep dividing util length of each list is 1
    return merge(mergeSort(left), mergeSort(right));
};

var result = merge([0,1,2], [-1, 4,5]);

result = mergeSort([4, 1, 3, 2]);

console.log(result);
