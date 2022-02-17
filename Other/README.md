## 2022년 웹 개발에서 고려해야 할 환경

- 링크 : <https://engineering.linecorp.com/ko/blog/the-baseline-for-web-development-in-2022/>

결론
자, 이제 성적표를 확인해 봅시다. 

우리는 사용자의 요구에 적절히 대응하지 않았습니다. 특히 성능과 접근성 측면에서 그랬습니다.
우리는 JS를 과도하게 사용했습니다. 의존성과 우리가 작성한 코드 모두에서 그랬습니다. 
우리는 HTML과 CSS를 너무 적게 사용했습니다. 이런 결과는 부분적으로 IE를 지원하기 위해서였지만, 이제 IE를 지원할 필요가 없기 때문에 많은 기능을 사용할 수 있습니다.  
다음은 어떻게 개선해야 하는지 시작점을 잡고 싶은 사람을 위한 전반적인 팁입니다.  

무언가를 CSS로 할 수 있다면 CSS를 사용하세요. 예전에는 JS로만 할 수 있었던 많은 일들을 요즘에는 CSS로도 할 수 있습니다. 이를 통해 JS 코드를 부분적으로 줄일 수 있습니다. 
사용하고 있는 툴셋을 평가해 보세요. 최신의 많은 툴들은 예전 툴보다 성능 베이스라인을 높였으며, 또한 모든 프로젝트가 SPA일 필요는 없습니다. Hugo와 Jekyll, 11ty와 같은 프레임워크 기반이 아닌 SSG들이 이런 경우에 아주 적합합니다.
최신 브라우저를 대상으로 빌드하세요. IE 지원을 중단하고 빌드 대상을 ES 2017 혹은 ES 2018로 설정합니다. 이렇게 하면 번들 크기를 최대 20%까지 줄일 수 있습니다. 
접근성을 처음부터 고려하세요. 계획 및 설계 단계에서부터 염두에 두는 것이 가장 이상적인 시나리오입니다. 명암비와 폰트 크기, 시멘틱 HTML 사용, 키보드 내비게이션과 같은 항목을 개선하는 것부터 시작하면 큰 차이를 만들어 낼 수 있습니다. 