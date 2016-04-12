# jscs2doc [![Deps](https://img.shields.io/david/FGRibreau/jscs2doc.svg)](https://david-dm.org/FGRibreau/jscs2doc) [![Version](https://img.shields.io/npm/v/jscs2doc.svg)](https://www.npmjs.com/package/jscs2doc)  [![Downloads](http://img.shields.io/npm/dm/jscs2doc.svg)](https://www.npmjs.com/package/jscs2doc)


Convert .jscsrc (javascript code-style configuration) to a human readable format.

## npm

```bash
npm install jscs2doc -g
```

## Usage

```bash
Usage: jscs2doc <command> [options]

Options:
  -J, --jscs    jscsrc file path                 [string] [default: "./.jscsrc"]
  -O, --output  HTML output file path        [string] [default: "./README.html"]
  -h, --help    Show help                                              [boolean]
  --version     Show version number                                    [boolean]
```

## Example

```bash
jscs2doc --jscs ./.jscsrc --output README.html && open README.html
```

# [Output example](/examples)

<p align="center"><a href="https://www.youtube.com/watch?v=dd--tIkrVoA"><img src="https://cloud.githubusercontent.com/assets/138050/9570052/4f985bc6-4f7e-11e5-8a8c-aefb1ae6dbae.gif" />
</a></p>
