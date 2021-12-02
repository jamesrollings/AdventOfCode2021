import getInputData from '../helper.js';

export default (async () => {
    const data = await getInputData('Day1');
    let incremented = 0;
    let decremented = 0;
    for (let i=0; i < data.length; i++) {
        if (data[i-1] && Number(data[i]) > Number(data[i-1])) {
            incremented++
            continue;
        }
        decremented++
    }

    return console.log(`Incremented: ${incremented}\nDecremented: ${decremented}`);
})();