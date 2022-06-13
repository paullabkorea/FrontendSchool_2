* `npx create-react-app my-app && cd my-app && npm install styled-components`
* 컴포넌트는 Object일 뿐이다! 대단한 새로운 개념이 아니다!
* {arr.map()}형태나 {[a, b, c, d]}형태 또는 직접 arr를 {arr}에 넣는 경우 각 요소는 형제들 중 유일한 key값을 가지고 있어야 합니다.
* 결국에는 props로 전체 UI를 그리게 되는 것! -> 그러면 props 건드려서 상위로 값이 전파되게 할 수 있을까? -> 전파가 되면 상위 요소가 재렌더링 되야 하는데...
* 재렌더링 기준
    1. 내 state(useState로 선언한 변수 등)가 수정될 때
    2. 내 부모가 재렌더링 될 때
    3. 내 props가 변경되었을 때
* object로 css 작성하는 방법
* tagged template literal
    * https://medium.com/@su_bak/javascript-tagged-template-literals%EB%9E%80-d7dca9461a45
    ```jsx
    const name = '이호준'
    const age = 10

    function 인사(문구, 이름, 나이){
        // console.log(문구)
        console.log(문구, 이름, 나이)
        return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
    }

    const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

    console.log(인사문구)
    ```
    * 위에서 나온 예제와 같이 여기서 태그명은 실제로는 함수입니다.
    ```jsx
    const 변수명 = styled.태그명`
	    background-color : red;
    `
    ```

    * 편의 기능
        * auto import 익스텐션
        * https://minimin2.tistory.com/47
        * https://react.vlpt.us/basic/27-useful-tools.html
        * vscode-styled-components 익스텐션을 설치하면 rfc를 입력하면 자동완성 되긴 합니다.