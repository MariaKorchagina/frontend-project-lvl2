import path from 'path';
import { readFileSync } from 'fs';

// Преобразуем файл JSON в объект JS

export const parseJson = (filepath) => {
  return JSON.parse(readFileSync(path.resolve(filepath)));
}

export default parseJson;
