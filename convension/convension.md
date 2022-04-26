## 컨벤션
 - 네이버 컨벤션
    - https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf
    - class명과 폴더명, 이미지 명은 예약된 이름을 사용한다.
    - 태그에서 class와 style은 마지막에 선언한다.
    - z-index는 10단위
 - google code convention
    - https://google.github.io/styleguide/
    - space 2번
    - `<!-- TODO: remove optional tags -->` 처럼 TODO를 사용할 수 있다. todo tree extension 같은 것을 사용해서 목록화 할 수 있다.
    - 아래와 같이 사용하지 않는다.
        ```html
        <script src="https://www.google.com/js/gweb/analytics/autotrack.js"
        type="text/javascript"></script>
        ```
    - 위 코드는 아래와 같이 사용한다.
        ```html
        <script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
        ```
    - google에서 권장하는 코드
        ```
        h1,
        h2,
        h3 {
        font-weight: normal;
        line-height: 1.2;
        }
        ```

 - toast 컨벤션
    - https://ui.toast.com/fe-guide/ko_HTMLCSS
    - https://ui.toast.com/fe-guide/ko_CODING-CONVENTION
    - boolean 타입은 ture인 경우 명시하지 않는다.
        ```html
        <!-- Bad -->
        <input type="text" disabled=true>

        <!-- Good -->
        <input type="text" disabled>

        <!-- Good -->
        <input type="checkbox" value="1" checked>

        <!-- Bad -->
        <input type="checkbox" value="1" checked=true>
        ```
    - 단일 내용은 한 줄에 표시한다.
        ```css
        /* Bad */
        .selector {
        padding:15px;
        }
        .selector {padding: 15px;margin: 15px;}

        /* Good */
        .selector {padding:15px;}
        .selector {
        padding: 15px;
        margin: 15px;
        }
        ```
    - 변수명은 카멜 케이스(camelCase), 스네이크 케이스(snakecase) 방식보다 -를 사용하는 케밥 케이스(kebab-case)를 사용한다.
        ```scss
        /* Bad */
        $mainColor: blue;
        $main_color: blue;

        /* Good */
        $main-color: blue;
        ```
    - 선택자 중첩은 최대 3단계까지만 사용
 - airbnb 컨벤션
    - https://github.com/airbnb/javascript
    - https://github.com/airbnb/css
    - https://github.com/CodeMakeBros/css-style-guide
 - class101 컨벤션
    - https://jobs.class101.net/dev/event/secret_codereview