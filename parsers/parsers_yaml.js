import path from 'path';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';

//Преобразование Yaml в объект JS

const parseYaml = (filepath) => {
  return load(readFileSync(path.resolve(filepath), 'utf8'));
}

export default parseYaml;  