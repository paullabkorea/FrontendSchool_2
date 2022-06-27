const value = [1, 2, 3, 4]
value.map(v => v **2)

value.map(함수의_형태) // 이 함수의 형태가 햇갈리신 것

function 제곱(v){
    return v**2
}
value.map(제곱)

////////////////////
// 화살표 함수에서 ()나, {}가 어떨 경우에 생략이 되는지
////////////////////

value.map(v, i => v ** 2 + i) // error
value.map((v, i) => v ** 2 + i) // 성공
value.map(()=>{})

// 1. 파라미터가 1개일 경우 앞에 소괄호 생략 가능
// 2. 다른 코드 없이 return 값이 하나일 때 뒤에 중괄호 생략 가능

value.map((v, i) => (v ** (2 + i)))
