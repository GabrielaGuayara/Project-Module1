
//This code is for google translation 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,zh-CN,por,el,en,fr,it,ja,ko,nl,pl,pt,ru,sv'}, 'google_translate_element');
}

//This code is to send an email
// const email=document.getElementById("email")
// const message=document.getElementById('message')

function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "gabriela.guayara26@gmail.com",
    To : 'daisyalex1989@gmail.com',
    From : "gabriela.guayara26@gmail.com",
    Subject : "This is the subject",
    Body :  "This is the message"
  }).then(
    message => alert(message)
  );
  }