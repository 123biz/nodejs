// array, object

function f1(){        // �Լ� ����� ������ ���� �� ������ �Լ��� ���̴�.
    console.log(1+1);
    console.log(1+2);
}

// var i = if(true){    // ���ǹ��� �ݺ����� ���� �� �� ����
//     console.log(1)
// }

var f = function (){        // �Լ� ����� ������ ���� �� ������ �Լ��� ��
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();

var a = [f];               // ó������� �׷����ϴ� �Լ� ������ �������̱⵵ �ϱ� ������ �迭�� ��ü�� ���� �� ����
a[0]();

var o = {
    func:f                 // �߰�ȣ�� ���� ��ü�� ����         
}
o.func();