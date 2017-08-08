/**
 * Created by gooin on 2017/8/7.
 */

/**
 * 检查回文字符串

 如果给定的字符串是回文，返回true，反之，返回false。

 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

 函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。

 当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

 这是一些对你有帮助的资源:

 String.replace()
 String.toLowerCase()
 *
 */

function palindrome(str) {

    // 删除字符串中的空格
    var noSpaceStr = str.replace(/[\W_]+/g,'');
    // 将字符串变为小写
    var lowerCaseStr = noSpaceStr.toLowerCase();

    // 思路就是将字符串反转后和现有的字符串比较, 若相同则是回文字符串

    var arr = lowerCaseStr.split('');
    var reverseArr = arr.reverse();
    var reverseStr = reverseArr.join('');

   //return "revStr is : " + reverseStr + ", lowerStr is :" + lowerCaseStr;

    if (lowerCaseStr === reverseStr) {
        return true;
    } else {
        return false;
    }

}


console.log(palindrome("My age is 0, 0 si ega ym"));
