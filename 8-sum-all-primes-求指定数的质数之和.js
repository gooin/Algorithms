/**
 * Created by gooin on 2017/8/13.
 */

function sumPrimes(num) {
    var start = new Date().getTime();
    var primes = 0;
    var arr =[];
    for(var i = 1; i<num; i++){
        for(var j = 2; j<i; j++){
            if (i % j === 0) {
                break;
            }
        }

        if(i <= j && i !==1){
            // 质数数组
            arr.push(i);
            // 质数之和
            primes +=i;
        }
    }
    var end = new Date().getTime();
   // 输出运算时间
    console.log(end - start);
    return primes;
    //return primes;
}

console.log(sumPrimes(1000000));