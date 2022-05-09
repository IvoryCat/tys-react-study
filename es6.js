// var let const

/* 
1. 유효범위(scope)
var : 함수단위 scope
let, const : 블록단위

2. 재할당 가능
var, let : 가능
const : 불가능
*/

for (var i = 0; i < 5; i++) {
  console.log("안쪽" + i);
}
console.log("바깥쪽" + i);

for (let j = 0; j < 5; j++) {
  
  console.log("안쪽" + j);
  
}
console.log("바깥쪽" + j);

