//1
var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];
var merged = arr1.concat(arr2);
console.log("1. " + merged.join(", "));

//2
arr1 = ["a", "b", "c"];
arr1.push(1, 2, 3);
console.log("2. " + arr1.join(", "));

//3
arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log("3. " + arr1.join(", "));

//4
arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);
console.log("4. " + arr1.join(", "));

//5
arr1 = ["js", "css", "jq"];
console.log("5. " + arr1.shift());

//6
arr1 = ["js", "css", "jq"];
console.log("6. " + arr1.pop());

//7
var obj = { js: "test", jq: "hello", css: "world" };
var keys = Object.keys(obj);
console.log("7. " + keys.join(", "));

//8
arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, "a", "b", "c");
console.log("8. " + arr1.join(", "));

//9
arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 0, "a", "b");
arr1.splice(6, 0, "c");
arr1.splice(8, 0, "e");
console.log("9. " + arr1.join(", "));
