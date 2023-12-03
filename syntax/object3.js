var v1 = 'v1';
// 100000 code
v1 = 'egoing';
var v2 = 'v2';
console.log(v1)
console.log(v2)

var o = {
    v1:'v1',
    v2:'v2'
}
console.log(o);

function f1(){
    console.log(o.v1);
}
function f2(){
    console.log(o.v2);
}

f1();
f2();

var o = {                     // 함수의 이름이 안에도 정의되어야 하는데...
    v1:'v1',
    v2:'v2',
    f1:function(){            // 이름없는 합수로 만들어 객체화할 수 있음
        console.log(o.v1);
    },
    f2:function(){
        console.log(o.v2);
    }
}

o.f1();
o.f2();

var opq = {                  // 함수명이 바뀌어도 아래 this가 되었기 때문에 지장없음
    v1:'v1',
    v2:'v2',
    f1:function(){            
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
}