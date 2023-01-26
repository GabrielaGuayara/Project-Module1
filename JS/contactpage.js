
//This code is for google translation 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,zh-CN,por,el,en,fr,it,ja,ko,nl,pl,pt,ru,sv'}, 'google_translate_element');
}


var submitbtn=document.getElementById("button-click")
submitbtn.addEventListener("click", sendEmail);

const e_body = ()=>{
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("m_inp").value;

  return `<b>Name: </b><br>${name}<br><b>Last Name: </b><br>${lname}<br><br><b>Email:</b><br>${email}<br><br>`+`<b>Comments</b><br>${message}`
}


function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "gabriela.guayara26@gmail.com",
    Password : "Ss5011989",
    To : 'gabriela.guayara@gmail.com',
    From : "gabriela.guayara26@gmail.com",
    Subject : "This is the subject",
    Body :  e_body()
  }).then(
    message => alert(message)
    );
}


    /* SmtpJS.com - v3.0.0 */
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };