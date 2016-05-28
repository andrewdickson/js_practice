var compressString = function(s){
    if(!s){
        return s;
    }

    var ret = "", pos = 0, charCounter = 0;

    while(pos < s.length && ret.length < s.length){
        ++charCounter;

        if(pos + 1 == s.length || s[pos] != s[pos+1]){
            ret += s[pos] + charCounter.toString();
            charCounter = 0;
        }
        ++pos;
    }

    return ret.length >= s.length ? s : ret;
};


//test cases
/*console.log(compressString(""));
console.log(compressString(null));
console.log(compressString(undefined));*/
/*

console.log(compressString("s"));
console.log(compressString("sssrrrreeee"));

console.log(compressString("sir"));*/



var isPalindrone = function(word){
    if(word == null || ! (typeof word === "string")) return false;
    if(word.length  == 1) return true;
    word = word.toLowerCase();

    return word.split("").reverse().join("") == word;


};

var isPalindroneOptimal = function(word){
    if(word == null || ! (typeof word === "string")) return false;
    word = word.toLowerCase();

    var a = 0, b = word.length - 1;
    for(; a <= b; ++a, --b){
        if(word[a] != word[b]){
            return false;
        }
    }

    return true;
};


var result = isPalindroneOptimal("false");
result = isPalindroneOptimal("racecar");
result = isPalindroneOptimal("helloasdfzxcvzxocvwerwqerwqer");



var isPalindroneOptimal = function(word){

};
