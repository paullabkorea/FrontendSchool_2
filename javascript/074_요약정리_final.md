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
* 비교 연산자(>, >=, <, <=, ==, !=, ===, !==)
* 단항 산술 연산자(++x, x++, --x, x--)
* nullish 병합 연산자(??)
    ```js
    let result1;
    let result2 = result1 ?? 100;
    
    let result3 = 10;
    let result4 = result3 ?? 100;

    let result5 = null;
    let result6 = result5 ?? 100;
    ```
* typeof 연산자
* 프로퍼티 접근 연산자
    1. 마침표 프로퍼티 접근 연산자
    2. 대괄호 프로퍼티 접근 연산자
* 관계 연산자
    * 키만 가지고 판단
    ```js
    10 in [10, 20, 30] // false
    1 in [10, 20, 30] // true
    1 in 'hello' // error
    'name' in {'name':'hojun', 'age':10} //true
    'length' in [10, 20, 30]; // true
    ```

# 변수의 형
## 변수(타입, typeof로 확인 가능)
- 원시타입(primitive types) : number, string, boolean, null, undefined, symbol(ES6 추가, 변경 불가능한 유일한 값)
- 참조타입(reference types) : object(object, array, map, set), function

- Number(숫자)
    * 형태 : 10, 10.123, -10
    * 호출 : 변수명
    * 메서드 : 
        * 10.toString()는 안됩니다. 이유는 무엇일까요? 소수점 때문에 그렇습니다.(JavaScript의 parsing때문이고, 아는 분이 많지는 않습니다.)
        * (10).toString()와 변수명.toString()은 가능합니다.
        * num.toFixed()
    * Number()
    * parseInt() - 권고, parseFloat()
    ```js
    parseInt('1hello world') // 1
    Number('hello world') // NaN
    ```
    * Math
        * Math.PI
        * Math.max()
        * Math.min()
        * Math.floor()
        * Math.round()
        * Math.random()
        * Math.abs()
        * Math.sqrt()
        * Math.pow()
    * NaN
    * Infinity, -Infinity

- String(문자열)
    * 형태 : 'abcde', "abcde", `abcde ${변수명}`
    * 호출 : 변수명, 변수명[0] (변수명[index], 호출은 할 수 있지만 개별 값 변경 불가)
    * 메서드 : 
        * str.length
        * str.indexOf()
        * str.lastIndexOf()
        * str.includes()
        * str.slice()
        * str.splice()
        * str.split()
        * str.substring()
        * str.substr()
        * str.toLowerCase()
        * str.toUpperCase()
        * str.trim()
        * str.replace()
        * str.concat()
        * str.repeat()
        ```js
        'hello'.repeat(100)
        '0'.repeat(100)
        '5'.repeat(100).split('').map(Number)
        ```

- Boolean(논리값)
    * 형태 : true, false
    * 호출 : 변수명
    * 어떤 것이 true이고 어떤 것이 false인지 판단할 수 있어야 합니다.(truthy, falsy -> 우리가 매우 깊이 다뤘던 내용입니다.)

- undefine : undefind
    * 형태 : let a, console.log(a)

- null : object
    * 형태 : let a = null

- Array(배열) : object
    * 형태 : ['하나', '둘', '셋'], [100, 200, 300],
    * 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index], 개별값 변경 가능)
    * Array
    * 메서드 : 
        * length
        * forEach
        * map
        * filter
        * push / pop - mutable
        * slice - immutable
        * splice - mutable
        * reduce - immutable
        * join
        * indexOf
        * includes
        * find
        * concat
        * every
        * some
        * fill — mutable
        * shift — mutable
        * unshift — mutable
        * reverse — mutable
        * sort — mutable
    ```js
    Array(100).fill(0)
    Array(100).fill('hello')
    Array(100).fill('hello'.repeat(2))
    Array(100).fill(0).map((value, index)=> value + index)
    ```

