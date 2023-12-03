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

var o = {                     // �Լ��� �̸��� �ȿ��� ���ǵǾ�� �ϴµ�...
    v1:'v1',
    v2:'v2',
    f1:function(){            // �̸����� �ռ��� ����� ��üȭ�� �� ����
        console.log(o.v1);
    },
    f2:function(){
        console.log(o.v2);
    }
}

o.f1();
o.f2();

var opq = {                  // �Լ����� �ٲ� �Ʒ� this�� �Ǿ��� ������ �������
    v1:'v1',
    v2:'v2',
    f1:function(){            
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
}