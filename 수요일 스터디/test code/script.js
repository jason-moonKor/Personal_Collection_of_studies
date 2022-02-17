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

var x = "xxx";

function foo() {
	// 2. foo 함수 호출
	var y = "yyy";

	function bar() {
		// 4. bar 함수호출
		var z = "zzz";
		console.log(x + y + z); //5. console.log 실행
	}
	bar(); //3. bar 실행
}
foo(); //1. foo 실행

//  실수는 비교연산자쓰면 안됨
const a = 0.9;
const b = 0.3;

if (a === b) {
	console.log(true);
} else {
	console.log(false);
}
