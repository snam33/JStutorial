// strings
console.log('hello, world');

let email = 'snam3@rrc.ca';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase()); // they do not alter the original one.
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@'); // '@' is argument
console.log(index);

