//배열

let studants=[`철수`,`영희`,`영수`]
console.log(studants[0]);
console.log(studants[1]);
console.log(studants[2]);

//추가
studants.push(`영이`)
console.log(studants[3]);

//제거
studants.pop();
console.log(studants);
console.log((studants.length));

//for문으로 반복
for (let index=0;index<studants.length;index++){
    console.log(studants[index]);
}
console.log(`===================`)
for(let i of studants){
    console.log(i);
}
