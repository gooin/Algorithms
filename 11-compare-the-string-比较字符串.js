/**
 * Created by gooin on 2017/8/20.
 * 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

 ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

 ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。



 */


function compareStr(arr) {

    // 都转为小写
    var target = arr[0].toLowerCase();
    var x = arr[1].toLowerCase();

    for (var i = 0; i < x.length; i++) {
        // 判断数组中的每个字符是否在目标中出现过, 如果没有出现则返回值为 -1
        if (target.indexOf(x[i]) < 0) {
               return false;
        }
    }

    return true;
    // return target.indexOf(x[0]);

}


console.log(compareStr(['HelloWorld', 'od']));