## 2022년 웹 개발에서 고려해야 할 환경

- 링크 : <https://engineering.linecorp.com/ko/blog/the-baseline-for-web-development-in-2022/>

결론자, 이제 성적표를 확인해 봅시다.

우리는 사용자의 요구에 적절히 대응하지 않았습니다. 특히 성능과 접근성 측면에서 그랬습니다. 우리는 JS를 과도하게 사용했습니다. 의존성과 우리가 작성한 코드 모두에서 그랬습니다. 우리는 HTML과 CSS를 너무 적게 사용했습니다. 이런 결과는 부분적으로 IE를 지원하기 위해서였지만, 이제 IE를 지원할 필요가 없기 때문에 많은 기능을 사용할 수 있습니다.  
다음은 어떻게 개선해야 하는지 시작점을 잡고 싶은 사람을 위한 전반적인 팁입니다.

무언가를 CSS로 할 수 있다면 CSS를 사용하세요. 예전에는 JS로만 할 수 있었던 많은 일들을 요즘에는 CSS로도 할 수 있습니다. 이를 통해 JS 코드를 부분적으로 줄일 수 있습니다. 사용하고 있는 툴셋을 평가해 보세요. 최신의 많은 툴들은 예전 툴보다 성능 베이스라인을 높였으며, 또한 모든 프로젝트가 SPA일 필요는 없습니다. Hugo와 Jekyll, 11ty와 같은 프레임워크 기반이 아닌 SSG들이 이런 경우에 아주 적합합니다. 최신 브라우저를 대상으로 빌드하세요. IE 지원을 중단하고 빌드 대상을 ES 2017 혹은 ES 2018로 설정합니다. 이렇게 하면 번들 크기를 최대 20%까지 줄일 수 있습니다. 접근성을 처음부터 고려하세요. 계획 및 설계 단계에서부터 염두에 두는 것이 가장 이상적인 시나리오입니다. 명암비와 폰트 크기, 시멘틱 HTML 사용, 키보드 내비게이션과 같은 항목을 개선하는 것부터 시작하면 큰 차이를 만들어 낼 수 있습니다.

<br/>

특정 CSS문제가 생기지 않도록 하는 스니펫 콜렉션

- Flexbox 줄바꿈 → flex-wrap: wrap;
- 여유 공간 주기 → margin-right: 1rem;
- 줄바꿈 되지 않아야할 긴 콘텐츠 → text-overflow: ellipsis; white-space:nowrap; overflow: hidden;
- 이미지 늘려짐/찌그러짐 방지 → object-fit: cover;
- 스크롤 연쇄 잠금 → overscroll-behavior-y: contain;
- CSS 변수 폴백 값 주기 → max-width: calc(100% - var(--actions-width, 70px));
- 고정 높이 → height 보다는 min-height 사용
- 고정 넓이 → width 보다 min-width 사용
- 배경 반복 제거 → background-repeat: no-repeat;
- 버티컬 미디어 쿼리 활용 → position:sticky 같은거 쓸 때 특정 세로크기 이상에서만 적용 @media (min-height:600px) {}
- Flexbox 아이템 배열시 justify-content: space-between; 대신 gap: 1rem; 사용
- 이미지 위에 하얀 텍스트 올리때 이미지 로딩 실패시 대응 → background-color: grey; 사용
- CSS Grid 위에서 고정 값 사용은 조심 → 항상 미디어 쿼리 사용할 것
- 필요할때만 스크롤바 보이기 → overflow-y: auto;
- 스크롤바 생길때 레이아웃 변화 없애기 → scrollbar-gutter: stable;
- Flexbox 에서 최소 콘텐츠 사이즈 지정 → min-width: 0; (기본값이 auto 여서 overflow 발생 )
- CSS Grid에서 최소 콘텐츠 사이즈 지정 → minmax() 사용
- CSS Grid 사용시 Auto Fit vs. Auto Fill → 대부분의 경우 auto-fill 이 나음
- 이미지 최대 넓이 지정 → max-width: 100%
- 그리드 컨테이너 차일드에 postition: sticky 사용시 align-self: start 적용
- 그룹 셀렉터 지정은 다른 브라우저에서는 안될수 있으니 각각으로 분리할 것
