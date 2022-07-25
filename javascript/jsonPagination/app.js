const pagination = document.querySelector('.list-pages');
const output = document.querySelector('.contents');
const dataUrl = "https://randomuser.me/api/?results=97";

// 데이터 관리용 객체
const dataObj = {
    datasPerPage: 10,
    currentPage: 1,
    datas: null
}

window.addEventListener('load', () => {
    init();
})

// api로부터 데이터를 불러옵니다.
function init() {
    fetch(dataUrl)
        .then(response => response.json())
        .then(
            (data) => {
                dataObj.datas = data.results;
                loadPage(9);
            }
        )
        .catch((error) => {
            console.error('통신 실패', error);
        })
}

// 페이지를 로딩하는 함수입니다.
function loadPage(page) {
    dataObj.currentPage = page;

    // 페이지마다 화면에 처음 보여질 사람의 데이터가 전체 데이터 중에 몇번째인지 특정합니다.
    let startPost = (dataObj.currentPage - 1) * dataObj.datasPerPage;

    // 총 몇개의 페이지가 만들어져야하는지 특정합니다.
    let totalPages = Math.ceil(dataObj.datas.length / dataObj.datasPerPage);

    // 페이지마다 화면에 마지막으로 보여질 사람의 데이터가 몇번째인지 특정합니다.
    let endPost =
        // 90 + 10 > 100
        startPost + dataObj.datasPerPage > dataObj.datas.length ?
            dataObj.datas.length :
            startPost + dataObj.datasPerPage;

    // 페이지 초기화
    output.innerHTML = '';

    // 받아온 데이터를 순환합니다.
    for (let i = startPost; i < endPost; i++) {
        console.log(dataObj.datas[i]);
        let result = dataObj.datas[i];

        let card = document.createElement('article');
        card.innerHTML = `
            <img src=${result.picture.medium} class="img-card">
            <strong class="name-card">${result.name.title} ${result.name.first} ${result.name.last}</strong>
            <dl class="list-info">
                <div>
                    <dt>phone : </dt>
                    <dd>${result.phone}</dd>
                </div>
                <div>
                    <dt>email : </dt>
                    <dd>${result.email}</dd>
                </div>
                <div>
                    <dt>location : </dt>
                    <dd>${result.location.street.name} ${result.location.city}</dd>
                </div>
            </dl>
        `
        output.append(card);
    }

    paginationMaker(totalPages);
}



function paginationMaker(totalPages) {
    pagination.innerHTML = '';
    const container = document.createDocumentFragment();

    for (let i = 0; i < totalPages; i++) {
        const item = document.createElement('li');
        item.textContent = (i + 1);
        item.addEventListener('click', () => {
            loadPage(i + 1);
        })

        if (i + 1 === dataObj.currentPage) {
            item.classList.add('active');
        }
        container.append(item);
    }
    pagination.append(container);

}
