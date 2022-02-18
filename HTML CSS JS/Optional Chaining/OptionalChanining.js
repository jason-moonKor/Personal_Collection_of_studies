async function test() {
	const apiFetch = await fetch("https://yts.mx/api/v2/list_movies.json");
	const apiJson = await apiFetch.json();

	// console.log(apiJson.data.movies);

	apiJson.data.movies.map((item) => {
		console.log(item.title);
	});
}
test();

// API연결관련은 옵셔널 체이닝으로 쓰기 적합하지 않음 async, await 으로 하는게 더 확실함

const testObject = {
	name: "jaesang",
	height: 179,
	weight: 95,
	hobby: {
		soccerBackNumber: 95,
		judoGrade: 1
	}
};

if (testObject && testObject.hobby && testObject.hobby.judoGrade) {
	console.log("해당 내용을 찾아냈습니다 : ", testObject.hobby.judoGrade);
} else {
	console.log("해당 내용 찾기 실패");
}

if (testObject?.hobby?.judoGrade) {
	console.log("옵셔널체이닝으로 찾아냈습니다 : ", testObject.hobby.judoGrade);
} else {
	console.log("옵셔널 체이닝 해당내용 찾기 실패");
}
