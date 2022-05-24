# 자바스크립트
* HTML은 콘텐츠와 골격, CSS는 웹페이지의 레이아웃, JavaScript는 웹페이지의 동작
    * ES1 (초판, 1997)
    * ES2 (1998)
    * ES3 (1999)
    * ES5 (2009, 엄격모드, 배열메서드(map, filter, forEach 등), JSON 등)
    * ES6 (2015, ECMAScript 2015)
    * ES7 (2016, ECMAScript 2016, 이하 생략)
    * ES6 부터 `const`, `let`, `Promise`, `Arrow function`, `class` 등의 문법들이 대거 추가
    * ECMA-인터내셔널 공식 사이트 : https://www.ecma-international.org/

## 수업 환경 설정
* about:blank

## 자바스크립트 삽입위치
* head, body의 문서 처음, 중간, 끝
* 보통 body의 맨 끝
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="one">hello world 1</h1>
    <h1 onclick="alert('hello')">hello world 2</h1>
    <script>
        document.getElementById('two').innerHTML = 'hello'
    </script>
    
    <h1 id="two">hello world 2</h1>
</body>
</html>
```

## 내부 스크립트와 외부 스크립트
```js
<script>
    console.log('hello')
</script>
```
```js
<script src="test.js"></script>
```

## JavaScript를 출력하는 4가지 방법
1. 문서 내에 요소를 선택하여 출력하는 방법(innerHTML, innerText 등)
2. 문서 내에 직접 출력하는 방법(write 등)
3. 사용자 인터렉션(alert, confirm 등)
4. 콘솔에 찍는 방법(console.log, console.table, console.error 등)

## 코드 구조
1. 문(statement)은 세미콜론으로 구분(세미콜론을 붙이지 않는 곳도 있습니다.)
2. 문은 값, 연산자, 키워드, 명령어, 표현식(값으로 평가, 함수나 key, index를 통한 값의 호출도 표현식) 등으로 구성됩니다.
3. 공백 병합
```js
let x = 10, 
    y = 20, 
    z = 30
console
    .log(
        x,
        y, 
        z,
    )
    // .a()
    // .b()
    // .c()
```
4. 주석
```js
// 한 줄 주석입니다.
/*
여러줄 주석입니다.
*/
```
5. 엄격모드
* ES5에서 최신의 문법들이 많이 추가가 되었는데 기존에 있었던 문법을 변경하는 문법도 나옴
* 이러한 문법들은 기존 코드의 문제를 불러일으킬 수 있기 때문에 use strict라는 지시자를 통해 엄격모드를 활성화 했을 때에만 반영
* class 문법의 경우 엄격 모드가 기본
* 함수별로 엄격모드를 다르게 적용할 수 있으나 혼란을 야기할 수 있습니다.
```js
"use strict";
// 코드
```

# 변수
* 변수 이름 규칙
    * 변수는 숫자로 시작할 수 없다.
    * 띄어쓰기가 안된다.
    * 예약어를 사용할 수 없다.(예약어가 사용 불가능한 것은 아닙니다.)
    * $, _를 제외한 특수문자를 사용하지 않는다.
    * 대소문자를 구분한다.
    * class는 첫 문자를 대문자로, 나머지는 보통 소문자로 시작한다.
* var, let, const
    ```js
    if (true) {
        const testName = 'hojun'
        let testAge = 10
    }
    if (true) {
        var testName2 = 'hojun'
        var testAge2 = 10
    }
    ```
    * var(ES5 이전, 지금 사용 권장 X) : 함수 레벨 스코프, 재선언시 애러 X
    * let(ES5) : 블록 레벨 스코프, 재선언시 애러 O, 콘솔에서는 애러 X, 변경가능한 자료형
    * const(ES5) : 블록 레벨 스코프, 재선언시 애러 O, 콘솔에서는 애러 X, 변경이 불가능한 자료형(상수)

# 연산
* 산술 연산자(+, -, /, *, **, %)
* 할당 연산자(=, +=, -=, /=, *=, **=, %=)
* 논리 연산자(&&, ||, !, !!, &, |)
    * 참 -> true -> 1
    * 거짓 -> false -> 0
    * &&는 곱
    * ||는 합
    * !는 부정
    * 암기코드
    ```js
    for (let x = 0; x < 100; x++) {
        if(x % 3 == 0 && x % 5 == 0){
            console.log(x)
        }
    }
    ```
    ```js
    // 앞에 값이 널이냐를 확인하고 싶은 경우, 단락 회로 평가라고 부릅니다.
    result1 = 10 || 100;
    result2 = 0 && 100;
    result3 = null || 100;
    result4 = null && 100;

    username = 'hojun';
    result5 = username || '유저 이름이 없습니다';

    username = undefined;
    result5 = username || '유저 이름이 없습니다';
    ```