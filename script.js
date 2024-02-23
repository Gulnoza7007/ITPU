
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

const swiper = new Swiper('.about_swiper_body', {
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

  });

  const swiper2 = new Swiper('.programming_courses_swiper', {
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

  });

  let swiper3 = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
  });



  // courses

  const showMore = document.querySelector(".courses_list_more")
  const again = document.querySelector('.again')
  
  showMore.addEventListener("click", moreButton);
  
  
  function moreButton() {
      const links = document.querySelector(".courses_links_more");
      const blocks = document.querySelector(".courses_body_additional");
      const icon = document.querySelector(".courses_icon svg");
      blocks.classList.toggle("openn");
      links.classList.toggle("open");
      if(links.classList.contains('open') && blocks.classList.contains("openn")){
          links.style.maxHeight = links.scrollHeight + 'px';
          blocks.style.maxHeight = blocks.scrollHeight + 'px';
          again.textContent = "Yopish";
          icon.classList.add('rotate');

      }
      else{
          links.removeAttribute("style");
          blocks.removeAttribute("style");
          again.textContent = "Yana ko'rsatish";
          icon.classList.remove('rotate');
          
      }
  }




  //application

  let button = document.querySelector(".application_button");
let number = document.querySelector(".number");
let namee = document.querySelector(".your_name");
let text = document.querySelector(".application_check");




button.addEventListener("click", () =>{
    if( namee.value== ""){
      namee.value = "Ismingizni kiriting"
      namee.style.color = 'red';
    }
    else{
      namee.style.color = 'black';

    }
    if(number.value == ''){
      {
        number.style.color = 'red'
        number.value = "telefon raqamingizni kiriting"
       }
    }
    if( number.value != ""){
       if(number.value.length !== 13){
        number.style.color = 'red'
        text.classList.add("error");
       }
       else{
        number.value = number.value;
        text.classList.remove("error");
        number.style.color = 'black'


       }
      }
    if(namee.style.color != 'red' && number.style.color != 'red'){
       button.textContent ="YUBORILDI"
    }

})

console.log(number.value);



// Course block

const courseBlocks = document.querySelectorAll('.courses_block')
const courseLinks = document.querySelectorAll('.courses_list')

const removeActiveClass = (arr) => {
  for (const item of arr) {
    item.classList.remove('active')
  }
}


window.addEventListener('scroll', () => {
  for(let i = 0; i < courseBlocks.length; i++){
    
    const  {top, bottom, x} = courseBlocks[i].getBoundingClientRect()
    const b = Math.floor(bottom)
    const t = Math.floor(top)
    const a = Math.floor(x)
    if(top >= 0 && top <= 560){
      const value = courseBlocks[i].getAttribute('data-value')
      for(let el of courseLinks){
        const elValue = el.getAttribute('data-value')
        if(elValue === value){
          removeActiveClass(courseLinks)
          el.classList.add('active')
        }
      }
      console.log(value)
    }
  } 
})


for (const btn of courseLinks) {
  btn.addEventListener('click', () => {
    const bntValue = btn.getAttribute('data-value')
    for (const el of courseBlocks) {
      if(bntValue === el.getAttribute('data-value')){
        const bodyRect = document.body.getBoundingClientRect()
        const elemRect = el.getBoundingClientRect()
        const offset = elemRect.top - bodyRect.top;
        document.documentElement.scrollTop = offset - 32
      }
    }
    console.log(courseBlocks)
  })
}