// var pText=document.querySelector("#title")
// console.log(pText)

// var btn=document.querySelectorAll(".btn")
// // btn.addEventListener("click",function(){
// //     pText.textContent="変更しました"    
// // })
// var btn1=document.querySelector(".main__status__reservation__top>p:nth-of-type(2)")
// console.log(btn1)
// for(let i=0; i<btn.length; i++) {
//     console.log(btn[1])
//     btn[1].addEventListener("click",function(){
//         btn1.textContent="★★★★★"
//     })
// }

// // クリックしたら文字列変わる

// 55行目をクリックしたら59行目にクラスが付く 調べる。

var btnStyle=document.querySelector("#buttonStyle")
var openCloseBtn=document.querySelector("#openCloseBtn") //59行目のID

btnStyle.addEventListener("click", function(){
    openCloseBtn.classList.add("messageText");
    console.log(openCloseBtn);
});
