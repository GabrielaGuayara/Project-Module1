
//This code is for google translator
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,zh-CN,por,el,en,fr,it,ja,ko,nl,pl,pt,ru,sv'}, 'google_translate_element');
  }



//This code is to aply animation to the menu.
const nav_img= document.querySelector('.menu_imag')
const menu = document.querySelector('.nav')

nav_img.addEventListener('click', ()=>{
        menu.classList.toggle('show')
})

window.addEventListener("click", elem =>{

  if(menu.classList.contains('show')&& elem.target!== menu && elem.target!==nav_img)
  menu.classList.toggle('show')
})



//This code is to scroll
var scrollElem = document.querySelectorAll(".anim");

function show(){
  var scrollTop = document.documentElement.scrollTop;
  for(var i=0; i<scrollElem.length;i++)
  {
    var elemHeight = scrollElem[i].offsetTop;
    if(elemHeight-500 < scrollTop){
      scrollElem[i].style.opacity=1;
      scrollElem[i].classList.add('up')
    }    
  }
}
window.addEventListener('scroll', show)


//This code is for sending to my email some user's comments
function sendComment() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "gabriela.guayara26@gmail.com",
    To : 'daisyalex1989@gmail.com',
    From : "gabriela.guayara26@gmail.com",
    Subject : "This is a comment from The Big Apple Website",
    Body :   message,
  }).then( ()=> {
    alert("Mail has been sent successfully")
    });
    }
