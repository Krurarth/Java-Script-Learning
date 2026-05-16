// let numbers = [1, 2, 3, 6, 11, 15, 4, 7, 9];

// numbers.sort((a, b) => a-b);

// console.log(numbers);

let people = [{name : "Krutarth" ,age : 19, gpa : 8.04 },
              {name : "Diya" ,age : 19, gpa : 9.14 },
              {name : "Tanay" ,age : 20, gpa : 7.26 }
]

//people.sort( (a,b)=> b.gpa - a.gpa);



people.sort((a,b) => a.name.localeCompare(b.name));



//people.sort( (a,b)=> b.age - a.age);

console.log(people);

