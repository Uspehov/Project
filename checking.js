var checkUser = localStorage.getItem('currentUser');
var mess = document.getElementById('pop_mess');

function check_to_book(){
	if(checkUser){
		location.href = 'booking.html';
		}
	
	else{
mess.style.display = 'block';
mess.innerHTML ="<h1>Sorry!</h1>	<p>You must be logged to procced.</p> <a id=closure>Return</a> <a id=next-stage>Go to registration</a>";
document.getElementById('closure').onclick= function() {mess.style.display = 'none';}
document.getElementById('next-stage').onclick= function() {location.href = 'registration.html';}
}}



function check_to_log(){
if(checkUser){
	location.href = 'account.html';
}
else{
	location.href = 'registration.html';
}}










