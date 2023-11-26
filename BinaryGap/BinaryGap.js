// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    const binaryCodes = N.toString(2).split('');
    let beforeIndex = -1;
    let max = 0;

    for(let i=0; i<binaryCodes.length; i++) {
        const num = +binaryCodes[i];

        if(num === 1) {
            if(beforeIndex > -1) {
                max = Math.max(max, i - beforeIndex - 1);
            }
            beforeIndex = i;
        }
    }

    return max;
}