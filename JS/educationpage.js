
//This code is for google translation 
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,zh-CN,por,el,en,fr,it,ja,ko,nl,pl,pt,ru,sv'}, 'google_translate_element');
}

//This code is to aply animation to the menu.
const nav_icon= document.querySelector('.menu_imag')
const menu_list = document.querySelector('.nav_menu')

nav_icon.addEventListener('click', ()=>{
        menu_list.classList.toggle('showup')
})

window.addEventListener("click", elem =>{

  if(menu_list.classList.contains('showup')&& elem.target!== menu_list && elem.target!==nav_icon)// this is a condition to hide menu when user clicks on elements other than nav_icon and nav_list
  menu_list.classList.toggle('showup')
})

//This code is to scroll
var s_elem = document.querySelectorAll(".scroll");

function showup(){
    var scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<s_elem.length;i++)
    {
    var height = s_elem[i].offsetTop;
    if(height-600< scrollTop){
    s_elem[i].style.opacity=1;
    s_elem[i].classList.add('up')
    }    
    }
}
window.addEventListener('scroll', showup)

//This code is to get the name of place where ESOL programs are going on .


function toggle() {
    var list = document.getElementById("list_cont");
    if (list.style.display === "none") {
    list.style.display = "block";
    } else {
    list.style.display = "none";
    }
}
function borough(bor){
    fetch(`https://data.cityofnewyork.us/resource/w9cy-nnma.json?&borough_community=${bor}`)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log(error))
        

    function displayData(d)
    {
        var inp=document.getElementById('searchBar').value
        var prog=document.getElementById('programs')
        prog.innerHTML = " "
        if (!inp)
        {
            for ( var i=0; i<10; i++)
            {
                prog.innerHTML+="<li>"+ d[i].site_name + "<br>"+`<button class="moreinfo" onmouseover="document.getElementById('list_cont-${i}').innerHTML = 'Requeriment: '+ '${d[i].grade_level_age_group}' + '<br>'+ 'Contact number: ' + '${d[i].contact_number}' " onmouseout="document.getElementById('list_cont-${i}').innerHTML = ''">More Information</button>` + `<p class="p_int" id="list_cont-${i}"></p>`
                

            }
        }
            
        else{
            for ( var i=1; i<=inp;i++)
            {
                prog.innerHTML+="<li>"+ "<br> "+d[i].site_name + `<button class="moreinfo" onmouseover="document.getElementById('list_cont-${i}').innerHTML = 'Requeriment: '+ '${d[i].grade_level_age_group}' + '<br>'+ 'Contact number: ' + '${d[i].contact_number}' " onmouseout="document.getElementById('list_cont-${i}').innerHTML = ''">More Information</button>` + `<p class="p_int" id="list_cont-${i}"></p>`
            }

        
            }}}

