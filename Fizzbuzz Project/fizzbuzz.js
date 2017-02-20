for (i=1; i<=100; i++) {

if (i % 3 === 0){

if (i % 5 === 0){
	console.log('fizzbuzz');
	$('body').append('<p class="text"> fizzbuzz </>' + '<br>')
	} else {
		console.log('fizz');
			$('body').append('<p class="text"> fizz </>' + '<br>');
	}
}

else if (i % 5 === 0){
	console.log('buzz');
		$('body').append('<p class="text"> buzz </>' + '<br>')
}
else{
	console.log(i);
		$('body').append('<p class="text">' + i + '</>' + '<br>');
}


}