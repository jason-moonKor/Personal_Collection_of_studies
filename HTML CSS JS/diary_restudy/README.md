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

//css

flex-grow:1 => 가지고있는(나머지) 간격의 전체를 가질수있게된다.

배열안에 , 없애기 ex) ["abcd","bbbb","cccc"].join(" ") => abcd bbbbb cccc. => 하나로 합쳐주고 중간에 쉼표(기본)를 원하는 문자로 바꿔준다

const date = new Date().getTime 으로 밀리세컨즈로 사람이 한눈에 알아보기 어렵게 만들어놓은 객체를

new Date(date).toLocaleDateString(); 으로 다시 보기쉽게 바꿔줄수있다.(2021. 12. 8.) 이런식으로 바뀜

div 안에도 onClick이벤트 가능...

date 객체에 .toISOString()를 사용하면 yyyy-mm-dd 이런식으로 시간까지 뒤로 쭉나오는데 .slice(0,10)으로 인덱스0~9까지 짜르면 년월일 까지만 딱 나온다. ex) 2022-02-26

display:grid; //그리드 방식으로 디스플레이 grid-template-columns: repeat(5,auto); //가로방향으로 정렬하는데 5개가 한줄로 놓고 크기는 auto로 한다.(크기가 줄어들면 저절로 줄어들고 커지면 커진다.) gap:2% // 각 객체들 사이의 간격

css // resize : vertical = 가로로는 마우스로 크기조절 불가능하고 위아래로만 조절가능

css // word-break : keep-all; => 텍스트가 길어져서 줄을 바꿔야 할때 단어를 쪼개서 줄바꿈 하지말라는 의미

//localStorage

- 데이터 저장하는법 localStorage.setItem("키값(이름)","넣을값")

ex)

localStorage.setItem("key1",1); localStorage.setItem("key2","10"); localStorage.setItem("key3",{value:30});

=>스토리지에 보면

key1 10 key2 10 key3 [object Object]

라고 나온다

그래서 key3은 localStorage.setItem("key3",JSON.stringify({value : 30})); 이렇게 넣어주면 key3 {"value":30} 이런식으로 밸류값이 들어감

\*기본적으로 로컬스토리지에 들어가는값은 문자열로 다 바뀌어서 들어감

- 데이터 불러오는법

localStorage.getItem("item1"); => 문자열 키값으로 해당 데이터를 가져옴

숫자형타입은 가져올때 parseInt를 사용해야 숫자형으로 바뀌어서 가지고오고객체도 문자열처럼 바뀌어서 있기때문에 꺼내올때 JSON.parse(localStorage.getItem("item3")); 이렇게 꺼내와야된다 (복원)

- 타이틀 페이지마다 바꾸기

useEffect(()=>{ const titleName = document.getElementsByTagName("title")[0]; <br> titleName.innerHTML = `이름 바꾸기 - ${바꾸고싶은 props}`; },[])

각 페이지마다 넣어주면 됨.
