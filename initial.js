module.exports = {
  sum: function (...args){
    return args.reduce((acc, value)=>{
      acc+= value;
      return acc;
    }, 0)
  },

  vowelize: function(arr){
    let newArray = [];
    let vowels = /[AEIOUaeiou]/g
    arr.forEach(str=>{
      const match = str.match(vowels);
      if(match) newArray.push(match.join(''));
      else return match;
    })
    return newArray;
  },

  combineAndSort: function(...args){
    return args.flat().sort()
  },

  anagramTester:function(str1, str2){
    const newString1 = str1.split(' ').join('').toLowerCase();
    const newString2 = str2.split(' ').join('').toLowerCase();

    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < newString1.length; i++){
      sum1 += newString1.charCodeAt(i)
    };
    for(let i = 0; i < newString2.length; i++){
      sum2 += newString2.charCodeAt(i)
    };
    
    if(sum1 === sum2) return true;

    return false
  },

  objectForEach: function(obj, cb){
    for(let key in obj){
      cb(obj[key])
    }
  },

  updateAtPath:function(obj, path, val){
    const arr = path.split('.')
  
    for(let i = 0; i < arr.length; i++){
      if(i !== arr.length-1) obj = obj[arr[i]];
      else obj[arr[i]] = val;
    }
    return obj
  },
 
  Car: class{
    constructor({initialFuelLevel,fuelCapacity}){
      this.fuelLevel = initialFuelLevel;
      this.fuelCapacity = fuelCapacity;
    }
    
    getFuelLevel(){
      return this.fuelLevel
    }
    addFuel(amount){
      const diff = this.fuelCapacity - this.fuelLevel;
      if(amount <= diff) this.fuelLevel += amount;
      else this.fuelLevel = this.fuelCapacity; 
    }
  },

  whatWouldYouLikeToCheckOut: async function(library){
    const favs = await library.favoriteAuthors();
    const requests = favs.map((fav) => library.booksAvailableBy(fav));

    const titles = []
    const books = await Promise.all(requests);
    for(let book of books){
      if(book.length){
        titles.push(book[0].title)
      }
    }
    return titles;
  },

  calc: x => op => z =>{
    if(op === '+') return x + z;
    if(op === '-') return x - z;
  },  

  exampleFunction: function(message) { return message; },
}


