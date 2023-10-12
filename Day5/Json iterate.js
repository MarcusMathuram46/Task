const jsonIterate = [
    {name: "Marcus", age: 23, city: "Madurai"},
    {name: "Mathuram", age: 24, city: "Madurai"},
    {name: "Rufus", age: 30, city: "Melbourne"}
];

//for

for(let i = 0; i < jsonIterate.length; i++) {
    console.log(jsonIterate[i]);
}

//for in

for(let key in jsonIterate) {
    console.log(jsonIterate[key]);
}

//for of

for(let iterate of jsonIterate) {
    console.log(iterate)
}

//for each

jsonIterate.forEach(iterate => {
    console.log(iterate);
});