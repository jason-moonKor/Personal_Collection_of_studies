const backgroundColor = randomColor();
const h1Color = randomColor();

body = document.querySelector("body");
h1 = document.querySelectorAll("h1");

body.style.backgroundColor = backgroundColor;

h1.forEach((item) => {
	item.style.color = h1Color;
	item.style.fontSize = "100px";
});

setTimeout(() => {
	location.reload();
}, 100);
