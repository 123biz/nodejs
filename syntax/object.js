var member = ['egoing', 'k8805', 'hoya'];
console.log(member[1]);

var i = 0
while(i < member.length){
    console.log('array loop: ', member[i])
    i = i + 1
}

var roles = {
    'programmer': "egoing",
    'designer': 'k8805',
    'manager': 'hoya'
};
console.log(roles.designer);
console.log('char:', roles['designer']);

for(var name in roles){
    console.log('object key:', name, ', value:', roles[name]);
}

for(var i in roles){
    console.log('object key:', i, ', value:', roles[i]);
}
