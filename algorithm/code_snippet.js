// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU
//  - 사용 가능 라이브러리는 미리 확인!
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)), Cheat sheet와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 5 ~ 6시간
// 6 ~ 7문제

// 30분씩 4문제
// 2시간씩 2문제

// 자료구조와 알고리즘
// 자료구조 : 데이터를 담는 구조
// 알고리즘 : 문제를 해결하는 방법(절차)
// 빅오(O) : O(1), O(n), O(N**2), O(N**3) 
//           시간복잡도(시간), 공간복잡도(메모리)

// while (1 < a) {
//     s += a
//     a++
// }

// while (1 < a) {
//     s += a
//     a++
//     while (1 < b) {
//         s += b
//         b++
//     }
// }


// 몸풀기 2문제

// https://codingdojang.com/scode/393?langby=javascript#answer-filter-area
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법

Array(10);
let x = Array(10)
x[2] = null
x[3] = undefined
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index)=>value+index);
'.'.repeat(10);
'.'.repeat(10).split('.');
'.'.repeat(9).split('.');
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index)=>value+index)+'';
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8');
'128148123881'.split('8')
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8').length - 1;
(Array(10000).fill(1).map((value, index)=>value+index)+'').split('8').length - 1; // 4000개, 답
'128148123881'.split(/8/g)


///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}

for (let i = 0; i < s.length; i++) {
    console.log(s[i+1] - s[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < s.length; i++) {
    console.log(s[i] - s[i-1]);
}

let s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}
arr

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])

// const zip = a => a.map((v, i) => [v, i]);

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
const zip = (a, b) => a.map((v, i)=>[v, b[i]]);


zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


[1, 3, 4, 8, 13, 17, 20]
[1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
[3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(s.slice(0, s.length-1), s.slice(1))

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
    }
    return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]

//////// 쉬운 풀이 /////////

let s  = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)

// 몸풀기 끝 //



// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

class Stack {
    constructor(){
        this.arr = []
    }

    push(data) {
        this.arr.push(data)
    }

    pop(index) {
        if (index > this.arr.length - 1){
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        return result
    }
    top (){
        return this.arr[this.arr.length-1]
    }

    bottom(){
        return this.arr[0]
    }

    display(){
        return this.arr
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)
s.push(70)
s.pop(2)
console.log(s)