let cats = [
    "Milo",
    "Otis",
    "Garfield"
    ];

 console.log(cats)   

function beforeEach (){
    console.log("Run")
     }


     function destructivelyAppendCat(){
    
        cats.push("Ralph")
        return cats;
    }
    
   
     function destructivelyPrependCat(){
    
        cats.unshift("Bob")
        return cats;
    }
    
    function destructivelyRemoveLastCat(){
        cats.pop();
        return cats;

    }

    function destructivelyRemoveFirstCat() {

        cats.shift();
        return cats;

    }

    function appendCat(name){

        var newArray = cats.slice();
        newArray.push("Broom")
        return newArray
      
    }

    function prependCat(name){

        var newArray2 = cats.slice();
        newArray2.unshift("Arnold")
        return newArray2
      
    }

    function removeLastCat(){

        var newArray3 = cats.slice();
        newArray3.pop();
        return newArray3

    }

    function removeFirstCat(){

        var newArray4 = cats.slice();
        newArray4.shift();
        return newArray4
    }
