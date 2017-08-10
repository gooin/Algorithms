/**
 * Created by gooin on 2017/8/10.
 *
 * 在句子中找出最长的单词，并返回它的长度。

 函数的返回值应该是一个数字。

 当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

 这是一些对你有帮助的资源:

 String.split()
 String.length

 findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回一个数字
 findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回 6.
 findLongestWord("May the force be with you") 应该返回 5.
 findLongestWord("Google do a barrel roll") 应该返回 6.
 findLongestWord("What is the average airspeed velocity of an unladen swallow") 应该返回 8.
 findLongestWord("What if we try a super-long word such as otorhinolaryngology") 应该返回 19.
 */

function findLongestWord(str) {
    // 把字符串中的单词装入数组中
    var arr = str.split(" ");
    var maxLength = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maxLength <= arr[i].length) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

// 高级写法
function findLongestWord1(str) {
    return str.split(" ")
        .reduce(function (a, b) {
            return Math.max(a, b.length);
        }, 0);
}

console.log(findLongestWord("hello afdf dfghjkasdaf"));
console.log(findLongestWord1("hello afdf dfghjkasdaf"));