- Object(객체)
    * 형태 : 
        ```js
        {
            "지역이름": "전국", // key : value(2개의 집합을 가리켜 객체 프로퍼티)
            "확진자수": 24889,
            "격리해제수": 23030,
            "사망자수": 438,
            "십만명당발생율": 48.0
        }
        {
            'one' : 1,
            'o n e' : 1,
            '1 one' : 1
        }
        {
            one : 1,
            o n e : 1, // error
            1 one : 1 // error
        }
        let x=1, y=2, z=3
        let object = {x, y, z} // {x: 1, y: 2, z: 3}
        ```
    * 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (변수명.key, 변수명[key])
    * 수정, 삭제 : 
        - 수정 : value['hello'] = 'world', value['hello'] = null
        - 삭제 : delete value['hello']는 추천하지 않음(메모리 상에 'world'가 남아있음, value['hello'] = null을 권장)
    * 속성 : 
        ```js
        console.log(Object.getOwnPropertyDescriptor(person, 'name'));
        Object.getOwnPropertyDescriptors(person)
        // {10: {…}, name: {…}, age: {…}, height: {…}, weight: {…}, 이력: {…}}
        // value: '이호준',
        // writable: true, // 변경 가능 여부, 기본값 false
        // enumerable: true, // 열거(for) 가능 여부, 기본값 false
        // configurable: true // 재정의 가능 여부, 기본값 false
        ```
    * 메서드 : Object.keys, Object.values, Object..entries
    ```js
    //변수명.keys()와 같은 형식은 안됩니다.
    x.keys()
    ```

- Map : object
    * 메서드 : set, get, has, delete, size
    ```js
    let map = new Map()
    map.set('one', 100)
    map.set('two', 200)
    map.set('three', 300)
    map.set('four', [10, 20])
    map.set(5, [100, 200])
    map.set([1, 2], [100, 200])
    map.get(5)

    let human = {
        name:'hojun3',
        age:30,
        local:'jeju'
    }
    let hojun = new Map(Object.entries(human))
    ```

- Set : object
    * 메서드 : add, delete, has, size
    * 중복을 허락하지 않는다
    * 합집합, 교집합, 차집합 등에 메서드가 있진 않지만, 이러한 합집합, 교집합, 차집합을 구현하기 위해 Set을 사용하는 경우가 많습니다.
    ```js
    let set = new Set()
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(2);
    set.add(3);
    set.add(3);
    set.add(3);
    set.add(3);
    set.size
    // let set = new Set([1, 2, 3, 3, 3, 3])
    // let set = new Set('helllllllllo')
    ```
    ```js
    let a = new Set([1, 2, 3])
    let b = new Set([3, 4, 5])
    const 합집합 = new Set([...a, ...b]);
    const 교집합 = new Set([...a].filter(x => b.has(x)));
    const 차집합1 = new Set([...a].filter(x => !b.has(x)));
    const 차집합2 = new Set([...b].filter(x => !a.has(x)));
    ```

# 조건문과 반복문
## 조건문
- if
- else if
- else
- switch
    ```js
    if(false){
    console.log('hello 1')
    } 
    if(false) {
        console.log('hello 2')
    }
    if(true) {
        console.log('hello 3')
    }
    if(true) {
        console.log('hello 4')
    }
    ```
    ```js
    if(false){
        console.log('hello 1')
    } 
    else if(false) {
        console.log('hello 2')
    }
    else if(true) {
        console.log('hello 3')
    }
    else if(true) {
        console.log('hello 4')
    } 
    else {
        console.log('!!')
    }
    ```
    ```js
    let result = true ? 1 : 100;
    ```

## 반복문
- for
- for in
- for of
- while
- do while
- forEach
- break
- continue

```js
//예제
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```
```js
//예제
let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
}
```
```js
//예제
let a = [10, 20, 30, 40];
for (let i in a) {
    console.log(i);
}
let a = {'one':1, 'two':2};
for (let i in a) {
    console.log(i);
}
```
```js
//예제
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
```
```js
//예제
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)
```
```js
//예제
let a = [10, 20, 30, 40];
a.forEach(e => console.log(e**2));
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
```


# 함수와 클래스
## 함수
- 함수 표현식과 함수 선언식
    ```js
    let 함수표현식 = function(){} // 호이스팅 X
    function 함수선언식(){} // 호이스팅 O
    ```
