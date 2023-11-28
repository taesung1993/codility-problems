// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const map = new Map();

    for(let i=0; i<A.length; i++) {
        const num = A[i];

        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    const keys = Array.from(map.keys());
    const output = keys.find((key) => map.get(key) % 2);
    return output;
}