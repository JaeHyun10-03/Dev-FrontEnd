// let str1 =
//   "I go to a mart. I go to a MART. I go to a mart.I go to a mart.I go to a mart.I go to a mart.I go to a mart.I go to a mart.I go to a mart.";
// let pattern = /c.t/g;
// let result = str1.replace(pattern, "office");
// document.getElementById("show").innerHTML = result;

//let str1 = "You are a student. Your name is nice";
// let pattern = /\bYou/g;
// let pattern2 = /e\b/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");
// let text = "";
// text += result + "<br>";
// text += result2 + "<br>";
// document.getElementById("show").innerHTML = text;

// let str1 = "1 12 1222 123 1234 12345 123456";
// let pattern = /\d{3}/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>";
// text += result2 + "<br>";
// document.getElementById("show").innerHTML = text;

/* 1번 문제 */
console.log(/apple/i.test("I love Apple pie and apple juice"));

/* 2번 문제 */
let p = /[A-Z]/g;
console.log("Hello World! This is a Test String".match(p).join(" "));

/* 3번 문제 */
let p2 = /\d{3}/g;
console.log("1 10 100 2000 30000".match(p2).join(" "));

/* 4번 문제 */
let p3 = /[od]/g;
console.log("How do you do".match(p3).join(" "));

/* 5번 문제 */
let p4 = /[90]/g;
console.log("89139012349".match(p4).join(" "));

/* 6번 문제 */
let p5 = /A{1,2}/g;
console.log("A AA B BB Aa Bb AAA".match(p5).join(" "));

/* 7번 문제 */
let p6 = /[0-9]{1}/g;
console.log("AA BB 12 345".match(p6).join(" "));
