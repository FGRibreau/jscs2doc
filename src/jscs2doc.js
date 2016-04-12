'use strict';
const path = require('path');
const _ = require('lodash');
const when = require('when');
const ENABLED = 'enabled';
const DISABLED = 'disabled';
const jscsRoot = path.resolve(require.resolve('jscs').split('jscs/')[0], './jscs');

const fs = require('./when-fs');
const processMarkdown = require('./jscs/processMarkdown').default;

const config = {
  githubOrganization: 'jscs',
  githubProject: 'node-jscs'
};

function getAvailableRules() {
  const rulesDir = jscsRoot + '/lib/rules';
  return fs.readdirAsync(rulesDir).then(function (filenames) {
    return filenames.map(function (filename) {
      return rulesDir + '/' + filename;
    });
  });
}

function buildRulesInfo(ruleFilenames) {
  return when.all(ruleFilenames.map(buildRuleInfo));
}

function buildRuleInfo(rulePath) {
  var RuleClass = require(rulePath);
  var ruleInstance = new RuleClass();
  var optionName = ruleInstance.getOptionName();
  var filename = path.basename(rulePath);
  var projectUrl = 'https://github.com/' + config.githubOrganization + '/' + config.githubProject;
  var blobUrl = projectUrl + '/blob/master';
  var fileUrl = blobUrl + '/lib/rules/' + filename;
  var testFilePath = buildRuleTestFilePath(filename);
  var testUrl = blobUrl + '/test/specs/rules/' + filename;

  return when.all([readFileAsync(rulePath), fs.existsAsync(testFilePath)]).spread(function (fileContents, hasTestFile) {
    var match = fileContents.match(/^\/\*\*([\s\S]*?)\*\//m);
    var description = '';
    if (match) {
      var doc = match[1];
      doc = doc.split('\n').map(function (line) {
        return line.replace(/^ \*(?: ?)/, '');
      }).join('\n');
      doc = doc.replace(/\*\\\//g, '*/');

      description = doc;
    }

    var lines = description.trim().split('\n');
    var shortDescription = '';
    var line;
    while ((line = lines.shift()).trim() !== '') {
      shortDescription += line + '\n';
    }

    return {
      name: optionName,
      description: description,
      shortDescription: shortDescription,
      sourceUrl: fileUrl,
      renderTestLink: hasTestFile,
      testUrl: testUrl,
      filename: filename
    };
  });
}

function buildRuleTestFilePath(ruleFilename) {
  return jscsRoot + '/test/specs/rules/' + ruleFilename;
}

function readFileAsync(filename) {
  return fs.readFileAsync(filename, {
    encoding: 'utf8'
  });
}

const CR = '\n\n';
/**
 * [description]
 * @param  {string} jscsrc jscsrc file path
 * @param  {string} readme readme output file path
 */
module.exports = (jscsrcPath, readmePath) => {
  var jsonParse = when.lift(JSON.parse);
  return when.all([getAvailableRules().then(buildRulesInfo), readFileAsync(jscsrcPath).then(jsonParse)]).spread(function (rules, jscsrc) {

    var groups = _.groupBy(rules, function (rule) {
      return _.has(jscsrc, rule.name) && jscsrc[rule.name] ? ENABLED : DISABLED;
    });

    function printCurrentValue(rule, isEnabled, options) {
      if (!isEnabled) {
        return '';
      }

      return `
**Current value ** : \`${JSON.stringify(options, null, 2)}\`

`;
    }

    function rulesToText(rules) {
      return rules.map(function ruleToText(rule) {
        // @todo handle another template
        return `
$$RULE_START$$
## ${rule.name}
${printCurrentValue(rule, _.has(jscsrc, rule.name), jscsrc[rule.name])}
${rule.description}
$$RULE_END$$
`;
      }).join(CR);
    }

    function wrapInTemplate(html){
      return `<html>
<head>
<style>${require('fs').readFileSync(path.resolve(__dirname, './bundle.css')).toString('utf8')}</style>
</head>
<body>
<div class="page__content">
${html
    .replace(/\$\$RULE_START\$\$/g, '<div class="rule"><div class="rule-description markdown">')
    .replace(/\$\$RULE_END\$\$/g, '</div></div>')
  }
</div>
</body>
</html>
      `;
    }

    // @todo handle another templates
    fs.writeFileAsync(readmePath, wrapInTemplate(processMarkdown(`
<!-- toc -->

----------------------
# Enabled rules

${rulesToText(groups.enabled)}

# Disabled rules

${rulesToText(groups.disabled)}
`)), 'utf8');
  });
}
