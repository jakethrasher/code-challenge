function exampleFunction(msg){
    return msg;
};
function sum(...args){
    return args.reduce((acc,val)=>{
        acc += val;
        return acc
    },0)
};
function vowelize(arr){
    const vowels = /[aeiou]/g;
    let results = []
    arr.forEach(el=>{
        el.match(vowels) ? 
        results.push(el.match(vowels).join('')) : null
    })
    return results
};
function combineAndSort(arr1,arr2){
    return [...arr1,...arr2].sort();
};
function anagramTester(str1,str2){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < str1.length; i ++){
        sum1 += str1[i].toLowerCase().charCodeAt(str1[i])
    }
    for(let i = 0; i < str2.length; i ++){
        sum2 += str2[i].toLowerCase().charCodeAt(str2[i])
    }
    return sum1 === sum2 ? true : false;
};
function objectForEach(obj,cb){ 
    for(let key in obj) cb(obj[key])
};
function updateAtPath(obj, path, val){
    const pathArr = path.split('.');
    for(let i = 0; i < pathArr.length; i++){
        if(i !== pathArr.length -1){
            obj = obj[pathArr[i]]
        }else obj[pathArr[i]] = val;
    }
};
class Car {

    constructor(obj){
        this.fuelLevel= obj.initialFuelLevel;
        this.fuelCapacity = obj.fuelCapacity;
    }
    getFuelLevel(){
        return this.fuelLevel
    }
    addFuel(fuel){
        fuel + this.fuelLevel <= this.fuelCapacity ?
        this.fuelLevel += fuel :
        this.fuelLevel = this.fuelCapacity;
    }
};
async function whatWouldYouLikeToCheckOut(library){
    const authors = await library.favoriteAuthors();
    let bookTitles= [];
    const books = await Promise.all(
        authors.map(x=>library.booksAvailableBy(x)
    ));
    for(let book of books){
        if(book.length) bookTitles.push(book[0].title)
    }
    return bookTitles;
};
const calc = x => y => z=> {
    if(y === '+') return x + z;
    if(y === '-') return x - z;
}

module.exports = {
    exampleFunction,
    sum,
    vowelize,
    combineAndSort,
    anagramTester,
    objectForEach,
    updateAtPath,
    Car,
    whatWouldYouLikeToCheckOut,
    calc
};
