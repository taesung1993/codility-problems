// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const map = new Map();

    for(let i=0; i<A.length; i++) {
        const num = A[i];

        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    const answer = Array.from(map.entries()).find(([key, value]) => value === 1);
    return answer[0];
}