- 함수(파선아실)
    * 여기서 x, y를 보통 한국에서는 인자
    * 매개변수(파라미터, parameter) : x, y
    * 전달인자(아규먼트, argument) : 3, 5
    * 사용이유
        1. 재사용성
        2. 아키텍처 파악
        3. 유지보수
        ```js
        function 땅다지기(){}
        function 시멘트작업(){}
        function 철근(){}
        function 벽돌(){}
        function 지붕(){}
        땅다지기()
        시멘트작업()
        철근()
        벽돌()
        지붕()
        ```
    * 예제
    ```js
    function add(x, y){
        return x + y;
    }

    add(3, 5)

    function add(a = 100, b = 200) {
        console.log(a, b);
        return a + b;
    }

    add(10, 20);
    // 30
    add(10);
    // 210
    add();
    // 300
    add(b=300) // a에 입력
    // 500
    add(undefined, 300);
    // 400

    function add({ a = 100, b = 200 }) {
        console.log(a+b);
    }

    add({b: 300}); // 400
    ```

- 콜백함수
    ```js
    function add(x, y) {
        return x + y;
    }

    function mul(x, y) {
        return x * y;
    }

    function cal(a, b){
        return a(10, 10) + b(10, 10);
    }

    cal(add, mul);
    ```

    * 화살표 함수를 콜백함수로 사용했을 경우의 장단점
        * 장점 : 네이밍을 안해도 됩니다.
        * 장점 : 다른 곳에서 사용할 수가 없다.
        * 단점 : 콜백지옥에 빠질 수가 있습니다.
    ```js
    function cal(a, b){
        return a(10, 10) + b(10, 10);
    }

    cal((a, b) => a + b, (a, b) => a * b);
    ```


- 화살표함수
    ```js
    function 제곱(x) {
        return x**2
    }

    // 함수표현식, 호이스팅 X
    let 제곱 = x => x**2;

    function f(a, b) {
        let z = 10
        let result = z + a + b
        return result
    }

    // 함수표현식, 호이스팅 X
    let f = (a, b) => {
        let z = 10
        let result = z + a + b
        return result
    };
    ```


- 기명 함수
    ```js
    // 기명 함수
    let aa = function sum(x, y) {
        return x + y
    }

    // 익명 함수인것 같지만 바뀜
    let bb = function(x, y) {
        return x + y
    }
    // ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
    let cc = (x, y) => x + y;
    ```

- 익명 함수
    ```js
    console.dir(function (x, y) {return x + y;})
    ```

## 클래스
* 클래스 - 붕어빵 찍는 틀, 공장
* 인스턴스 - 붕어빵, 제품
```js
class Human {
    constructor() {}
    // 인스턴스 메서드, 인스턴스 프로퍼티 메서드, 프로토타입 메서드
    a() {}
    // 클래스 메서드, 클래스 프로퍼티 메서드, 정적 메서드
    static b() {}
}

hojun = new Human('호준')

typeof hojun // object
typeof Human // function

// getter - 획득
// setter - 설정
// # = private 필드
class Student {
    subject = 'javascript study'
    #level;
    constructor(level, name, skill) {
        this.#level = level;
        this.name = name;
        this.skill = skill;
    }
    get level() {
        // hojun.level로 출력
        return this.#level;
    }
    set level(level) {
        // hojun.level = 10
        this.#level = level;
    }
    attack(){
        console.log('파이어볼!')
    }
}

class Mento extends Student {
    codeReview() {
        console.log('코드리뷰를 진행합니다.');
    }
}

let hojun = new Student(999, '호준', ['python', 'js', '...생략...']);

let hojun2 = new Mento(999, '호준', ['python', 'js', '...생략...']);

```


# 예외처리, 전개표현식, 정규표현식, 리터럴 등
## 예외처리
```js
try {
   // 코드
} catch(e) {
   // 코드
} finally {
   // 코드
}
//throw new Error(message);
//throw new SyntaxError(message);
//throw new ReferenceError(message);
```


## 전개구문 사용
* 전개구문 사용 예제
    ```js
    function f(...x){
        return x;
    }

    f(1, 2, 3, 4, 5)
    ```

    ```js
    let arr1 = [1, 2, 3, 4];
    let arr2 = [10, 20, 30, 40];
    let arr3 = [100, ...arr1, 200, ...arr2, 300]
    let arr4 = [100, arr1, 200, arr2, 300]
    console.log(arr3)
    Math.max(...arr3);
    let [a, b, c, ...d] = [10, 20, 30, 40, 50, 60, 70]
    ```

