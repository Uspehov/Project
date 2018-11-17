//localStorage.clear();
var days = document.getElementById('days');
var master = document.getElementById('master');
var time = document.getElementById('time');
var mess = document.getElementById('pop_mess');
var osnova = document.getElementById('main');
var currentUser = localStorage.getItem('currentUser');
var currentPassword = localStorage.getItem('currentPass');
var cout =localStorage.getItem(currentUser + 'counter');

function func() {

var sum = days.value +master.value + time.value;

if(localStorage.getItem(sum)){
mess.style.display = 'block';
mess.innerHTML ="<h1>Sorry!</h1> <p>That time has been already booked.</p> <a id=closure>Ok</a>";
document.getElementById('closure').onclick= function() {mess.style.display = 'none';}
}

else{
	if(cout>2){
	mess.style.display = 'block';
	mess.innerHTML =" <h1>Sorry!</h1>	<p>You have reached the limit of boking this week</p> <a id=closure>Ok</a>";
	document.getElementById('closure').onclick= function() {mess.style.display = 'none';}
	return false;}

	else {cout++;
	localStorage.setItem(currentUser +'counter',cout);
	var needed_day = document.getElementById(sum);
	needed_day.innerHTML =time.value + '.....................Booked';
	mess.style.display = 'block';
	mess.innerHTML =" <h1>Succes!</h1>	<p>You have successefully booked a visit on"+' '+days.value+' ' + master.value+' ' + time.value+' '+'</p>' + '<a id=closure>Ok</a>';
	document.getElementById('closure').onclick= function() {mess.style.display = 'none';}
	localStorage.setItem(sum,sum);
	localStorage.setItem(currentPassword+currentUser+cout,days.value +"  "+master.value + "  "+time.value);
	var html = osnova.innerHTML;
	localStorage.setItem('main',html);}
	}
}


if(localStorage.getItem("main")) { 
	osnova.innerHTML = localStorage.getItem('main');}

for(i=1;i<9;i++){

	var essential_key = localStorage.getItem(currentPassword + currentUser + i);
	var deletet_item = localStorage.getItem(essential_key);
	var position = document.getElementById(deletet_item);

	if(essential_key!=null && position!=null && deletet_item!=null ){
		var replacement=position.innerHTML; 
		var ale = replacement.toString().replace('Booked','Free');
		position.innerHTML = ale;
		var html = osnova.innerHTML;
		localStorage.setItem('main',html);
		cout--;
		localStorage.setItem(currentUser+'counter',cout);
		localStorage.removeItem(currentPassword + currentUser + i);
		localStorage.removeItem(essential_key);
		localStorage.removeItem(deletet_item);
	}	
}





