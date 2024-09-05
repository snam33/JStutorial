let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken'; // changed to ken
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']); //연결하다. 기존 어레이에 추가로 연결
let result = ninjas.push('ken'); //return new array length
result = ninjas.pop(); // array에서 push한거 뺴기

console.log(ninjas);
console.log(result);