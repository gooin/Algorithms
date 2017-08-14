/**
 * Created by gooin on 2017/8/14.
 *
 * 重复输出字符串
 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 *  repeat("abc", 4) 应该返回 "abcabcabcabc".
 repeat("abc", 1) 应该返回 "abc".
 repeat("*", 8) 应该返回 "********".
 repeat("abc", -2) 应该返回 "".
 */

function repeatStr(str, num) {


    if (num < 0) {
        return '';
    }
    var result = '';
    for (var i = 0; i < num; i++) {
        result += str;
    }

    return result;
}
console.log(repeatStr("qeq ", 500));