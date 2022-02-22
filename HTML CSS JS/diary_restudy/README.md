nodeJS만 됨

이런식으로 내보내고

```
module.exports = {
    moduleName : "모듈이름",
    내보낼 함수 : 내보낼 함수
}
```

가져올 파일에서는

```
const getModule = require("가져올 파일경로");
```

이런식으로 불러온다

rfce => 함수선언식 <br/> rafce => 함수표현식<br/> ffc => react를 import 하지 않고 파일명이나 function 이름 써줘야함<br/>

useState() 함수 안에 객체를 생성해서 여러가지를 쓸수있다.

useRef()를 불러와서 현재값의 focus() 를 주는 기능구현가능 useRef() 괄호안에 값은 초기값

new Date(created_date).toLocaleString() = 밀리세컨으로 만들어놨던 created_date 를 new Date()안에 인자값으로 넣어준뒤 toLocaleString()응 사용해서 알아보기쉬운 값으로 바꿔준다.

prop으로 전달받는 인자값이 오류가 났을때를 대비해서 defaultProps 을 작성해주자
