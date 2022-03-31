# express

* express도 크게 보면 모듈(기능 단위가 커서 프레임워크라고 부르는 것)
* 서버를 개발하기 위한 종합선물세트
* middleware의 연결로 이뤄짐(내부 미들웨어, 외부 미들웨어, 사용자 정의 미들웨어)
* 모듈도 내부, 외부, 사용자 정의가 있는데 여기서 확실하게 구분해주세요.
* request -> middleware <-> middleware <-> middleware <-> middleware -> response
* 모든 미들웨어를 다 거치는 것이 아니라 중간에서 응답이 보내지면 그 이후 미들웨어는 작동하지 않음
* 보통 앞에 json이나 headers, security 관련된 세팅을 해놓고, 중간에 미들웨어의 연속, 뒷부분에는 error처리
* request -> middleware(세팅) <-> middleware(/, get) <-> middleware(/blog, get) <-> middleware(/blog/:id, get) <-> middleware(error) -> response
* 미들웨어끼리 다음으로 넘어가기 위해 next를 호출해야 함! 필수!

```javascript
app.get('/', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    res.send('hello world!!');
});

// 여기서 (req, res, next) => {}가 미들웨어! 자주사용하니 code 스니펫 등록해주세요!
```