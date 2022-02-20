// const states = [
// 	{name: "Alabama", capital: "jason"},
// 	{name: "Alaska", capital: "japan"},
// 	{name: "Korea", capital: "seoul"}
// ];

// for (const state of states) {
// 	console.log(state.capitol);
// }

// states.forEach((state) => {
// 	console.log(state.capitol);
// });

// const names = ["Alice", "Bob"];
// console.log(names[2].toUpperCase());

// let a = 1;

// function foo() {
// 	let a = 10;
// 	bar();
// }

// function bar() {
// 	console.log(a);
// }

// foo(); // ?
// bar(); // ?

// var x = "xxx";

// function foo() {
// 	// 2. foo 함수 호출
// 	var y = "yyy";

// 	function bar() {
// 		// 4. bar 함수호출
// 		var z = "zzz";
// 		console.log(x + y + z); //5. console.log 실행
// 	}
// 	bar(); //3. bar 실행
// }
// foo(); //1. foo 실행

// //  실수는 비교연산자쓰면 안됨
// const a = 0.9;
// const b = 0.3;

// if (a === b) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// const myOb = {
// 	name: "jason"
// };

// const myOb2 = {
// 	name: "MOONJAESANG"
// };

// var myMethod = function (a) {
// 	return "안녕 " + this.name + a;
// };

// const myTest = function (a) {
// 	return "헬로우 " + this.name + a;
// };

// console.log(myMethod.call(myOb, " hi")); //call의 첫번째 매개변수는 this를 지칭할 객체를 선택
// console.log(myTest.call(myOb2, " hello"));

//Demo with javascript .call()

// const obj = {
// 	name: "문재상",
// 	age: 32,
// 	height: 179
// };

// const greeting = function (a, b, c) {
// 	//함수 표현식으로는 불가능.
// 	return "안녕 " + this.height + " to " + a + " " + b + " in " + c;
// };

// console.log(greeting.call(obj, "", "KOLKATA", "WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB

//Demo with javascript .apply()

// var obj = {name: "Niladri"};

// var greeting = function (a, b, c, d) {
// 	return "welcome " + this.name + " to " + a + " " + b + " in " + c + d;
// };

// // array of arguments to the actual function
// var args = ["JAESANG", 1234, "MOON", "WB", 1234];
// console.log("Output using .apply() below ");
// console.log(greeting.apply(obj, args));

// /* The output will be
//   Output using .apply() below
//  welcome Niladri to Newtown KOLKATA in WB */

//Use .bind() javascript

// var obj = {name: "Niladri"};

// var greeting = function (a, b, c) {
// 	return "welcome " + this.name + " to " + a + " " + b + " in " + c;
// };

// //creates a bound function that has same body and parameters
// var bound = greeting.bind(obj);

// console.dir(bound); ///returns a function

// console.log("Output using .bind() below ");

// console.log(bound("Newtown", "KOLKATA", "WB")); //call the bound function

var x = "xxx";

function foo() {
	var y = "yyy";

	function bar() {
		var z = "zzz";
		console.log(x + y + z);
	}
	bar();
}
foo();
