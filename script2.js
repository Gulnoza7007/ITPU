 let button = document.querySelector(".certificate_button");
 let input = document.querySelector(".certificate_input");
 let text = document.querySelector(".certificate_text");
 let confirmed = document.querySelector(".certificate_confirmed");
 let checked = document.querySelector(".certificate_check");
 let checkAgain = document.querySelector(".certificate_confirmed_check");

button.addEventListener("click", check)

function check(){
    if(input.value !== "true"){
       text.classList.add("wrong")
      }
      else{
         confirmed.classList.add("real");
         checked.classList.add("checked");
     }
}


checkAgain.addEventListener("click", function (){
   checked.classList.remove("checked");
   confirmed.classList.remove("real");
   text.classList.remove("wrong")
   input.value = '';
})



const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".open");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body")


console.log(body)

openButton.addEventListener('click', function(){
    nav.classList.add('displayMenu')
    closeButton.classList.add('displayButton')
    body.classList.add('active')
})

closeButton.addEventListener('click', function(){
    nav.classList.remove('displayMenu')
    body.classList.remove('active')

})



// Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false},
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

//   //application

//   let button = document.querySelector(".application_button");
// let number = document.querySelector(".number");
// let namee = document.querySelector(".your_name");
// let text = document.querySelector(".application_check");




// button.addEventListener("click", () =>{
//     if( namee.value== ""){
//       namee.value = "Ismingizni kiriting"
//       namee.style.color = 'red';
//     }
//     else{
//       namee.style.color = 'black';

//     }
//     if(number.value == ''){
//       {
//         number.style.color = 'red'
//         number.value = "telefon raqamingizni kiriting"
//        }
//     }
//     if( number.value != ""){
//        if(number.value.length !== 13){
//         number.style.color = 'red'
//         text.classList.add("error");
//        }
//        else{
//         number.value = number.value;
//         text.classList.remove("error");
//         number.style.color = 'black'


//        }
//       }
//     if(namee.style.color != 'red' && number.style.color != 'red'){
//        button.textContent ="YUBORILDI"
//     }

// })

// console.log(number.value);


