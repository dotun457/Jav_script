var budgetController = ( function () {
	var x = 23;  //private in the closure

	var add = function (a){
		return x + a;
	}  //private 

	return {  //not private
		publicTest: function (b){
			console.log( add(b));
		}
	}
}) ();


var UIController = (function (){
	//some code 
}) ();


var controller = (function (budgetCrl, UICtrl){
	var z = budgetCrl.publicTest(5);

	return {
		anotherPublic : function(){
			console.log(z);
		}
	}
}) (budgetController, UIController);