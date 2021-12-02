import getInputData from '../helper.js';

export default (async () => {
    const data = (await getInputData('Day1')).map((num) => +num);
    let increment = 0;
    let previousNumber = 0;
    for (let i=0; i < data.length; i++) {
        const threeNumbers = [data[i], data[i+1], data[i+2]];
        if (threeNumbers.filter(Boolean).length !== 3) {
            return console.log(increment);
        }

        const summedNumbers = threeNumbers.reduce((acc, curr) => acc + curr, 0);
        if (i !== 0 && summedNumbers > previousNumber) {
            increment++
        }
        previousNumber = summedNumbers;
    }
})();