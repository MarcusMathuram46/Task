let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

function compareJSON(obj1, obj2) {
  const sortedKeys1 = Object.keys(obj1).sort();
  const sortedKeys2 = Object.keys(obj2).sort();

  const sortedJSON1 = JSON.stringify(obj1, sortedKeys1);
  const sortedJSON2 = JSON.stringify(obj2, sortedKeys2);

  return sortedJSON1 === sortedJSON2;
}

const result = compareJSON(obj1, obj2);
console.log("Comparison result:", result); 



constructor(...args) {
  this.items = [...args];
}
toArray(){
  return this.items;
}
push(...data) {
  this.items.push(...data);
}