/* ENUM TEST */
/* javascript doesn't have enums built in*/

const problems = {
    sick: 1,
    poor: 2,
    tired: 3,
    angry: 4,
}
Object.freeze(problems);

function solution(problem) {
    switch (problem) {
        case 1:
            return 'eat real food';
        case 2:
            return 'tax the rich';
        case 3:
            return 'sleep better';
        case 4:
            return 'heal self';
        default:
            return 'create problem';
    }
}

let possibleSolution = solution(problems.tired);

console.log(possibleSolution);