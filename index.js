
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

  updateAtPath:function(root, path, newVal){
   
  },

  exampleFunction: function(message) { return message; },
}


