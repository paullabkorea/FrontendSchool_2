
try {
   // 코드
} catch(e) {
   // 코드
} finally {
   // 코드
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 10;
} catch(e) {
   // 코드
} finally {
   // 코드
}

try {
    let x = 10;
    let y = 10;
    console.log(x + y)
} catch(e) {
    console.log(e)
} finally {
    console.log('end')
}


try {
    let x = 10;
    let y = 10;
    console.log(x + y + z)
} catch(e) {
    console.log(e)
} finally {
    console.log('end')
}


try {
    let x = 10;
    let y = 10;
    console.log(x + y + z)
} catch(e) {
    console.error(e)
} finally {
    console.log('end')
}

try {
    let x = 10;
    let y = 10;
    console.log(x + y + z)
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end')
}

try {
    let x = 10;
    let y = 10;
    throw new Error('애러야!')
    console.log(x + y + z)
    
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end')
}

try {
    let x = 10;
    let y = 10;
    throw new SyntaxError('문법 애러야!')
    console.log(x + y + z)
    
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end')
}

try {
    let x = 10;
    let y = 10;
    throw new SyntaxError('문법 애러야!')
    console.log(x + y + z)
    
} catch(e) {
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console.log('end')
}

fetch('https://jsonplaceholder.typicode.com/users/3')
// Promise {<pending>}
fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then(json => console.log(json))
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(d => d.json())
    .then(d => console.log(d))

const f = fetch('https://jsonplaceholder.typicode.com/users/3')
f

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then(json => console.log(json.username))

async function getUserEmail(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await(response.json());
    const email = user.email;
    console.log(email)
}
getUserEmail(3)
// VM1484:5 Nathan@yesenia.net
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(json))

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(
        json.filter(s => s['시·도별(1)']))
    )

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(
        json.filter(s => s['시·도별(1)'] == '전국'))
    )

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(
        json.find(s => s['시·도별(1)'] == '전국'))
    )
    
    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(
        json
            .find(s => s['시·도별(1)'] == '전국'))
            .map(s => s['2차 접종 퍼센트'])
    )

    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(
        json
            .find(s => s['시·도별(1)'] == '전국'))['2차 접종 퍼센트']
    )


    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.dir(
        json.find(s => s['시·도별(1)'] == '전국'))
    )


    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        let 지역 = json.find(s => s['시·도별(1)'] == '전국')
        console.log(지역)
    })
    )


    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        let 지역 = json.find(s => s['시·도별(1)'] == '전국')
        console.log(지역)
    })


    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        let 지역 = json.find(s => s['시·도별(1)'] == '전국')
        console.log(지역)
        console.log(지역['1차 접종 누계'])
    })


    fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        let 지역 = json.find(s => s['시·도별(1)'] == '전국')
        console.log(지역)
        console.log(지역['1차 접종 누계'])
        console.log(지역['2차 접종 퍼센트'])
    })


    async function 접종퍼센트(지역){
        const response = await fetch(`https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json`);
        const data = await(response.json());
        const 접종퍼센트 = json.find(s => s['시·도별(1)'] == 지역)['2차 접종 퍼센트'];
        console.log(접종퍼센트)
    }
    접종퍼센트('전국')

    async function 접종퍼센트(지역){
        const response = await fetch(`https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json`);
        const data = await(response.json());
        const 접종퍼센트 = data.find(s => s['시·도별(1)'] == 지역)['2차 접종 퍼센트'];
        console.log(접종퍼센트)
    }
    접종퍼센트('전국')

    fetch('http://35.76.53.28:8080/mall')
        .then(function(response) {
            console.log(1);
            return response.json();
        })
        .then(json => {
            console.log(json)
        })

    const txt = fetch('https://reqres.in/api/products/3')
        .then(response => response.text())
        .then(text => console.log(text))
    
    async function getImg(){
        const response = await fetch(`https://picsum.photos/200`);
        const blobImg = await(response.blob());
	    console.log(blobImg);
    }
    getImg()

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
        console.log(json[0]['thumbnailImg'])
    })

    fetch('http://35.76.53.28:8080/mall')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        console.log('http://35.76.53.28:8080/' + json[0]['thumbnailImg'])
    })

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

async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "GET",
    });
    const data = await response.json();
    console.log(data);
}
get();

async function post() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "POST",
        headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ //문자열로 변환하지 않으면 에러발생
                "title": "오늘의 간식",
                "body": "고소미",
                "userId": 3
            })
    }
        );
    const data = await response.json();
    console.log(data);
}
post();

async function post() {
    const response = await fetch('https://httpbin.org/post',
    {
        method: "POST",
        headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "제목" : "게시물 제목",
                "게시물내용" : "게시물 내용",
                "게시물생성자" : "hojun",
                "게시물생성날짜" : "0000",
            })
    }
        )
    const data = await response.json();
    console.log(data)
}
post()

async function Delete() {
  const response = await fetch('https://httpbin.org/delete?noticeNumber=3',
  { method: "DELETE"}
	);
  const data = await response.json();
  console.log(data);
}
Delete();

async function put() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
  {
    method: "PUT",
	  headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
			"title" : "오늘의 간식",
	    "body" : "마카다미아 쿠키",//업데이트할 내용
	    "userId" : 1 //1번 user
		})
  }
	);
  const data = await response.json();
  console.log(data);
}
put();
