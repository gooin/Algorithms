/**
 * Created by gooin on 2017/8/11.
 *
 *句中单词首字母大写

 确保字符串的每个单词首字母都大写，其余部分小写。

 像'the'和'of'这样的连接符同理。

 当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

 这是一些对你有帮助的资源:

 String.split()

 titleCase("I'm a little tea pot") 应该返回一个字符串
 titleCase("I'm a little tea pot") 应该返回 "I'm A Little Tea Pot".
 titleCase("sHoRt AnD sToUt") 应该返回 "Short And Stout".
 titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 应该返回 "Here Is My Handle Here Is My Spout".

 *
 */

function titleCase(str) {
    // 将字符串变为小写然后填入数组 [ 'here', 'is', 'my', 'handle', 'here', 'is', 'my', 'spout' ]
    var arr = str.toLowerCase().split(' ');
    // 用 map 函数迭代数组
    var result = arr.map(function (val) {
        // 将数组中每个元素字符串的第一个字母变为大写 [ 'Here', 'Is', 'My', 'Handle', 'Here', 'Is', 'My', 'Spout' ]
        var titleCaseArr = val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        return titleCaseArr;
    });
    // 将数组所有元素连接到字符串中
    return result.join(' ');

}

console.log(titleCase('HERE IS MY HANDLE HERE is my SPOUT'));
// Here Is My Handle Here Is My Spout