## 정규표현식
* 특정 패턴을 찾아낼 때 사용
* 연습사이트 : https://regexr.com/5nvc2
```js
// 0 문자 제거
let s = '010100020201020304812123';
s.replace(/[^1-9]/g,"")
'11221234812123'

// 앞 뒤 공백 제거(캐릭터 클래스 `\s`사용)
s = '   010100020201020304812123    '
s.replace(/^\s+|\s+$/g,'')
'010100020201020304812123'

// 문자열 내 공백 제거
s = '  01010002020   102030  4812123  ';
s.replace(/\s/g,'')
'010100020201020304812123'

// 개행 제거
s = `
a
b
c
d
`
'\na\nb\nc\nd\n'
s.replace(/\n/g,'')
'abcd'

s = "hello world HELLO WORLD";
s.match(/hello/gi);

s1 = '010-5000-2000'
s2 = '010 5000 2000'
s3 = '010~5000!2000'
s4 = '010!!5000!!2000'
s5 = '01050002000'

s1.split(/-/g)

// hint
// s.split(/([a-z])([0-9])/g)
// s.split(/([a-z]{3})/g)

s1.split(/([0-9]{3})[- ~!]*([0-9]{4})[- ~!]*([0-9]{4})/)

/*
- `^` : 문자열의 시작
- `$` : 문자열의 종료. 옵션에 따라 문장의 끝 또는 문서의 끝에 매치된다.
- `.` : 임의의 한 문자
- `[]`: 문자 클래스. 문자 클래스 안에 들어가 있는 문자는 그 바깥에서 하나의 문자로 취급된다.
- `^` : 문자 클래스 내에서 ^는 not
- `-` : ex) a-z는 a에서 z까지의 문자
- `|` : or를 나타냄
- `?` : 앞 문자가 없거나 하나 있음
- `+` : 앞 문자가 하나 이상임
- `*` : 앞 문자가 0개 이상임
- `{n,m}` : 앞 문자가 `n`개 이상 `m`개 이하. `{0,1}` 은 `?`와 같은 의미다.
- `{n,}` : 앞 문자가 `n`개 이상. 위의 형태에서 `m`이 생략된 형태이다. `{0,}` 이면 `*`와 같고 `{1,}` 이면 `+`와 같은 의미이다.
- `{n}` : 앞 문자가 정확히 `n`개. `{n,n}` 과 같은 의미이다.
- `()` : 하나의 패턴구분자 안에 서브 패턴을 지정해서 사용할 경우 괄호로 묶어주는 방식을 사용한다.
- `\s` : 공백문자
- `\b` : 문자와 공백 사이를 의미한다.
- `\d` : 숫자 [0-9]와 같다.
- `\t` : 탭문자
- `\w` : 단어 영문자+숫자+_(밑줄) [0-9a-zA-Z_]문자 이스케이프는 대문자로 적으면 반대를 의미한다.
[a-z] : a ~ z 사이의 문자를 찾음
[1-9] : 1 ~ 9 사이의 문자를 찾음
[abc] : a, b, c중 하나를 찾음
[^abc] : a, b, c를 제외한 문자를 찾음
.z : 아무 문자 하나를 . 기호로 찾으며 z로 끝남을 의미
a+ : a가 1개 이상을 의미함
a* : a가 0개 또는 그 이상을 의미함
s : 공백 문자를 찾음(스페이스, 탭 등), 대문자의 경우 아닌 문자를 찾음
d : 숫자를 찾음, 대문자의 경우 아닌 문자를 찾음
w : 알파벳 영문과 숫자와 언더바 _ 기호를 찾음, 대문자의 경우 아닌 문자를 찾음
t : 탭 공간을 찾음
g : 검색범위를 전역으로 확장
i : 대소문자를 구분하지 않음
gi : 검색 범위를 전역으로 확대하면서 대소문자를 구분하지 않음
m : 여러줄을 동시에 매칭함
*/
```

## 리터럴
* 리터럴은 약속된 기호를 사용해 값을 생성하는 것입니다. 예를 들어 문자를 생성하기 위해서는 작은 따옴표, 큰 따옴표, 템플릿 리터럴 중 하나를 사용하죠. 배열을 생성하려면 대괄호를, 오브젝트를 생성하려면 중괄호를 사용해야 합니다.
* new String(), new Array(), new Object()의 형식으로 만들어야 하는 것을 약속된 기호로 만들 수 있게 해준 것입니다.
* new Object() 의 리터럴 표현이 {}, new Number(1) 의 리터럴 표현이 1, new String("hello") 의 리터럴 표현이 "hello" 입니다.
* new Object()는 생성자 함수를 이용한 것이죠.
* 정규표현식 리터럴
```js
let x = /[a-zA-Z0-9]/g
```
* 2진수, 8진수, 16진수 리터럴
```js
let a = 0b1001 // a == 9
let b = 0o1001 // b == 513
let c = 0x1001 // c == 4097
```

