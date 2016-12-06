$(document).ready(function(){
//var locname = $('.city');
var temp = $('.temperature');
var APIKEY = '5d2601f4620847da11e653d59d14ae18';
var loc = $('#search').val();
//var responsetext = $(url).html();
function updateByCity(loc){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	sendRequest(url);
}

/*function sendRequest(url){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	var xmlhttp = new XMLHttpRequest ();
	xmlhttp.onreadystatechange = function(){
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
		if (xmlhttp.readystate == 4 && xmlhttp.status == 200) {
		var data = JSON.parse(xmlhttp.responseText);
		locname = data.name;
		temp = data.main.temp;
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}*/

$('.enter').click(function(event){
event.preventDefault();
var loc = $('#search').val();
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	//$('.temperature').html(temp);
	//$('.city').html(locname);
	console.log(url);
	var xmlhttp = new XMLHttpRequest ();
	xmlhttp.onreadystatechange = function(){
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
		console.log("lol");
	var data = JSON.parse(xmlhttp.responseText);
	var datatext = data.id;
	var name = data.name;
		var locname = name;
		var humiditytext = data.main.humidity;
		console.log(temp);
		console.log(url);
		$('.humidity').text(humiditytext);
	$('.city').text(name);
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

});