////////////////////// section - 1 //////////////////////

// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

words   : ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
queries : ["fro??", "????o", "fr???", "fro???", "pro?"]
result  : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 4


'frodo'.match(/fro../g)
'frodod'.match(/fro../g)
'aafrodod'.match(/fro../g)
'aafroddddod'.match(/fro../g)
'aafaraoddddod'.match(/fro../g)


const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodo')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodod')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('aafaraoddddod')

////////////////////// section - 2 //////////////////////


let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?', '.') // 일부러 사용하는 겁니다.
q

const 패턴 = new RegExp(q, 'g')
console.log(패턴.test(words[0]))
console.log(패턴.test(words[1]))
console.log(패턴.test(words[2]))
console.log(패턴.test(words[3])) // frozen만 true입니다.
console.log(패턴.test(words[4]))
console.log(패턴.test(words[5]))


패턴.test('afrozena') // 길이 체크를 해야 한다는 것을 캐치!


////////////////////// section - 3 //////////////////////

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?', '.')
const 패턴 = new RegExp(q, 'g')
let answer = []

for (s of words) {
    console.log(패턴.test(s))
}

/// - ///

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    const 패턴 = new RegExp(q, 'g')
    let 매칭카운트 = 0
    for (s of words){
        let 패턴매칭여부 = 패턴.test(s)
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}
// [2, 2, 3, 1, 0]
// [3, 2, 4, 1, 0]

/// - ///

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    const 패턴 = new RegExp(q, 'g')
    let 매칭카운트 = 0
    for (s of words){
        let 패턴매칭여부 = 패턴.test(s)
        console.log(rawQueries, s, 패턴, 패턴매칭여부, s.length, rawQueries.length)
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}

/// - ///

const 패턴 = new RegExp('fro..', 'g')
패턴.test('front')

/// - ///

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    const 패턴 = new RegExp(q, 'g')
    let 매칭카운트 = 0
    for (s of words){
        let 패턴매칭여부 = 패턴.test(s)
        console.log(rawQueries, s, 패턴, 패턴.test(s), 패턴매칭여부, s.length, rawQueries.length)
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}

/// - ///

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    let 매칭카운트 = 0
    for (s of words){
        const 패턴 = new RegExp(q, 'g')
        let 패턴매칭여부 = 패턴.test(s)
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}

// [3, 2, 4, 1, 0]
// [3, 2, 4, 1, 0]


////////////////////// section - 4 //////////////////////

// 런타임 애러 -> 우리는 '실패 (0.03ms, 30.1MB)'가 뜨거나 '성공 (0.03ms, 30.1MB)'이 떠야 합니다.
let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replaceAll('?', '.')
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

// error
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replaceAll('?', '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}


// 정상 작동
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

// replaceAll이 문제구나! -> 
// 프로그래머스의 Node Version이 12버전, ReplaceAll은 15버전
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replace(/\?/g, '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}


////////////////////// section - 5 //////////////////////

function solution(words, queries){
    let answer = [];

    for (let i = 0; i < queries.length; i++) {
        const rawQueries = queries[i];
        const q = rawQueries.replace(/\?/g, '.');
        let 매칭카운트 = 0;
        
        for (let i = 0; i < words.length; i++){
            const s = words[i];
            const 패턴 = new RegExp(q, 'g');
            const 매칭패턴 = 패턴.test(s);
            if ((매칭패턴) && (s.length === rawQueries.length)){
                매칭카운트 += 1;
            }
        }
        answer.push(매칭카운트);   
    }
    return answer;
}


function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replace(/\?/g, '.')
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

////////////////////// section - 6 //////////////////////
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 링크드 리스트, '트라이 알고리즘'을 사용해야겠다!

패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1

// {
//     value : 'f'
//     count : 1
//     {
//         value : 'r'
//         count : 1
//         {
//             value : 'o'
//             count : 1
//             {
//                 value : 'd'
//                 count : 1
//                 {
//                     value : 'o'
//                     count : 1
//                 }
//             }
//         }
//     }
// }


패턴 : 'fro..'
'frodo', 'front'
{'f' : 다음object} count : 2
{'r' : 다음object} count : 2
{'o' : 다음object} count : 2 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1


// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...

let 트라이 = []
for (let i = 0; i < 10; i++) {
    let insertArray = []
    for (let j = 0; j < i + 1; j++) {
        insertArray.push({})
    }
    트라이.push(insertArray)
}

/// - ///

function solution (words){
    let 트라이 = []
    for (let i = 0; i < 10; i++) {
        let insertArray = []
        for (let j = 0; j < i + 1; j++) {
            insertArray.push({})
        }
        트라이.push(insertArray)
    }
    return answer
}

solution(['frodo', 'front'])


/// - ///

function solution(words){
    let 트라이 = []
    for (let i = 0; i < 10; i++) {
        let insertArray = []
        for (let j = 0; j < i+1; j++) {
            insertArray.push({})
        }
        트라이.push(insertArray)
    }

    for (const 각각의문자열 of words) {
        for (const index in 각각의문자열) {
            let 개별문자 = 각각의문자열[index]
            if (개별문자 in 트라이[각각의문자열.length - 1][index]) {
                트라이[각각의문자열.length - 1][index][개별문자] += 1
            } else {
                트라이[각각의문자열.length - 1][index][개별문자] = 1
            }
        }
    }
    return 트라이
}


solution(['frodo', 'front'])
solution(['frodo', 'front', 'prodo'])
solution(['frodo', 'front', 'prodo'], ['fro??'])


////////////////////// section - 7 //////////////////////

// Tree로 해결하는 방법(대부분의 검색 효율성은 Tree 문제)
// 단어 문제이기 때문에 트라이라는 알고리즘 선택

// 하나의 레벨(층) 단위의 object 생성
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 0
    }
}

// 하나의 레벨(층) 단위의 object 생성
// 레벨1 노드
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 1 //문자열의 개수
    }
}

// 레벨2 'f' 연결 노드
{
    'r' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 2
    }
}

// 레벨3 'r' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 3
    }
}

// 레벨4 'o' 연결 노드
{
    'd' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    },
    'n' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    }
}

// 레벨5 'd' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

// 레벨5 'n' 연결 노드
{
    't' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

/// - ///

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        let current = this.root
        current.count += 1
        for (const s of word) {
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []
    
    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    console.log(트라이배열)
    console.log(트라이역배열)

    return answer
}

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

solution(words, queries)

/// - ///

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        let current = this.root
        current.count += 1
        for (const s of word) {
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []
    
    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    // console.log(트라이배열)
    // console.log(트라이역배열)

    for (const query of queries) {
        if (!트라이배열[query.length]){
            answer.push(0)
            continue
        }

        let count

        if(query[0] !== '?'){
            count = 트라이배열[query.length].search(query)
        } else {
            count = 트라이역배열[query.length].search([...query].reverse().join(''))
        }
        answer.push(count)
    }

    return answer
}

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

solution(words, queries)