// FOR LOOP
for(let i=1;i<=9;i++){
    console.log("Number"+i);
}
// WHILE LOOP
let i = 1;
while(i<=9){
    console.log("Number"+i);
    i++;
}

// DO WHILE
let j = 1;
do{
    console.log("Number"+j);
    j++;
}while(j<=9)

// LOOP THROUGH ARRAY
const fruits = ['Apple','Banana','Orenge','Strawberry'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// FOREACH
fruits.forEach(function(fruit,index,array){
    console.log(`${index}: ${fruit}`);
    console.log(array);
})

// MAP

const users = [
    {
        id: 1,
        name: 'Sunny'
    },
    {
        id: 2,
        name:'Annie'
    },
    {
        id:3,
        name:'Dora'
    },
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

// FOR IN LOOP

const user = {
    firstName:'Sunny',
    lastName:'Lee',
    age:18
}
for(let x in user){
    console.log(`${x}:${user[x]}`);
}