//객체 메소드
let a=`age`;
let b=`name`;
const user={
    [b]:`mikl`,
    [a]:30//age=30
}
//식 넣는 것도 가능
const user1={
    [1+4]:5,
    ['안녕'+`하세요`]:`Hello`
}
console.log(user1);

//object.assign():객체 복사
const user2={
    name:`Mike`,
    age:30
};

const user3=Object.assign({},user2);//user3가 user2을 복사
user3.name=`Tom`,user3.age=22;

console.log(user2);
//기존에 있던 user
console.log(user3);
//새로 만든 user

//object.keys():키 배열 반환
const keys=Object.keys(user2);
console.log(keys);//키 앞에 있는 것만 반환 배열로

//object.value()://벨류만 반환 뒤에있는것 배열로
const val=Object.values(user2);
console.log(val);

//object.entries():둘다 반환 근데 배열로 반환함
const ent=Object.entries(user2);
console.log(ent);
//object.fromEntries():배열을 객체로 반환
let arr=[
    [`mon`,`월`],
    [`tue`,`화`],
];
const from=Object.fromEntries(arr);

console.log(from);
