/**
 * Created by gooin on 2017/8/15.
 *
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块。

 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

 chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];


 */
function chunk(arr, size) {
    arr = arr.slice();
    var chunkArr = [];
    for (var i = 0, len = arr.length; i < len; i += size) {
        chunkArr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }

    return chunkArr;

}


console.log(chunk(["a", "b", "c", "d", "e"], 3));
