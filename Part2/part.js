// 1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，//
//   以及一个显示学生平均成绩的方法。//
//构造函数
function gradeAvg(){
     this.grade = [];
     this.add = add;
     this.averge = averge;
}
//添加学生成绩
function add(score){
     this.grade.push(score);
}
//计算学生平均成绩
function averge(){
     var total = 0;
     for(var i = 0, len = this.grade.length; i < len; i++) {
          total += this.grade[i];
     }
     return total/this.grade.length;
}

var scoreAvg = new gradeAvg();
scoreAvg.add(23);
scoreAvg.add(33);
scoreAvg.add(63);
var avg = scoreAvg.averge();

alert(avg);

// 2.将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。//
var words = ["apple","banana","orange"];
console.log(words.sort());                      // 正序
console.log(words.reverse());       // 倒序

// 3.创建这样一个对象，它将字母存储在一个数组中， //
//   并且用一个方法可以将字母连在一起，显示成一个单词。//
var word = ["a","p","p","l","e"];
var words = word.join("");
console.log(words);         // apple