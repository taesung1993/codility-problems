// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function rotate(A) {
    const result = [];

    for(let i=0; i<A.length; i++) {
        const index = (i + 1) % A.length;
        result[index] = A[i];
    }

    return result;
}

function solution(A, K) {
    let answer = [...A];

    for(let i=0; i<K; i++) {
        answer = rotate(answer);
    }

    return answer;
}