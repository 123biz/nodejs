// array, object

function f1(){        // 함수 결과를 변수에 넣을 수 있으면 함수도 값이다.
    console.log(1+1);
    console.log(1+2);
}

// var i = if(true){    // 조건문과 반복문은 값이 될 수 없음
//     console.log(1)
// }

var f = function (){        // 함수 결과를 변수에 넣을 수 있으면 함수도 값
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();

var a = [f];               // 처리방법을 그루핑하는 함수 조차도 데이터이기도 하기 때문에 배열과 객체에 담을 수 있음
a[0]();

var o = {
    func:f                 // 중괄호로 묶인 객체와 같음         
}
o.func();