// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    const rotate = (list) => {
        const result = [];

        for(let i=0; i<list.length; i++) {
            const index = (i + 1) % list.length;
            result[index] = list[i];
        }

        return result;
    }

    let answer = A;

    for(let i=0; i<K; i++) {
        answer = rotate(answer);
    }

    return answer;
}