## 사용자와 상호작용
* prompt('hello')
* comfirm('hello')
* alert('hello')

## 구조분해할당
* 예제
    ```js
    for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
        console.log(i, j);
    }
    ```
    ```js
    let x = 10, y = 20
    [x, y] = [y, x]
    
    let {a, b} = {b:'hello', a:'world'}
    ```
* 다른 언어에서는 언패킹이라고 부르기도 합니다.


## 동기와 비동기
* js는 일을 처리할 수 있는 thread가 1개, 싱글쓰레드라고 함.
* 하지만 모든 일을 여러명이 처리할 수 없다면 항상 기다려야 하는 문제가 생길 수도 있고, 무한대기에 빠질 수도 있음.

```js
// 순서대로 한다면 덧셈, 곱셈, hello world 순이지만
// 비동기이기 때문에 hello world, 곱셈, 덧셈 순이 됨
function 덧셈(a, b, 콜백함수) {
    setTimeout(()=>{
        let result = a + b
        console.log(result)
    }, 2000)
}
function 곱셈(a, b, 콜백함수) {
    setTimeout(()=>{
        let result = a * b
        console.log(result)
    }, 1000)
}

덧셈(20, 30)
곱셈(2, 6)
console.log('hello world')
```
* Promise
    * pending(대기상태) - resolve(해결) - fulfilled(성공)
    * pending(대기상태) - reject(거부) - rejected(실패)
```js

new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)


let p = new Promise(function(resolve, reject) {
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
});


p
//Promise {<fulfilled>: undefined}

let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});


let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    throw Error("에러 발생!")
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});


let p = new Promise(function(resolve, reject) {
    resolve('hello world');
    //reject('hello world');
}).then(메시지 => {
    alert(메시지);
    throw Error("에러 발생!")
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});


let p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});
console.log('hello world');
console.log(p);
//VM92:4 hello world
//VM92:5 Promise {<pending>}

// 3초 후
console.log(p)
//</pending>/VM139:1 Promise {<fulfilled>: '끝남!'}


let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("끝남!"), 10000);
});
console.log('hello world');
console.log(p);
//VM180:1 Promise {<pending>}

console.log(p)
// VM184:1 Promise {<pending>}

console.log(p)
// VM184:1 Promise {<pending>}

console.log(p)
// VM184:1 Promise {<pending>}

console.log(p)
//VM204:1 Promise {<fulfilled>: '끝남!'}


// 실행하지 마세요. pending에 빠집니다.
//let p = new Promise(function(resolve, reject) {
//  console.log('hello world')
//}).then(d => console.log(d)).catch(e => console.log(e));


let snack = async function() {
	return "cake!";
};

snack
// async ƒ () {
// 		return "cake!";
// }
snack()
//Promise {<fulfilled>: 'cake!'}

const f = fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
f
//Promise {<fulfilled>: Response}
const f = fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();

    })
    .then(function(json) {
        console.log(json);
        return json
    })

const f = fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(d => d.json())
    .then(d => console.log(d))

//VM458:7 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {시·도별(1): '전국', 총인구 (명): 52980961, 1차 접종 누계: 15199919, 2차 접종 누계: 4521785, 1차 접종 퍼센트: 28.6893984426, …}1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, ...중략...


/////////
// 동기처리 //

setTimeout(()=> {
    console.log('5초 끝!')
}, 5000);

setTimeout(()=> {
    console.log('10초 끝!')
}, 10000);

function cook(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
    await cook(3000);
    return '케이크';
};

const myCoffee = async () => {
    await cook(2000);
    return '커피';
};
const myCookie = async () => {
    await cook(5000);
    return '쿠키';
};

async function asyncProcess() {
    const cake = await myCake();
    console.log(cake);
    const coffee = await myCoffee();
    console.log(coffee);
    const cookie = await myCookie();
    console.log(cookie);
}

asyncProcess(); 



///////////
// 비동기처리 //

setTimeout(()=> {
    console.log('5초 끝!')
}, 5000);

setTimeout(()=> {
    console.log('10초 끝!')
}, 10000);

function cook(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
    await cook(3000);
    return '케이크';
};

const myCoffee = async () => {
    await cook(2000);
    return '커피';
};
const myCookie = async () => {
    await cook(5000);
    return '쿠키';
};

async function promiseProcess() {
    const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
    console.log(results);
}

promiseProcess();

// 질의응답
async function a() {
    console.log(1);
    setTimeout(()=> {
        console.log(2)   
    }, 0);
    console.log(3)
}
a()
// 1, 3, 2

async function a() {
    console.log(1);
    await setTimeout(()=> {
        console.log(2)
    }, 1000);
    console.log(3)
}

a()
// 1, 3, 2

// why? await은 promise 앞에서만 사용
// await [[Promise 객체]] 의 형식
```

