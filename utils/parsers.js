import yaml from 'js-yaml';

export default (data, dataFormat) => {
  switch (dataFormat) {
    case 'yaml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
      default:
        throw Error(`This ${dataFormat} format is not allowed`);
  }
};
