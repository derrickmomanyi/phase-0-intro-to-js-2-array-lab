
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
     cats.push(name)
     return cats;
}


function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}


function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats;
}

function appendCat(name){
    let cats1 = [...cats, name];
    return cats1;

}

function prependCat(name){
    let cats2= [name, ...cats];
    return cats2;
}

function removeLastCat(){
    let cats3= cats.slice(0, cats.length -1)
    return cats3;

}

function removeFirstCat(){
    let cats4= cats.slice(1);
    return cats4;
}
