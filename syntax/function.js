console.log(Math.round(1.6));

function sum(first, second){  // parameter variable (매개변수)
    return first + second;    // return을 만나면 함수가 종료됨
}

sum(2, 4); // argument (인자)
console.log(sum(2, 4))

console.log(Math.round(1.6));
filwriter('result.txt', Math.round(1.6));  // 작동하지 않는 예시 코드
email('egoing@aaa.com', Math.round(1.6));  // 작동하지 않는 예시 코드