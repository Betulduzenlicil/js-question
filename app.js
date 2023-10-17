//? 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
//! 1. yol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function isOdd(a){
//     if(a%2==1)
//     return true;
// }
// const filtered = numbers.filter(isOdd);
// console.log(filtered);

//! 2.yol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let tekSayilar = []
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 1){
//         tekSayilar.push(numbers[i])
//     }
// }
// console.log(tekSayilar);

//? 2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?
//! 1. yol
// let numbers = [8, 4, 6, 2, 9, 5, 7];

// console.log(numbers.sort((a,b) => b - a))

//! 2. yol
// numbers.sort(function(a, b){
//     return b - a
// })
// console.log(numbers);


//? 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

//  let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];
// console.log(words.join(' '));



//? 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// //! 1. yol
// let sentence = "JavaScript harika bir dil";
// console.log(sentence.split(' ').reverse().join(' '));

 //! 2. yol
 
// let sentence = "JavaScript harika bir dil";
// let yeni_dizi=sentence.split(" ")
// console.log(yeni_dizi);
// let ters=[];
// for(let i=yeni_dizi.length-1; i>=0;i--) {
//     ters.push(yeni_dizi[i])
// }
// console.log(ters);
// let yeni_ters=ters.join(" ")
// console.log(yeni_ters);

//? 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";
let kelime= text.split(" ");
console.log(kelime);
let textList=[]
for (let i = 0; i< kelime.length; i++){
    if (kelime[i].includes("u")) {
    //   console.log(textList[i]); 
      textList.push(kelime[i])
    }
    
}
console.log(textList.length);
//? 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];


//? 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];


