// Iteration #1: Find the maximum
// let maxOfTwoNumbers = (numberOne, numberTwo) =>
//   numberOne > numberTwo ? numberOne : numberTwo;

// function maxOfTwoNumbers(x, y) {
//   if (x > y) return x;

//   return y;
// }

const maxOfTwoNumbers = (numberOne, numberTwo) =>
  Math.max(numberOne, numberTwo);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// const findLongestWord = (words) =>
//   words.length === 0 ? null :
//   words.sort((a, b) => b.length - a.length)[0]
function findLongestWord(arr) {

  let longest = ""
  if (arr.length === 0) {
    return null
  }
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest
}
// Iteration #3: Calculate the sum
// function sumNumbers(arr){
//   let sum = 0
//   for(let i =0;i<arr.length;i++){
//       sum+=arr[i]
//   }
//     return sum
// }


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbers)=> numbers.length === 0 ? 0 : 
numbers.reduce((a,b)=>a+b)

function sum(nums) {
  let sum = 0
  nums.forEach(num => {
    switch (typeof num) {
      case 'string':
        sum += num.length
        break
      case 'number':
        sum += num
        break
      case 'boolean':
        if (num) {
          sum += 1
        }
        break
      default:
        throw new Error("Unsupported data type sir or ma'am")
    }
  })
  return sum 
}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = (numbersAvg) => numbersAvg.length === 0 ? null : (numbersAvg.reduce((acc, val) => acc + val) / numbersAvg.length)

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

const averageWordLength = (wordsAvg) => {
  if(wordsAvg.length === 0) {
    return null
  }
  return wordsAvg.reduce(function(acc, word) {
    // return Math.max(x, y.length)
    console.log(acc, word)
    return word.length + acc 
  }, 0) /wordsAvg.length;

}

// Get AVG
const avg = (arr) => {
  if(arr.length === 0) {
    return null
  }
  console.log(sum(arr))
  return Number((sum(arr)/ arr.length).toFixed(2))
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// const uniquifyArray = (wordsUnique) => 
// wordsUnique.length === 0
// ? null
// : [...new Set(wordsUnique)];
function uniquifyArray(arr){
  // let newArray = []
  // for (let i=0; i<arr.length; i++){
  //   if(newArray.indexOf(arr[i])===-1){
  //     newArray.push(arr[i])
  //   }
  // }
  // return newArray
  return (arr.length>0)? arr.filter((item,index)=>arr.indexOf(item)===index) : null
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

const doesWordExist =(arr,word)=>{
  return (arr.length>0)? arr.includes(word): null
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];


const howManyTimes=(arr,word)=>{
  if(arr.length == 0) return 0

  
  let filteredWords= arr.filter((element)=>element==word)
  console.log(filteredWords)
  return filteredWords.length
}

// Iteration #8: Bonus