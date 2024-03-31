console.log("TASK 1");

/* do the below program in anonymous function and immediately invoked function expression IIFE

 TASK 1

 a.  print odd numbers in a array

  ANONYMOUS FUNCTION  :*/

var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*IIFE FUNCTION*/

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/* b. convert all the string to title caps in a string array */

/*ANONYMOUS FUNCTION :*/

var titlecase = function (str) {
  str = str
    .toLowerCase()
    .split(
      " "
    ); /* first lowercase all character to check whether in middle any elements are in uppercase*/
  for (var i = 0; i < str.length; i = i + 1) {
    str[i] =
      str[i].charAt(0).toUpperCase() +
      str[i].slice(
        1
      ); /* charAt(index)choose the specific character,slice giving starting index to print remains character */
  }
  return str.join(" ");
};
console.log(titlecase("aaAa bbBb cCCc dDDDdd"));

/*IIFE FUNTION :*/

(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i = i + 1) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
})("aaAa bbBb cCCc dDDDdd");



/* c. sum of all number in an array 

ANONYMOUS FUNCTION */

var sum = 0;
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(a([10, 10, 10]));

/* IIFE FUNCTION*/

var sum = 0;
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})([10, 10, 10]);



/* d. return all the prime number in an array 

ANONYMOUS FUNCTION : */

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(findPrimes(20));

/* IIFE FUNCTION */

const primes = [];
(function (num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
})(function (n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
});

console.log(findPrimes(20));


/* E. Return all the palindromes in an array

    ANONYMOUS FUNCTION */

const aaa = function (words) {
  return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
  });
};

console.log(aaa(["hello", "noon", "racecar", "dad", "madam"]));

/*  IIFE FUNCTION */

(function aaa(words) {
  return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
  });
});

console.log(aaa(["hello", "noon", "racecar", "dad", "madam"]));


/*   F. Return median of two sorted arrays of the same size */

function find(nums1, nums2) {
  // Merge and sort the arrays
  const mergedArrays = nums1.concat(nums2);
  mergedArrays.sort((a, b) => a - b);

  // Obtain the middle (middle-left if there are an even number of elements) point
  const middleLeft = Math.floor(mergedArrays.length / 2);

  // Check if there are an odd number of values
  if (mergedArrays.length % 2) {
    // Return the middle value
    return mergedArrays[middleLeft];
  } else {
    // Return the average of the middle 2 values
    return (mergedArrays[middleLeft] + mergedArrays[middleLeft + 1]) / 2;
  }
}
console.log(find([1, 2, 3, 4, 5], [5, 7, 8, 9, 10, 11]));

/* IIFE FUNCTION */

(function (nums1, nums2) {
  // Merge and sort the arrays
  const mergedArrays = nums1.concat(nums2);
  mergedArrays.sort((a, b) => a - b);

  // Obtain the middle (middle-left if there are an even number of elements) point
  const middleLeft = Math.floor(mergedArrays.length / 2);

  // Check if there are an odd number of values
  if (mergedArrays.length % 2) {
    // Return the middle value
    console.log( mergedArrays[middleLeft]);
  } else {
    // Return the average of the middle 2 values
     console.log((mergedArrays[middleLeft] + mergedArrays[middleLeft + 1]) / 2);
  }
})([1, 2, 3, 4, 5], [5, 7, 8, 9, 10, 8,8,9]);

/*  g. remove duplicates from an array

ANONYMOUS FUNCTION 
*/


let unique = [];
function removeDuplicates(arr) {
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(
  removeDuplicates(["apple", "mango", "apple", "orange", "mango", "mango"])
);

/* IIFE FUNCTION */

let unique1 = [];
(function (arr1) {
  for (i = 0; i < arr1.length; i++) {
    if (unique1.indexOf(arr1[i]) === -1) {
      unique1.push(arr1[i]);
    }
  }
  console.log(unique1);
})(["apple", "mango", "apple", "orange", "mango", "mango"]);


/* H. ROTATE AN ARRAY BY K TIMES 

ANONYMOUS FUNCTION */

function rotate (arr, numberOfShifts) {
  let tmp = 0;
  const leng = arr.length;
  numberOfShifts = numberOfShifts % leng;
  for (let i = 0; i < numberOfShifts; i++) {
    tmp = arr.pop();
    arr.unshift(tmp);
  }
  return arr;
}
console.log(rotate([1,2,3,4,5],5));



(function (arr, numberOfShifts){
  let tmp = 0;
  const leng = arr.length;
  numberOfShifts = numberOfShifts % leng;
  for (let i = 0; i < numberOfShifts; i++) {
    tmp = arr.pop();
    arr.unshift(tmp);
  }
  console.log(arr);

})([1, 2, 3, 4, 5],5);




console.log("TASK 2");
/* TASK 2 

Do the below programs in arrow functions. 

A. Print odd numbers in an array */

/* ARROW FUNCTION */

var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* B. Convert all the strings to title caps in a string array */

/* ARROW FUNCTION :*/

var titlecase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i = i + 1) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    return str.join(" ");
  }
};
console.log(titlecase("aaAa bbBb cCCc dDDDdd"));

/* C. Sum of all numbers in an array */

/* arrow function*/

var sum = 0;
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(a([10, 10, 10]));

/* D. Return all the prime numbers in an array */


/*   ARROW FUNCTION */

var e = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var h = (n) => {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

console.log(h(20));

/* E.  Return all the palindromes in an array */


/*  ARROW FUNCTION */

const getAllPalindromes1 = (words) => {
  return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
  });
};

console.log(getAllPalindromes1(["hello", "noon", "racecar", "dad", "madam"]));



