// import axios from "axios";

// function fetchMovies() {
// 	axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
// 		console.log(res);
// 		const h1El = document.querySelector("h1");
// 		const imgEl = document.querySelector("img");
// 		h1El.textContent = res.data.Search[1].Title;
// 		imgEl.src = res.data.Search[1].Poster;
// 	});
// }
// fetchMovies();

const str = `
010-1234-1234
asdweoijfbn@hanmail.net
http://www.naver.com
aaabbbbbcccsssdddd
`;

// const regexp = new RegExp("123", "gi");
const regexp = /w/gi;
console.log(str.match(regexp));
