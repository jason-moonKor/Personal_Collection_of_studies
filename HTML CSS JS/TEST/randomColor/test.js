// const backgroundColor = randomColor();
// const h1Color = randomColor();

body = document.querySelector("body");
h1 = document.querySelectorAll("h1");

body.style.backgroundColor = randomColor();

h1.forEach((item) => {
	item.style.color = randomColor();
	item.style.fontSize = "50px";
});

setTimeout(() => {
	location.reload();
}, 100);
