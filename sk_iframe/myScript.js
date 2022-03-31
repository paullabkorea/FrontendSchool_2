let btn = document.querySelector(".btn-start");
let resultTxt = document.querySelector(".title_result");
let player = document.querySelector("#player");
let cover = document.querySelector(".cover");


btn.addEventListener('click', function () {
    resultTxt.style.display = "block";
    player.style.display = "none";
    cover.style.display = "block";
});


// video tag의 DOM element를 player로 지정합니다.
// 웹캠 사용권한이 승인되는 경우 스트리밍 영상을 player의 재생대상으로 지정
var handleSuccess = function (stream) {
    player.srcObject = stream;
};

navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess);
   // 현재 사용중인 브라우저 객체(navigator)의 mediaDevices 인터페이스를
   // 이용하여 사용자의 미디어 입력장치 사용권한을 받습니다.