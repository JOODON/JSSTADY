//자료형
let a;
console.log(a)//undefined 변수 내용이 지정되지 않음

console.log(typeof 1);
console.log(typeof "문자열");
console.log(typeof 1==1);
console.log(typeof undefined);

//형 변환 ()String =>문자열로 변경 ()Number=>숫자형으로 변경 ()boolean=>불린형

const mathScore=prompt("수학 점수를 입력해주세요");
const enScore=prompt("수학 점수를 입력해주세요");
const m=(Number(mathScore));
const e=(Number(enScore));
const result=(m+e)/2;
console.log(result);
console.log((String(3)));//숫자형을 문자열로 변환
console.log((Number("3")));//숫자형을 문자열로 변환
console.log(Boolean(0));//숫자형을 불린형으로 변경 " ",null undefined Nan 빼고는 전부다 true
