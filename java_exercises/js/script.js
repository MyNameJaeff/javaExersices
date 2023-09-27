/*
//Hashtag Pyramid
var hash = "";
for (let i = 1; i <= 7; i++) {
  hash += "#";
  console.log(hash);
}

//Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  }else{
    console.log(i);
  }
}

//Chess board
var string = "";
for (let i = 1; i <= 8; i++) {
  if (i % 2 == 0) {
    string += " # # # #\n";
  } else {
    string += "# # # # \n";
  }
}
console.log(string);

//Min
const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log(min(0, 10));
console.log(min(0, -10));

//Is even?
var isEven = (x) => {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

//Counting strings
var countBs = (x) => {
  var count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "b" || x[i] == "B") {
      count++;
    }
  }
  return count;
};
var countChar = (x, y) => {
  var count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == y) {
      count++;
    }
  }
  return count;
};
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

*/

const range = (x, y, step = 1) => {
  let arr = [];
  if (x < y) {
    for (x; x <= y; x += step) {
      arr.push(x);
    }
  } else {
    for (x; x >= y; x += step) {
      arr.push(x);
    }
  }
  return arr;
};
const sum = (array) => {
  let tot = 0;
  array.forEach((element) => {
    tot += element;
  });
  return tot;
};
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

const reverseArray = (x) => {
  let newArr = [];
  let i = 0;
  for (x.length; i < x.length; ) {
    newArr.push(x.pop());
  }
  return newArr;
};
const reverseArrayInPlace = (x) => {
  let i = 0;
  for (x.length; i < Math.floor(x.length / 2); ) {
    let temp = x[i];
    x[i] = x[x.length - 1 - i];
    x[x.length - 1 - i] = temp;
    i++;
  }
  return x;
};
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

const arrayToList = (x) => {
  var list = {};
  for (let i = 0; x.length > i; i++) {
    list.value = x.splice(0, 1)[0];
    list.rest = x.length > 0 ? arrayToList(x) : null;
  }
  return list;
};

const listToArray = (x) => {
  let arr = [];
  for (let node = x; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};
const prepend = (x, y = {}) => {
  let list = {};
  list.value = x;
  list.rest = y;
  return list;
};
const nth = (x, y) => {
  let arr = [];
  for (let node = x; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr[y];
};
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


const deepEqual = (first, second) => {
  if(first === second){
    return true;
  };
  if(typeof first == "object" && first != null && typeof second == "object" && second != null){
    let x = Object.keys(first), y= Object.keys(second);
    if(x.length == y.length){
      for(key of x){
        if(y.includes(key)){
          if(first[key] == second[key]) return true;
          else return false;
        }
      }
    }
    return true;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));