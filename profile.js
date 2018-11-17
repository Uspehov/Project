var currentUser = localStorage.getItem('currentUser');
var currentPassword = localStorage.getItem('currentPass');
var firstLine = document.getElementById('first');
var secondLine = document.getElementById('second');
var thirdLine = document.getElementById('third');
var date_reg = localStorage.getItem('Date'+currentUser+currentPassword);
var firstOder = localStorage.getItem(currentPassword+currentUser+1);
var secondOder = localStorage.getItem(currentPassword+currentUser+2);
var thirdOder = localStorage.getItem(currentPassword+currentUser+3);
var cout =localStorage.getItem(currentUser + 'counter');
var write_about = document.getElementById('pop_mess');
var info = document.getElementById('info');

function inserting(where, what){
	if(what!=null){
		var str = what.replace(/\s+/g, '');
		where.innerHTML='<li>'+what+'</li> <a id='+str+'>Delete</a>';
		document.getElementById(str).onclick= function() {localStorage.setItem(what,str);
		where.style.display='none';}		
}}

inserting(firstLine,firstOder);
inserting(secondLine,secondOder);
inserting(thirdLine,thirdOder);

document.getElementById('current_user_name').innerHTML= currentUser;
document.getElementById('date_of_reg').innerHTML= date_reg;
document.getElementById('book_left').innerHTML= 3-cout;


function logOut (){
	localStorage.removeItem('currentPass');
	localStorage.removeItem('currentUser');
    location.href = 'base.html';}




function appear(){
	write_about.style.display='block';	
}

function send_mes(){
	localStorage.setItem(currentUser+'messedge',info.value)
}
function mes_close(){
	write_about.style.display='none';	
}