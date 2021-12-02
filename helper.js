import { resolve } from 'path';
import { promises as fs } from 'fs';

export default async function getInputData(day, toArray = true){
    try {
        const filePath = resolve(process.cwd(), day, 'data.txt');
        const data = await fs.readFile(filePath, { encoding: 'utf-8' })
        return toArray ? data.split('\n').map((row) => row.trim()) : data;
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}