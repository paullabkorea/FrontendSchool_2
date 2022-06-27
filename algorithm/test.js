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

console.log(answer)