//반복문
for (let i=0;i<=10;i++){
    console.log(i)
    console.log("안녕")
}

let i=0;

while (i<10){
    i++
    console.log(i)
    console.log("와일문이야")
}

let i=0;

do {
    console.log("이건 그냥 한번 출력")
    i++
    console.log(i)

}while (i<10)

while (true){
    let answer=confirm("계속 반복할까요?")
    if(!answer){
        break
    }
}
for(let i=0;i<=10;i++){
    if(i%2){
        continue
    }
    console.log(i)
}
//스위치문
let frult=prompt("무슨 과일을 사실래유?")
switch (frult){
    case '사과':
        console.log('사과입니다.')
        break
    case '바나나':
        console.log('바나나입니다.')
        break
    default:
        console.log('그런 과일 없습니다')
}
