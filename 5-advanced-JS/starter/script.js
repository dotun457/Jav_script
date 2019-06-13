/*var PersonProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(PersonProto);
john.name = 'John';
john.yearOfBirth = 1999;
john.job = 'teacher';


var jane = Object.create(PersonProto,
{
	name : {value: 'jane'},
	yearOfBirth: {value: 1969},
	job : {value: 'designer'}
})

console.log(john.calculateAge());
console.log(jane.calculateAge());
*/

/*
//Primitives vs Objects

var a = 23;
var b = a;
a = 65;
//console.log( a);
//console.log(b);

var obj1 =  {
	name: 'John',
	age: 26
};

//not objects share the same address in memory , its a deep copy changing one changes the other
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log( obj2.age);
obj2.age = 50;
console.log(obj1.age);
console.log(obj2.age);


var age = 27;
var obj = {
	name : 'Jonas',
	city: 'Lisbon'
};

function change(a, b){
	a = 30;
	b.city = 'San Francisco';

}

change(age, obj );   //objects are sent by pass by address and varibales are sent by pass by value 
console.log("_____________");
console.log(age);  //30
console.log(obj.city);  //lisbon 

*/


//Lectur : Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i = 0; i < arr.length; i++ ){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(el){
	return el >= 18;
}

function maxHeartRate(el){
	if ( el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	}
	else{
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/


//Lecture: Functions returning functions
/*
function interviewQuestion ( job){
	if ( job == 'designer'){
		return function( name){
			console.log(name + ', can you please explain what UX design is ?');
		}
	}
	else if ( job === 'teacher'){
		return function(name){
			console.log('What subject do youu teach, ' + name + '?');
		}
	}
	else{
		return function( name){
			console.log('Hello ' + name + ', Whhat do you do?');
		}
	}
}



var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
interviewQuestion('teacher')('Kanye');
*/

//Lecture : IIFE  Immediately revoked function expression
/*function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();*/

/*(function(){
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

( function ( goodluck){
	var score = Math.random() * 10;
	console.log( socre >= 5 - goodluck);
})(5);  // goodluck is 5 

*/

/// Closures Lecture 
// inner functions can use vaaribales in the outer function 
/*
function interviewQuestion(job){
	a = ', can you please explain what UX design is ?';
	b = 'What subject do you teach, ';
	c = 'What do you do ?';
	return function ( name){
		if ( job === 'designer'){
			console.log(name + ', can you please explain what UX design is ?');
		}
		else if ( job === 'teacher'){
			console.log('What subject do you teach,' + name + '?');
		}
		else {
			console.log("What do you do ?" + name);
		}
	}
}


interviewQuestion('designer')('Kanye');
*/

//Lecture : Bind , call and apply
/*
var John = {
	name : 'John',
	age : 26,
	job : 'teacher',
	presentation : function ( style, timeOfDay){
		if ( style === 'formal'){
			console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m' + this.name + 
				', I\'m a' + this.job + 'I\'m ' + this.age + 'years old.');
		}
		else if (style === 'friendly') {
			console.log('Hey! what\'s up ? Im ' + this.name + ', Im a ' + this.job + 'Im ' + this.age + 'tears old. Have a nice ' + timeOfDay + '.');
		}
	}
}

John.presentation('formal', 'morning');

var emily = {
	name : 'emily',
	age : 35,
	job : 'designer'
};

John.presentation.call(emily,'friendly', 'afternoon');
//John.presentation.apply(emily['friendly', 'afternoon']);
var johnFiendly = John.presentation.bind(John, 'friendly');

johnFiendly('morning');


var emilyFormal = John.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i = 0; i < arr.length; i++ ){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(limit , el){
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/
function Question (text,answer, number ){
	this.ques = text;
	this.answers = answer;
	this.option = number;
	this.sel = function(){
		console.log( this.ques);
		console.log(this.answers);
	};

}

var WYA = new Question("WHere you at Bro ?", ['WALC', 'Cary', 'Tark'], 2);
var yourMajor = new Question("What's your major bro ?", ['Cmp E', 'Comp Sc', 'AAE'], 0);
var yourFood = new Question("What's your fave food ?", ['eggs', 'rice', 'chicken', 'milk'], 3);

var questions = [WYA, yourMajor, yourFood];

var random = Math.floor(  (Math.random() * 3) ) ;


questions[random].sel();
var input = prompt("bro what's your answer? Choose a number from 0 - " + (questions[random].answers.length - 1));

if ( input == questions[random].option ){
	console.log("Right answer");
}
else {
	console.log( "wrong Nigga");
}

/*function release (random){
	var item = questions[random];
	console.log(questions[random].question);
	/*for ( var i = 0; i < item.answers.length; i++){
		console.log(i);
	}
}

release(random);

*/
