import { resolve } from 'path';
import { promises as fs } from 'fs';

export default (async function getInputData(day){
    try {
        const filePath = resolve(process.cwd(), day, 'data.js');
        return await fs.readFile(filePath, { encoding: 'utf-8' });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();