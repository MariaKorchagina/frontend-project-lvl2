import yaml from 'js-yaml';

export default (data, formatName) => {
  switch (formatName) {
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw Error(`This ${formatName} format is not allowed`);
  }
};
