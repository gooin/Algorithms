/**
 * Created by gooin on 2017/8/13.
 */

function sumPrimes(num) {
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

    return arr;
    //return primes;
}

console.log(sumPrimes(10));