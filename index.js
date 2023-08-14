import LinkedList from "./linkedlist";

//Tests
const testList = new LinkedList();

testList.tail() // Error: List is empty
testList.head() // Error: List is empty
  
testList.append(2)
testList.append(3)
testList.append(4)

console.log(testList.toString()); // ( 2 ) => ( 3 ) => ( 4 ) => null

testList.prepend(1);

console.log(testList.toString()); // ( 1 ) => ( 2 ) => ( 3 ) => ( 4 ) => null
console.log(testList.size()); // 4
console.log(testList.head()); // 1
console.log(testList.tail()); // 4
console.log(testList.at(2)); // 3

testList.pop();

console.log(testList.toString()); // ( 1 ) => ( 2 ) => ( 3 ) => null
console.log(testList.contains(2)); // true
console.log(testList.contains(10)); // false
console.log(testList.find(3)); // 2

testList.insertAt(10, 3);
testList.insertAt(10, 8); // Error: Invalid index

console.log(testList.find(10)); // 3
console.log(testList.toString()); // ( 1 ) => ( 2 ) => ( 3 ) => ( 10 ) => null

testList.removeAt(3) 
testList.removeAt(7) // Error: Invalid index

console.log(testList.toString()); // ( 1 ) => ( 2 ) => ( 3 ) => null