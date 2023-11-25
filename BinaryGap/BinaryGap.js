// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    const binaryCodes = N.toString(2).split('');
    const memory = [];
    let max = 0;

    for(let i=0; i<binaryCodes.length; i++) {
        const num = +binaryCodes[i];
        
        if(num === 1) {
            if(memory.length < 1) {
                memory.push(i);
            } else {
                max = Math.max(max, i - memory.slice(-1)[0] - 1);
                memory.push(i);
            }
        }
    }

    return max;
}