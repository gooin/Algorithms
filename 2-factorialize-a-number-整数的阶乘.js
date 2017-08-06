/**
 * Created by gooin on 2017/8/6.
 */

// 弱鸡写法
function factorialize(num) {
    var factorialize = 1;
    for (var i = 1; i <= num; i++) {
        factorialize *= i;
    }
    return factorialize;
}
factorialize(5);


// 高端写法
function factorialize1(num) {
    if(num === 0 ) {return 1;}
    return num * factorialize1(num - 1);
}
factorialize1(5);

