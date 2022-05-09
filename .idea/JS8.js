//매게 변수가 없는 함수
function error(){
    alert(`에러가 발생하였습니다 다시 실행해주세요`)
}
error();
//매개변수가 있는 함수
function sayHello(name){
    const msg=`Hello ${name}`;
    console.log(msg);
}
sayHello(`주동호`);
sayHello(`이선영`);
sayHello(`주동호 이선영`);

function Hello(name){
    let a='Hello';
    if(name){
        a+=name
    }
    console.log(a);
}
Hello();
Hello(`주동호`);
//함수 안에있는것들은 함수 안에서만 사용가능 이것을 지역변수
//그리구 밖에서 사용하려면 밖에서 지정 전역변수
let chogi=`Hello`
//지역변수 잘 활용해야됨
function wel(name){
    let chogi=`Hello`
    console.log(name+chogi)
}
wel("난 동호");

//return
function add(n1,n2){
    return n1+n2;
}
const plus=add(2,4)
console.log(plus)
//함수 한번에 한작업만 그리고 이름 지을떄는 알아보기 쉽게
//함수 표현식

