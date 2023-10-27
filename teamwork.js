let text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`


// const array= text.split(" ")
// console.log(array);

// const array2=array[0].split("")
// console.log(array2);

// const harf=[]
// for (let i=0; i< array.length; i++) {
//    let harfAyır= array[i].split("")
//    harf.push(harfAyır)
    
// }
// console.log(harf);


// for (let j=0; j< harf.length; j++) {
//     harf[j][0]=harf[j][0].toUpperCase()
//     harf[j]=harf[j].join("")
    
// }
// console.log(harf);

// const tekrarBirles= harf.join(" ")
// console.log(tekrarBirles);

//! 2. yol
// const upperArray=text.split(" ")
// const newArray= upperArray.map((e)=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())
// const newSentence= newArray.join(" ")
// console.log(newSentence);


//! 3. yol

// const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.`;
// let newArr = []

// const upperArr = text.split(" ")

// const upperFunc = function(e) {
//     e = e.charAt(0).toUpperCase() + e.slice(1)
//     newArr.push(e)
// }

// upperArr.forEach((element) => upperFunc(element))

// console.log(newArr.join(" "))

// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2 },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.6 },
//     { title: '1984', author: 'George Orwell', rating: 4.0 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.7 },
//     { title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.5 },
//     { title: 'Moby-Dick', author: 'Herman Melville', rating: 4.1 },
//     { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.8 },
//     { title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.3 },
//     { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling',
//     rating: 4.7 },
//     { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.0 },
//     { title: 'The Shining', author: 'Stephen King', rating: 4.2 },
//     { title: 'The Da Vinci Code', author: 'Dan Brown', rating: 3.9 },
//     { title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.4 },
//     { title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.9 },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.5 },
//     { title: 'The Odyssey', author: 'Homer', rating: 4.6 },
//     { title: 'Frankenstein', author: 'Mary Shelley', rating: 4.2 },
//     { title: 'The Hunger Games', author: 'Suzanne Collins', rating: 4.1 },
//     { title: 'The Road', author: 'Cormac McCarthy', rating: 4.3 },
//     { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams',rating: 4.7 },
//     { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', rating: 4.8 },
//     ];

// const newArr= books.filter((b)=>b.rating>=4).map((b)=>{
//     return {title:b.title, author:b.author}
// });
// console.log(newArr);

// let input=0
// let arr1=[]

// function addelement(){
//    arr1[i]= document.getElementById('text1').value;
// //    alert('element' + arr1[i] + "added at index" + input)
// }

// addelement()


// function displayelement(){
//     let x= "<hr/>"


//     for(let j=0; j<arr1.length;i++){
//         x+="element" + j + "=" +arr1[j] +"<br/>";
//     }
//     document.getElementById('display').innerHTML=x
// }

// displayelement()



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" id="text1" />
    <input type="button" id="button1" value="Add" onclick="addElement()" />
    <input
      type="button"
      id="button2"
      value="Display"
      onclick="dispayElement()"
    />
    <div id="display"></div>
    <script src="index.js"></script>
  </body>
</html>
