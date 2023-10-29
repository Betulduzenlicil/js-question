//? Write a JavaScript program to add items to a blank array and display them.

// let x = 0;
// let arr1 = Array();


// function addElement () {
//    arr1[x] = document.getElementById('text1').value;
//    alert('element ' + arr1[x] + ' added at index ' + x);
//    x++
//    document.getElementById('text1').value = ''
// }


// function dispayElement () {
//     let y = "<hr/>";

//     for (let j = 0 ; j < arr1.length ; j++) {
//         y += 'Element ' + j + '=' + arr1[j] + '<br/>' ;
//      }
//      document.getElementById('display').innerHTML = y;
// }


//? Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let a= ["a","a","b","b","c","d","e","f","g","e","e","e","e"]


// let b=[]

// function adder(){
//     for (let i=0 ; i < a.length ; i++){
//         if(!b.includes(a[i])){
//             b.push(a[i])
//         }
       
//     }
//     return b
// }


// console.log(adder(a));



//? We have the following arrays :
const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const ordinals = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."


// for (let i = 0; i < 3; i++) {
//     const ordinal = i < 3 ? ordinals[i] : ordinals[0]; // 1 için "st", 2 için "nd", 3 için "rd", diğerleri için "th"
//     console.log(`${i + 1}${ordinal} choice is ${colors[i]}.`);
//   }




//?---------------------soru 1 :-----------------------------------------------

// Write a JavaScript program to shuffle an array.


let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));
// console.log(shuffle(myArray));
// console.log(shuffle(myArray));

// console.log(shuffle(myArray));




//?-------------------------------------soru 2 :------------------------------------

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


// function Arrays_sum(array1, array2) 
// {
//   var result = [];
//   var ctr = 0;
//   var x=0;

//   if (array1.length === 0) 
//    return "array1 is empty";
//   if (array2.length === 0) 
//    return "array2 is empty";   

//  while (ctr < array1.length && ctr < array2.length) 
//   {
//     result.push(array1[ctr] + array2[ctr]);
//     ctr++;
//   }

//  if (ctr === array1.length) 
//  {
//     for (x = ctr; x < array2.length; x++)   {
//       result.push(array2[x]);
//     }
//   } 
//   else
//   {
//   for (x = ctr; x < array1.length; x++) 
//     {
//       result.push(array1[x]);
//     }
//   }
//   return result;
// }

// console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

/* ------------------------------- diger cozum ------------------------------ */

// function Arrays_sum(array1, array2) {
//   const maxLength = Math.max(array1.length, array2.length);
  
//   const result = Array.from({ length: maxLength }, (_, i) => 
//     (array1[i] || 0) + (array2[i] || 0)
//   );

//   return result;
// }

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));



//? ----------------------------------soru:3---------------------------------------
//*Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
//*normalde sorunun cozumu :
// const num=window.prompt();
// const str = num.toString();
// const result = [str[0]];
  
// for(let x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));
//********************************************************************************************************************
//*regexp ile bu kadar kolay : 

// const num1 = window.prompt();
// const str1 = num1.toString();

// const result1 = str1.replace(/([02468])(?=[02468])/g, '$1-');

// console.log(result1);






// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// let results=[]

// for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
//     let value1 = array1[i] || 0;
//     let value2 = array2[i] || 0;
//     results.push(value1 + value2);
// }

// console.log(results);


//*Write a JavaScript function that generates all combinations of a string.
//*Example string : 'dog'
//*Expected Output : d,do,dog,o,og,g

function combination (word){
    let emptyArray=[];
    for(let i=0; i < word.length; i++)
    {
        for(let j=i+1; j<=word.length ;j++)
        {
            emptyArray.push(word.slice(i,j))
        }
    }
    return emptyArray;
}
console.log(combination("mustafa"))


 //*alternative
let str = "dog";

const combiner = (str) => {
  const arr = [];
  for (let i = 1; i <= str.length; i++) {
    arr.push(str.slice(0, i));
  }
  for (let j = 1; j < str.length; j++) {
    arr.push(str.slice(j, str.length));
  }
  return arr.join();
};

console.log(combiner(str));
console.log(combiner("kare"));