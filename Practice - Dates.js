//Create a function with that takes in  a Date object and returns a funny first name
//and a lastname for people born on that date


function getFunnyName(){
	var userBirthday = new Date(prompt('What is your birthday? (Ex: December 5)'));

	function funnyName(userBirthday){
		var firstName = ['The Professor', 'The Great', 'The Dorky',
		  'The Odd', 'The Specific', 'The Green', 'The Squirrel', 'The Bathtub', 'The Kleenex',
		  'The Door Knob', 'The Ketchup', 'The Watermelon'];
		var lastName = ['Puddle', 'Donut', 'Buffalo', 'Tart', 'Pumpkin', 'Corn Nut', 'Peanut', 'Dud', 'Parade', 'Big Gulp'];

		alert (firstName[userBirthday.getMonth()] + " " + lastName[userBirthday.getDate() % 10]);
	}

	funnyName(userBirthday);
}

