//콜백 함수
function fnFunctionA(pNum) {
    return pNum;
}
function fnFunctionB(pFunc) {
    return pFunc;
}

fnFunctionB(fnFunctionA); // fnFunctionB의 매개변수로 fnFunctionA를 전달

//콜백 함수를 이용한 비동기 처리
function fnFunctionA(pNumA){
    console.log(pNumA);
}
function fnFunctionB(pNumB, fnCallback) {
    fnCallback(pNumB); // 매개변수로 받은 함수를 실행하여 비동기 처리의 시작 담당
}

fnFunctionB("콜백 함수 실행!", fnFunctionA);

//콜백 함수 구조를 단순화한 예
function fnFunctionB(pNumB, fnCallback) {
    //fnCallback(pNumB);
}
// 매개변수 전달 시 함수 선언과 정의를 함께 작성함: 비동기 처리의 완료 담당
fnFunctionB("콜백 함수 실행!", function fnFunctionA(pNumA){
    console.log(pNumA);
})

// 콜백 함수 실행
fnMsg(fnHello);
//콜백 함수는 3 출력 후 실행
function fnMsg(fnCallback) {
    console.log('1');
    fnCallback();
    console.log('3');
}

function fnHello() {
    setTimeout(() => console.log('2'), 1000); // 1초 지연 후 실행
}

//setTimeout(function, miiliseconds)
// function: 타이머가 종료된 후 실행될 함수 전달
// milliseconds: 차이머가 동작할 시간 설정 (단위: ms)