'use strict';//これは最初に絶対記入すること。
// document.write("Hello World");
// alert("Hello World");

//console.log("Hello World" + "田中さん");
//console.log(10 + 10)//これだと足し算が表示される。
//console.log("10" + "10")//これで文字列扱いになる。

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(2 * 2);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(10 % 3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x = 7;
// let y = x++;//後起きの場合は、７をそのまま代入し、後に１足される。
// let x2 = 7;
// let y2 = ++x2;//前置きの場合は＋１したx2を表示するという意味になる。

// console.log(x)//インクリメントしているため８と表示される。
// console.log(y)
// console.log(x2)
// console.log(y2)

//変数とは
//値を代入する溜めの箱
//定数とは
//値を別名で定義したもの

let age = 30;//これは数値や文字を変えることができるが、
const name = "田中太郎";//これは帰ることができない。

age = age + 2;

console.log(`${name}さんの年齢は${age}です`);