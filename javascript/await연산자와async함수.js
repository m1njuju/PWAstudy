//Promise로 비동기 처리 함수 생성
function fnProductReady(pNum, pTime){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(pNum); // 1 출력
            resolve('상품이 성공적으로 배송되었습니다.');
        }, pTime);
    });
}

//await만 사용하면 결과가 나오지 않을 때 무한루프에 빠질 수 있다
//비동기 방식으로 처리하는 명령이 있는 함수는 반드시 async 실행해야 함
//strRet = await fnProductReady(1, 2000);
//console.log(strRet);

//async 함수 사용법
async function fnDoAsyncFunc() {
    console.log(await fnProductReady(1, 2000)); // 2초 지연
    console.log(await fnProductReady(2, 1000)); // 1초 지연
    console.log(await fnProductReady(3, 500)); // 0.5초 지연
}
fnDoAsyncFunc();