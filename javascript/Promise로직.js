// 가상의 서버 데이터 요청 및 그 결과 랜덤값 반환
function RequsetData(){
    return Math.random() > 0.5;
}

// 약속을 생성하는 부분
const oProductReady = new Promise(function (fnResolve, fnReject){
    // 실행 중 결과 기다림(pending)
    let bStatus = RequsetData();

    if (bStatus) {
        // 요청한 실행이 성공함(resolved)
        fnResolve('상품이 성공적으로 배송되었습니다.');
    }
    else {
        //실행 중 결과 기다림(pending)
        fnReject('죄송합니다. 상품이 아직 준비되지 못했습니다.');
    }
});

// 약속의 실행 최종 결과
oProductReady.then(function(pResult){// then 메서드는 콜백함수와 비슷한 기능
    // 약속 지킴 최종 성공(fulfilled)
    console.log(pResult);
}, function(pErrMsg){
    // 약속 못 지킴 최종 실패(unfulfilled)
    console.log(pErrMsg);
})