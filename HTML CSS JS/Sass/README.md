## Sass Test

터미널을 띄운 후

```
sass sass파일이름.sass css로변환할파일이름.css -w
```

-w 명령어는 watching 의 명령을 수행하고 sass파일의 변화가있을때마다<br/>
실시간으로 css파일로 컴파일링이 된다.


$(달러)기호를 사용해서 변수처럼 사용할수있다

```
$color: royalblue;
$size: 100px;

.info {
	h1 {
		color: $color;
		font-size: $size;
	}
}

```