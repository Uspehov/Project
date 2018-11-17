var log = document.getElementById('logg');
var pw = document.getElementById('pass');
var warning_you = document.getElementById('warn');
var warning_you_log = document.getElementById('warn-log');
//localStorage.clear();

function red() {
   var myWindow = window.open("account.html");}

function store() { 
var existedName = localStorage.getItem(log.value); 
var reWhiteSpace = new RegExp(/\s/g);
if(reWhiteSpace.test(pw.value)==true || reWhiteSpace.test(log.value)==true)
    {warning_you.innerHTML='No spaces allowed';} 

else if(pw.value===log.value){
    warning_you.innerHTML='Login and password cannot be the same';}

else if(log.value===existedName) {  
    warning_you.innerHTML='This login already exists';}

else if(pw.value.length > 4 && log.value.length > 4){
    var date = new Date();
    var date_reg = (date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
    localStorage.setItem('Date'+log.value+pw.value, date_reg);
    localStorage.setItem(pw.value+log.value, pw.value);
    localStorage.setItem(log.value, log.value);
    alert('You have successefully registered');
    location.reload();}
else{
 warning_you.innerHTML='Login and password length must be more 5';}
}

function check() {
    var userName = document.getElementById('userLogg');
    var userPw = document.getElementById('userPass');
    var storedPw = localStorage.getItem(userPw.value+userName.value);
    var storedName = localStorage.getItem(userName.value);
   

if(userName.value == storedName && userPw.value == storedPw) {
    localStorage.setItem('currentUser', userName.value);
    localStorage.setItem('currentPass', userPw.value);
    red();

        
    }
    else {
        warning_you_log.innerHTML='Invalid login or password';}  
}

