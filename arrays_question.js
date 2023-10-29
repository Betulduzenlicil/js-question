// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];




// 2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

// let numbers = [8, 4, 6, 2, 9, 5, 7];




// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

// let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];




// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.


// let sentence = "JavaScript harika bir dil";



// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

// let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";



// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];


// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];


//* asağıdaki arryde pozitif sayıları bulup toplayın

const input=[1, -4, 12, 0, -3, 30, 42, -150]

const sumSepet= input.filter((number)=>number>0)

let cıftTopla=sumSepet.reduce((sum, number)=>sum+number,0)

console.log(sumSepet);
console.log(cıftTopla);


//? alternative

const input1 = [1, -4, 12, 0, -3, 30, 42, -150];
const toplam = input1.reduce((acc, val) => (val > 0 ? acc + val : acc), 0);
console.log(toplam);

//* aşağıdaki cümlede büyük harfleri seçiniz
 const input2= "John Ronald Revel Tolkien"

const words= input2.split(" ").map(a=>a[0]).join("")
console.log(words);


//* aşağıdaki herbir elemanın karesini alan fonksiyon
const numbers=[1,2,3,4,5]

const squaredNumbers= numbers.map(a=>a*a)
console.log(squaredNumbers);


//* herbir elemanın uzunluğunu bul
 const names=["Alice", "Bob", "Charlie"]

 const nameLength=names.map((n)=>n.length)
 console.log(nameLength);


 //* herbir harfi büyük harfe çevir

 const words1=["apple", "banana", "cherry"]

// const upperWords=words1.map(word=>word.toUpperCase());
// console.log(upperWords);


//? alternative
let capitalizedArray=[]
for(let word of words1){
    capitalizedArray.push(word.toUpperCase())
    
}
console.log(capitalizedArray);



let newA=["a","b"]
let newB=["APPLE", "BANANA"]

let bırles=[...newA, ...newB]
console.log(bırles);


