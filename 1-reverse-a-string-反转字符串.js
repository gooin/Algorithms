/**
 * Created by gooin on 2017/8/6
 */

function reverseString(str) {
    // 将 string 转为数组   ["h", "e", "l", "l", "o"]
    var arr = str.split('');
    // 将数组中的顺序反转     ["o", "l", "l", "e", "h"]
    var reverseArr = arr.reverse();
    // 反转后的数组转为字符串           "olleh"
    var reverseStr = reverseArr.join('');

    return reverseStr;
}
reverseString('hello');