function HashTable(){
    this.dataStore = new Array(137);
  
  this.put = function(item){
    var hash;
    if(typeof item === "string"){
        hash = this.hashString(item);
    }
    if(typeof item === "number"){
        hash = this.hashInt(item);
    }


    this.dataStore[hash] = item;
  }
  
  this.hashString = function(item){
    var i = 0, total = 0;
    const primeFactor = 31;

    for(i = 0; i < item.length; ++i){
      total += total * primeFactor + item.charCodeAt(i);
    }    

    total = total % this.dataStore.length;

    return parseInt(total);
  }

  this.hashInt = function(item){
    return Math.floor(item * 31) % this.dataStore.length;;
  }
  
  this.display = function(){
    for(var i = 0; i < this.dataStore.length; ++i){    
        if(this.dataStore[i] != null){
            console.log( i.toString() + ": " + this.dataStore[i].toString());
      }
    }
  }
}

var ht = new HashTable();
ht.put(5232323);
ht.put("1");
ht.put("2");
ht.put("4");
ht.put("3");
ht.put("zxcvzxcvzxcvzxcvzxcv");
ht.display();
