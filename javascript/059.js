/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

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

//VM458:7 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {시·도별(1): '전국', 총인구 (명): 52980961, 1차 접종 누계: 15199919, 2차 접종 누계: 4521785, 1차 접종 퍼센트: 28.6893984426, …}1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, 1차 접종 퍼센트: 28.3641008939, …}2: {시·도별(1): '부산', 총인구 (명): 3438710, 1차 접종 누계: 1092941, 2차 접종 누계: 294736, 1차 접종 퍼센트: 31.783459495, …}3: {시·도별(1): '대구', 총인구 (명): 2446144, 1차 접종 누계: 644230, 2차 접종 누계: 187104, 1차 접종 퍼센트: 26.3365525496, …}4: {시·도별(1): '인천', 총인구 (명): 3010476, 1차 접종 누계: 796739, 2차 접종 누계: 224735, 1차 접종 퍼센트: 26.4655489697, …}5: {시·도별(1): '광주', 총인구 (명): 1471385, 1차 접종 누계: 425263, 2차 접종 누계: 134346, 1차 접종 퍼센트: 28.9022247746, …}6: {시·도별(1): '대전', 총인구 (명): 1480777, 1차 접종 누계: 403102, 2차 접종 누계: 122557, 1차 접종 퍼센트: 27.2223298984, …}7: {시·도별(1): '울산', 총인구 (명): 1153901, 1차 접종 누계: 293467, 2차 접종 누계: 79705, 1차 접종 퍼센트: 25.4325977705, …}8: {시·도별(1): '세종', 총인구 (명): 360907, 1차 접종 누계: 77219, 2차 접종 누계: 23956, 1차 접종 퍼센트: 21.3958166508, …}9: {시·도별(1): '경기', 총인구 (명): 13807158, 1차 접종 누계: 3469297, 2차 접종 누계: 1026579, 1차 접종 퍼센트: 25.1268001713, …}10: {시·도별(1): '강원', 총인구 (명): 1560172, 1차 접종 누계: 548462, 2차 접종 누계: 159193, 1차 접종 퍼센트: 35.1539445651, …}11: {시·도별(1): '충북', 총인구 (명): 1637897, 1차 접종 누계: 516715, 2차 접종 누계: 155060, 1차 접종 퍼센트: 31.5474660495, …}12: {시·도별(1): '충남', 총인구 (명): 2185575, 1차 접종 누계: 685279, 2차 접종 누계: 215670, 1차 접종 퍼센트: 31.3546320762, …}13: {시·도별(1): '전북', 총인구 (명): 1835392, 1차 접종 누계: 651441, 2차 접종 누계: 206179, 1차 접종 퍼센트: 35.4932897169, …}14: {시·도별(1): '전남', 총인구 (명): 1884455, 1차 접종 누계: 716955, 2차 접종 누계: 236318, 1차 접종 퍼센트: 38.0457479749, …}15: {시·도별(1): '경북', 총인구 (명): 2691891, 1차 접종 누계: 872654, 2차 접종 누계: 263155, 1차 접종 퍼센트: 32.4178802188, …}16: {시·도별(1): '경남', 총인구 (명): 3407455, 1차 접종 누계: 1000010, 2차 접종 누계: 297667, 1차 접종 퍼센트: 29.3477096543, …}17: {시·도별(1): '제주', 총인구 (명): 697578, 1차 접종 누계: 194954, 2차 접종 누계: 58947, 1차 접종 퍼센트: 27.9472689792, …}length: 18[[Prototype]]: Array(0)


const snack = () => Promise.resolve('와, 맛있겠다!') // 4번

async function mySnack() {
	console.log('치즈 케이크 주세요!') // 3번
    const res = await snack() // 4번
    console.log(res) // 6번
}

console.log('주문하시겠어요?') // 1번
mySnack(); // 2번
console.log('주문하신 케이크 나왔습니다!') // 5번

// VM572:9 주문하시겠어요?
// VM572:4 치즈 케이크 주세요!
// VM572:11 주문하신 케이크 나왔습니다!
// VM572:6 와, 맛있겠다!


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