let fruit=prompt(`무슨 과일을 사고 싶으 신가요?`);
//if else랑 비슷함
switch (fruit){
    case "사과":
        console.log("100원");
    case "파인애플":
        console.log("200원");
    case "포도":
        console.log("300원");
    case "키위":
        console.log("400원");
    case "멜론":
        console.log("500원");
        break
    default:
        console.log("그런 과일 없수다");
}
