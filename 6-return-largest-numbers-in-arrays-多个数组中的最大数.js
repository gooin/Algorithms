/**
 * Created by gooin on 2017/8/12.
 *
 * 找出多个数组中的最大数

 右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

 提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素

 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回一个数组
 largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回 [27,5,39,1001].
 largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 应该返回 [9, 35, 97, 1000000].
 */


function largestOfArr(arr) {

    var sortedArr = [];
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        //  用sort方法对数组排序
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        sortedArr = arr[i].sort(function (a, b) {
            // a-b 从小到大排序, b-a 从大到小排序
            return b - a;
        });
        // 将排序好的每个数组的首位组成数组
        resultArr.push(sortedArr[0]);
    }

    return resultArr;
}

console.log(
    largestOfArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
);

// [ 9, 35, 97, 1000000 ]