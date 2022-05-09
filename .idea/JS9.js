//저번에 했던거는 함수 표현식
// 함수 선언식은 어디서든 사용 가능 아래서 정의 해두면 위에서도 가능 이것을 호이스팅
sayHello();
function sayHello(){
    console.log(`Hello`);
}
//화살표 함수
let add=(name1,name2)=> {
    return `${name1}${name2}`
}
console.log(add(`안녕 `,`난동호야`))

//object
const superman={
    name:`Hero`,
    age:20
}
//호출
console.log(superman);
console.log(superman.name);
//변경
superman.age=30;
console.log(superman[`age`])
//추가
superman.hair="black"
superman[`hobby`]=`footboll`;
console.log(superman);
//삭제
delete superman.age;
console.log(superman);
//선언과 호출
function makeobject(name1,age1){
    return{
        name1,
        age1,
        hobby1:`football`
    };
}
const mike=makeobject("Mike",3)
console.log(mike);

console.log(`age1`in mike);
console.log(`birthday`in mike)

function isAdult(user){
    if(user.age<20){
        return false;
    }
    return true;
}
const mike={
    name:`Mike`,
    age:`30`
};

const jane={
    name:`jane`
};

console.log(isAdult(jane))
const Mike={
    name:`Mike`,
    age:30
};
for (x in Mike){
    console.log(Mike[x])
}
