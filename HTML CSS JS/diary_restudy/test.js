// import React, {useState, useRef} from "react";

// function test() {
// 	const nameRef = useRef();
// 	const contentRef = useRef();

// 	const [State, setState] = useState({
// 		name: "",
// 		content: ""
// 	});

// 	const handleState = (e) => {
// 		setState({
// 			...State,
// 			[e.target.name]: e.target.value
// 		});
// 	};

// 	const handleButton = () => {
// 		if (State.name.length < 1) {
// 			nameRef.current.focus();
// 			return;
// 		}
// 		if (State.current.length < 5) {
// 			contentRef.current.focus();
// 			return;
// 		}
// 		alert("저장성공");
// 	};

// 	return (
// 		<div>
// 			<input
// 				ref={nameRef}
// 				name="name"
// 				value={State.name}
// 				onChange={(e) => {
// 					setState({
// 						...State, //State값을 먼저 스프레드연산자로 저장을해주고 바뀐값을 뒤에 해줘야 정상적으로 작동한다.
// 						name: e.target.value
// 					});
// 				}}
// 			/>

// 			<textarea
// 				ref={nameRef}
// 				name="content"
// 				value={State.content}
// 				onChange={handleState} //핸들러 함수를 만들어 사용가능
// 			/>

// 			<button onClick={handleButton}></button>
// 		</div>
// 	);
// }

// export default test;

const date = new Date();
const date2 = new Date().getTime(); // getTime() = 밀리세컨으로 바꿈
const date3 = new Date(date2).toLocaleString();
const date4 = new Date().toLocaleString();
const date5 = new Date().toLocaleDateString();
const date6 = new Date().toLocaleTimeString();
const date7 = new Date().toString();

console.log(date); //object
console.log(date2); // number
console.log(date3); //string
console.log(date4); //string
console.log(date5); //string
console.log(date6); //string
console.log(date7); //string
