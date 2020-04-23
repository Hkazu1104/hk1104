// 'use strick'

// let i = 1;
// if (i === 1) {
//     console.log("真です");
// }
// //=が二つの場合は、左右を比較して、データ型が違っても
// //一致するデータ型に変換した後に比較　(例：i1 == 1　だった場合も１と表示される。)
// //=が三つの場合は、左右を比較して、データ型が違ったとき、
// //等しくないという判断をする。(例：i == 1　だった場合は１と表示される。)
// //{}のあとの;はつけない。


// //if文

// let testScore = 80;

// if (testScore >= 80){
//     document.write("合格です！おめでとうございます！");
// }else if (testScore >= 70){
//     document.write("惜しい！あと少し！");
// }else {
//     document.write("不合格です！もう少し勉強しましょう！");
// }

// //for文

// const nameList1 = ["田中","山田","林"];

// console.log(nameList1[0]);
// console.log(nameList1[1]);
// console.log(nameList1[2]);

// //

// const nameList2 = ["田中","山田","林"];

// for (let i = 0; i < nameList2.length; i++){
//     console.log(nameList2[i]);
// }

//下記のループ文をこのように表示しなさい。
//1.田中
//2.山田
//3.林
//4.佐藤

// const nameList3 = ["田中","山田","林","佐藤"];

// for (let i = 0; i < nameList3.length; i++){
//     console.log(`${i+1}.${nameList3[i]}`);
// }

// //または

// const nameList4 = ["田中","山田","林","佐藤"];

// for (let i = 0; i < nameList4.length; i++){
//     console.log(i+1+'.'+nameList3[i]);
// }

//continue文
// for (let i = 0; i < 10; i++){
//     if(i % 2 === 0) continue;
//     console.log(i);
// }

// //break文
// for (let i = 1; i < 1000; i++){
//     if(i > 10) break;
//     console.log(i)
// }

function scoreCheck(){
    let testScore = document.getElementById('score').value
    if (testScore >= 80){
        document.write("合格です！おめでとうございます！");
    }else if (testScore >= 70){
        document.write("惜しい！あと少し！");
    }else {
        document.write("不合格です！もう少し勉強しましょう！");
    }
}


