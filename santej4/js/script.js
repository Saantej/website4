// // let age = 13;

// // // if (age >= 16) {
// // //     console.log('Доступ разрешен');
// // // } else {
// // //     console.log("Доступ запрещен");
// // // }
// // // if (age == 14) {
// // //     console.log("Ещё маловат");
// // // } else if (age == 16 ) {
// // //     console.log("Доступ разрешен");
// // // } else if (age < 14) {
// // //     console.log("Малявка");   
// // // } else {
// // //     console.log("Доступ разрешен")
// // // }
// let age1 = 15,
//     age2 = 18
// if (age1 >= 18 && age2 >=18) {
//     console.log("Вы прошли фэйс контроль")
// } else {
//     alert("Вы не прошли")
// }

// let block = document.querySelector(".aboutUs .aboutUsBlock .info-block .block")
// console.log(block);
// let h2 = document.querySelector(".aboutUs .aboutUsBlock h2")
// h2.style.fontSize = "50px"
// h2.style.background = "blue"
// h2.style.paddingTop = "30px"
// h2.classList.add("error")
let news = $('.news .newsBlock .info-block .block')
// news.css({
//     "background-color": '#e5e5e5',
//     "padding": '50px'
// })
// news.addClass('error');

$('.news .newsBlock .info-block .block .btnEditorColor').on('click', function(){
    news.toggleClass('error')
    editText();
})
function editText(){
    let btnText = $('.news .newsBlock .info-block .block .btnEditorColor');
    if ( btnText.val() == 'Подробнее')  {
        btnText.val('Обратно')
    } else {
        btnText.val('Подробнее')
    }
}
