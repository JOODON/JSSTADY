var name=`Mike`;
console.log(name);
var name=`Jake`;
console.log(name);
//var 는 에러가 안나지만 let은 에러가남
let age=23;
console.log(age);
let age=23;
console.log(age);
// var let둘다 undifuned로 반환
var name1;
console.log(name1);
name1=`Jake`;

let name2;
console.log(name2);
name2=`Jake`;
//var는 함수 스코프가 전체 let,const는 블록스코프 하지만 var같은 경우에도 함수에서는 벗어날수 없음
let age=30;
if (age>=19){
    var text=`성인`;
}
console.log(text)
//애는 출력 안됨 let으로 선언되어 있기 떄문에
let age=30;
if (age>=19){
    let text=`성인`;
}
console.log(text)
//생성자 함수 는 대문자로
function User(name,age){
    this.name=name;
    this.age=age;
    this.sayname=function (){
        console.log(`내 이름은${name}입니다`);
    };
}
//NEW 를 사용해서 만든 생성자 함수를 불러줌
let user1=new User("Mike",23);
let user2=new User("Jake",22);
let user3=new User("SULI",21);

console.log(user1,user2,user3);

user1.sayname();
user2.sayname();
