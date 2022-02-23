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

useEffect 콜백함수안에서 return값으로 오는 값은 unmount 되었을때 호출되는 값이다.

useMemo => Memoization 이미 계산한 연산결과를 기억해두었다가 동일한 계산을 시키면다시 연산하지않고 기억해 두었던 데이터를 반환시키게 하는 방법

const testFunction = useMemo( ()=>{ //함수의 내용 },[디펜던시어레이에 값이 변할때만 useMemo로 감싼 콜백함수가 실행. ex)useEffect와 동일])

useMemo로 감싼 함수는 사용될때 ()를 빼고 값처럼 사용해야한다

useCallback => setState에 함수형으로 내보내줘야한다

export const diaryContext = React.createContext(); createContext 는 생성갯수에 제한이 없다 export const diaryDispatchContext = React.createContext(); 와 같이 나눠서 보내줄수있고 Provider안에 중첩으로 넣어주면된다

컨텍스트를 export로 내보내기하고 createContext()로 선언한다

본문 리턴안에 <diaryContext.Provider> 안에 본문 내용들을 다 넣어주고

<diaryContext.Provider value={//보내줄 props}> 밸류안에 넣어주면 프로바이더 안에서 밸류로 보내준 프롭스를 다 쓸수있다.

하위에서 받아올땐

const getTest = useContext(diaryContext) 로 받아오면된다(임포트 해줘야함)

react-router-dom의 사용할 기능 3가지 : useParam, useSearchParams, useNavigate

useParam = path Variable

```
<Routes> //상위
    <Route path="/diary/id" element={<Diary/>} />
</Routes>

//하위
import {useParams} from "react-router-dom"
const {id} = useParams();
console.log(id)
//url에 diary/(id)  를 받아올수있다
```

Query를 관리하는 useSearchParams ex) /edit?id=10&mode=dark 웹페이지에 데이터를 전달하는 가장 간단한 방법

```
import {useSearchParams} from "react-router-dom"

const [searchParam, setSearchParam] = useSearchParams();
const id = serachParam.get("id");
console.log("id : ",id);
setSearchParam({name:"jason"}) //이렇게 바꾸면 url에 /edit?name=jason 으로 들어간다
```

const navigate = useNavigate(); navigate("/home") => 페이지를 홈으로 간다. like <Link> navigate(-1) => 뒤로가기기능
