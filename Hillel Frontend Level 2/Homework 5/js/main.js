//1
var obj = {
  Petya: "3000$",
  Sveta: "1000$",
  Kolya: "500$",
  Sasha: "5000$",
  Zhenya: "1500$",
};
console.log("Зарплата Пети - " + obj.Petya + ", зарплата Коли - " + obj.Kolya);

//2
var arrHello = ["Привет, ", "мир", "!"];
arrHello[0] = "Пока, ";
console.log(arrHello.join(""));

//3
var arrNum1 = [1, 2, 3, 4, 5];
var arrNum2 = new Array(5);
for (let i = 0; i < arrNum2.length; i++) {
  arrNum2[i] = i + 1;
}
console.log(arrNum1.join(", "));
console.log(arrNum2.join(", "));

//4
var arr = [["г"], ["о"], ["л"], ["у"], ["б"], ["о"], ["й"]];
console.log(arr.join(""));

//5
arr = ["a", "b", "c", "d"];
console.log(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);

//6
var languages = {
  js: ["jQuery", "Angular"],
  php: "hello",
  css: "world",
};
console.log(languages.js[0]);

//7
var week = {
  first: "Понедельник",
  second: "Вторник",
  third: "Среда",
  fourth: "Четверг",
  fifth: "Пятница",
  sixth: "Суббота",
  seventh: "Воскресенье",
};
console.log("Текущий день недели - " + week.second);
