/**
 * Created by gooin on 2017/8/13.
 */

function confirmEnding(str1, str2) {

    var arr = str1.split(' ');

    if (arr[arr.length - 1] === str2) {
        return true;
    } else {
        return false;
    }

}
console.log(confirmEnding("you are little cute", "cute"));
