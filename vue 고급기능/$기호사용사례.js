// mydata를 Vue 객체 밖에 정의
let mydata = {
    sTitle: '안녕하세요!'
}
// Vue 객체를 생성하여 앱을 초기화하고 시작함 
let vm = new Vue({
    el: '#main',
    data: mydata
})
// Vue 객체의 el, data 등 속성 변수에 접근하려면 반드시 $를 사용
console.log(vm.data == mydata) // false 출력함
console.log(vm.$data == mydata) // true 출력함