* fetch
    * https://ko.javascript.info/fetch 
    * Fetch는 비동기 네트워크 통신을 구현하기 위해 사용하는 Web API이다.
    * 자바스크립트를 이용하여 브라우저가 서버에게 비동기적으로 데이터를 요청하고, 응답 받은 데이터를 동적으로 페이지 렌더링 하는 방식을 Ajax(Asynchronous Javascript and XML)라고 하고 대표적인 Web API로는 XMLHttpRequest 객체, JQuery, fetch 등이 있다.
        * response.text()
        * response.json()
        * response.formData() - FormData 객체 반환
        * response.blob() - Blob(타입이 있는 바이너리 데이터) 형태 반환
            * Blob(Binary Large Object)은 이미지 등과 같은 멀티미디어 데이터를 다룰 때 사용하는 데이터 형식
            * https://heropy.blog/2019/02/28/blob/ 블로그 글 추천
        * response.arrayBuffer() – ArrayBuffer(바이너리 데이터를 로우 레벨 형식으로 표현한 것) 형태 반환
    
```js
fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then(json => console.log(json))

async function getUserEmail(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await(response.json());
    const email = user.email;
    console.log(email)
}

async function printImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg= await(response.blob());
    
    //blob을 담을 img 태그를 만든다.
    const img = document.createElement('img');
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img);
    //img 태그의 주소를 설정한다.
    img.src = URL.createObjectURL(blobImg);
}
printImg()

fetch('http://35.76.53.28:8080/mall')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        const imgURL = 'http://35.76.53.28:8080/' + json[0]['thumbnailImg']
        console.log(imgURL)
        const img2 = document.createElement('img');
    	//html body에 위에서 만든 img 태그를 삽입한다.
    	document.body.append(img2);
        img2.src = imgURL
    })


/*
async function request() {
const response = await fetch('url 기입',
{
    method: "GET", //POST, DELETE, PUT
    headers: {
    "Content-type": "콘텐츠 형태",
    //application/json, text/plain 등
    },
    body: JSON.stringify(
        서버에 전달할 데이터
    );
});
const data = await response.json();
console.log(data);
}
request();
*/
```


# DOM
DOM을 탐색해봅시다.
```js
// body>h1{hello world}+p{hello}+div>h1{hello world}+p{hello}
document.body.childNodes
document.body.childNodes[1] = 'hello hojun'
document.body.childNodes[3].childNodes[1]
```
```js
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");

// target 요소를 생성합니다.
document.createElement(target); 

// target 텍스트를 생성합니다.
document.createTextNode(target);

// target 요소를 element의 자식으로 위치합니다.
element.appendChild(target);    

// element의 target 자식 요소를 제거합니다.
element.removeChild(target);    
```

```js
// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

var span = document.createElement("span");
var sibling = document.getElementById("childElement");
var parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);


const myP = document.querySelector("p");
myP.innerHTML = "<strong>I'm Strong!!</strong>";

///////////////

const cont = document.querySelector(".cont");
console.log(cont.firstElementChild);  // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild);   // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling);    // 이전 형제노드를 찾습니다.
console.log(cont.children);           // 모든 직계자식을 찾습니다.
console.log(cont.parentElement);      // 부모 요소를 찾습니다.


// 브라우저의 기본 이벤트 동작을 취소
event.preventDefault();
```