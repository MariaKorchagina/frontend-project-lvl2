### Hexlet tests and linter status:

<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/workflows/hexlet-check/badge.svg" alt="Actions Status" style="max-width: 100%;"></a>
<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg" alt="Node CI" style="max-width: 100%;"></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

### Hexlet tests and linter status:

<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/workflows/hexlet-check/badge.svg" alt="Actions Status" style="max-width: 100%;"></a>
<a href="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml"><img src="https://github.com/MariaKorchagina/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg" alt="Node CI" style="max-width: 100%;"></a>
<a href="https://codeclimate.com/github/MariaKorchagina/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/481f0ac4404060754900/maintainability" /></a>
<a href="https://codeclimate.com/github/MariaKorchagina/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/481f0ac4404060754900/test_coverage" /></a>


**Gendiff** is a program that compares two configuration files and shows a difference.

**Utility information:**
- Supporting in different formats: <a href="#yaml">yaml</a> and <a href="#json">json</a>
- Generating a report in different formats: <a href="#plain">plain text</a>, <a href="#stylish">stylish</a> and <a href="#json-formatter">json</a>

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

- <a href="#Formats">Formats.</a>

Utility supports two formats: `yaml` and `json`.

<div id="json"></div>

Example of `json` files difference:


<div id="yaml"></div>

Example of `yaml` files difference:


- <a href="#Formatters">Formatters.</a>

<div id="stylish">
    <h3>Stylish</h3>
</div>

To use <a href="#stylish"></a> formatter run:

```bash
gendiff -f stylish file1.json file2.json
```

or

```bash
gendiff file1.json file2.json
```

_Example of stylish:_


<div id="plain">
    <h3>Plain</h3>
</div>

To use <a href="#plain"></a> formatter run:

```bash
gendiff -f plain file1.json file2.json
```

_Example of plain:_

<div id="json">
    <h3>JSON</h3>
</div>

To use <a href="#json"></a> formatter run:

```bash
gendiff -f json file1.json file2.json
```

_Example of json:_