var str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint blanditiis";

function ucfirst(word) {
  /*
  var arr = word.split("");
  var firstSymbol = arr[0].toUpperCase();
  arr[0] = firstSymbol;
  var newStr = arr.join("");
  //console.log(newStr); // ['l','o','r','e','m']
  return newStr;
  */
  return word.replace(word[0], word[0].toUpperCase());
}

function init(str) {
  var arr = str.split(" "); //['lorem','ipsum']
  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   console.log(element);
  //   console.log(i);
  // }
  var newArr = []; // Lorem
  arr.forEach(function (element, i) {
    var ucWord = ucfirst(element);
    newArr.push(ucWord);
  });
  return newArr.join(" ");
}
var newStr = init(str);
console.log(newStr);

var str2 = "var_str_hello"; // 'varStrHello'

function init2(str) {
  var arr = str2.split("_"); // ['var','str','hello']
  var newArr = [];
  arr.forEach(function (element) {
    var ucWord = ucfirst(element);
    newArr.push(ucWord);
  });
  var firstWord = newArr[0].toLowerCase();
  newArr[0] = firstWord;
  return newArr.join("");
}

var newStr2 = init2(str2);
console.log(newStr2);

var arr = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur,",
  "adipisicing",
  "elit",
  "Sint",
  "blanditiis",
];

function inArray(elemText, arr, needPos) {
  var isInArray = false;
  var pos = false;
  arr.forEach(function (val, ind) {
    if (elemText == val) {
      // ("elit" == "elit")
      //return true; // false
      isInArray = true;
      pos = ind;
    }
  });
  if (needPos == false) {
    return isInArray;
  } else {
    return { isInArray: isInArray, pos: pos };
  }
}

var res = inArray("aaaa", arr, false);
console.log(res);

// 1. Arr  - find word
function delElem(word, arr) {
  var res = inArray(word, arr, true); // true / false
  console.log(res);
  if (res.isInArray == true) {
    arr.splice(res.pos, 1);
    //2. delete item
    return arr;
  }
}

var newArr = delElem("aaaa", arr);
console.log(newArr);

// Если   переменная a равна   или   меньше   1,   а
// переменная b больше   или   равна   3,   то   выведите   сумму   этих
// переменных,   иначе   выведите   их   разность   (результат   вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

function test(a, b) {
  if (a <= 1 && b >= 3) {
    console.log(a + b);
  } else {
    console.log(a - b);
  }
}
test(1, 3);

// Выведите на экран только те числа из массива, которые начинаются
// на цифру 1, 2 или 5.
var nums = [10, 20, 30, 50, 235, 3000];
function showNums(nums) {
  nums.forEach(function (item) {
    var numStr = String(item);
    if (numStr[0] == "1" || numStr[0] == "2" || numStr[0] == "5") {
      console.log(item);
    }
  });
}

showNums(nums);
