// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
 const binaryCodes = N.toString(2).split('');
    let isCountingZero = false;
    let zeros = 0;
    let max = 0;

    for(let i=0; i<binaryCodes.length; i++) {
        const num = +binaryCodes[i];
        
        if(!isCountingZero && num === 1) {
            isCountingZero = true;
            continue;
        }

        if(isCountingZero && num === 1) {
            max = Math.max(max, zeros);
            zeros = 0;
            isCountingZero = false;
            continue;
        }

        zeros++;
    }

    return max;
}