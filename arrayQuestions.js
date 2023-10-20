// arrays iterations questions (forEach, map, filter, reduce)


// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 

let numbers1 = [1, 2, 3, 45, 65]
let sum=0
let ortalama= numbers1.forEach((number) => (sum+=number)
)
    
console.log(sum/numbers1.length);

//! 2. yol
let kareleri= numbers1.reduce((pre, cur)=>pre+cur)
console.log(kareleri/numbers1.length);

// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

let numbers3 = [1, 2, 3, 4, 5];

let karesiniAl= numbers3.map((item) => (item**2))
console.log(karesiniAl);

//! 2. yol
for (let i = 0; i < numbers3.length; i++) {
    let kare = numbers3[i] * numbers3[i];
    console.log(kare);
  }

//! 3. yol
numbers3.forEach((curr) => {
    let kare = curr * curr;
    console.log(kare);
  });

//! 4. yol

for(let i=0; i<numbers3.length;i++){
    console.log(`Square of ${numbers3[i]} is ${Math.pow(numbers3[i],2)}`);
}
// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

let numbers4 = [1, 2, 3, 4, 5];

let kareHesapla= numbers4.map((item) => (item**2)).filter((item)=>(item%2==0))
console.log(kareHesapla);


// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
let numbers5 = [1, 2, 3, 4, 5];

let reverseDizi = [];

numbers5.forEach((x) => {
  reverseDizi.unshift(x);
});
console.log(reverseDizi);


//! 2. yol
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [];

numbers.forEach((number, index) => {
  reversedNumbers[numbers.length - 1 - index] = number;
});

console.log(reversedNumbers);

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

let words = ["JavaScript", "Python", "Java", "C++"];

let newWords= words.map((item)=>item.split("").reverse().join(""))
console.log(newWords);

// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.

let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53, 59, 17, 19];
let newArray=[]
let asalNumbers=numbers6.filter((item)=>{
    
    for (let i=2; i< item; i++) {
       if (item % i === 0) {
        return false
       }
       else{
        newArray.push(item)
        return true
       } 
    }
    
})
console.log(newArray);
console.log(asalNumbers);
// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

let numbers7 = [1, 2, 3, 4, 5];

let kareAl = numbers7.map((item)=>item**2)
console.log(kareAl);

let even = kareAl.filter((item)=>item%2==0 )
console.log(even);

// let multiplyEven= even.map((item)=>item*2)
// console.log(multiplyEven);

// let sum= multiplyEven.reduce((sum, item)=>sum+= item)
// console.log(sum);

let multiplyEven= even.reduce((sum,item)=>sum +(item*2),0)
console.log(multiplyEven);






//! 2. yol
let karesiCiftOlanlarınToplamı =numbers7.map((item)=>item**2).filter((item)=>item%2==0 ).map((item)=>item*2).reduce((sum, item)=>sum+= item)

console.log(karesiCiftOlanlarınToplamı);