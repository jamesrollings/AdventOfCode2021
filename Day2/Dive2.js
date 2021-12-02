import getInputData from '../helper.js';

function instructionCreator(strInstruction) {
    const [position, unit] = strInstruction.split(' ');
    return [position, Number(unit)];
}

export default (async () => {
    const data = await getInputData('Day2');

    const instructions = data.map((instruction) => instructionCreator(instruction));

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let i=0; i < instructions.length; i++) {
        const arrInstruction = instructions[i];
        if (arrInstruction[0] === 'forward') {
            horizontal += arrInstruction[1];
            depth += aim * arrInstruction[1];
        }
        if (arrInstruction[0] === 'down') {
            aim += arrInstruction[1];
        }
        if (arrInstruction[0] === 'up') {
            aim -= arrInstruction[1];
        }
    }

    return console.log(horizontal * depth);
})();