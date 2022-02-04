### Hexlet tests and linter status:

<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/workflows/hexlet-check/badge.svg" alt="Actions Status" style="max-width: 100%;"></a>
<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg" alt="Node CI" style="max-width: 100%;"></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

**Gendiff** is a program that compares two configuration files and shows a difference.

**Utility information:**
- Supporting in different formats: <a href="#yaml">yaml</a> and <a href="#json">json</a>
- Generating a report in different formats: <a href="#plain">plain</a>, <a href="#stylish">stylish</a>, <a href="#json">json</a>

```bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

**How to install a project:**
1. Copy the repository 
```bash
git@github.com:MariaKorchagina/frontend-project-lvl2.git
```
2. Type **make install** 
```bash
    make install
```
<div id="Formats">
    <h3>Formats</h3>
</div>


Utility supports two formats: `yaml` and `json`.

<div id="json"></div>

Example of `json` files difference:

[![asciicast](https://asciinema.org/a/o8jL00tytTj0OGCRUoUYOxl4M.svg)](https://asciinema.org/a/o8jL00tytTj0OGCRUoUYOxl4M)

<div id="yaml"></div>

Example of `yaml` files difference:

[![asciicast](https://asciinema.org/a/5ZEZJKgpMdzNNlkzAdq7LnbjW.svg)](https://asciinema.org/a/5ZEZJKgpMdzNNlkzAdq7LnbjW)

<div id="Formatters">
    <h3>Formatters</h3>
</div>

<div id="stylish">
    <h3>Stylish</h3>
</div>

To use <a href="#stylish"></a> formatter run:

```bash
node gendiff.js -f stylish fileRecursive1.json fileRecursive2.json
```

_Example of stylish:_

[![asciicast](https://asciinema.org/a/wHK6c4K2UwW1nvPhD2NiQFaYV.svg)](https://asciinema.org/a/wHK6c4K2UwW1nvPhD2NiQFaYV)

<div id="plain">
    <h3>Plain</h3>
</div>

To use <a href="#plain"></a> formatter run:

```bash
node gendiff.js -f plain fileRecursive1.json fileRecursive2.json
```

_Example of plain:_

[![asciicast](https://asciinema.org/a/Ez54ewbzVTJr7ypMvAZZMGqA7.svg)](https://asciinema.org/a/Ez54ewbzVTJr7ypMvAZZMGqA7)

<div id="json">
    <h3>JSON</h3>
</div>

To use <a href="#json"></a> formatter run:

```bash
node gendiff.js -f json fileRecursive1.json fileRecursive2.json
```

_Example of json:_

[![asciicast](https://asciinema.org/a/FdZSXRGAnypzwbUCt02VkuVKn.svg)](https://asciinema.org/a/FdZSXRGAnypzwbUCt02VkuVKn)