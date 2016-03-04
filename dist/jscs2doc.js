'use strict';

var path = require('path');
var _ = require('lodash');
var when = require('when');
var ENABLED = 'enabled';
var DISABLED = 'disabled';
var jscsRoot = path.resolve(__dirname, '../node_modules/jscs');

var fs = require('./when-fs');
var processMarkdown = require('./processMarkdown');

var config = {
  githubOrganization: 'jscs',
  githubProject: 'node-jscs'
};

function getAvailableRules() {
  var rulesDir = jscsRoot + '/lib/rules';
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

var CR = '\n\n';
/**
 * [description]
 * @param  {string} jscsrc jscsrc file path
 * @param  {string} readme readme output file path
 */
module.exports = function (jscsrcPath, readmePath) {
  var jsonParse = when.lift(JSON.parse);
  return when.all([getAvailableRules().then(buildRulesInfo), readFileAsync(jscsrcPath).then(jsonParse)]).spread(function (rules, jscsrc) {

    var groups = _.groupBy(rules, function (rule) {
      return _.has(jscsrc, rule.name) && jscsrc[rule.name] ? ENABLED : DISABLED;
    });

    function printCurrentValue(rule, isEnabled, options) {
      if (!isEnabled) {
        return '';
      }

      return '\n**Current value ** : `' + JSON.stringify(options, null, 2) + '`\n\n';
    }

    function rulesToText(rules) {
      return rules.map(function ruleToText(rule) {
        // @todo handle another template
        return '\n## ' + rule.name + '\n' + printCurrentValue(rule, _.has(jscsrc, rule.name), jscsrc[rule.name]) + '\n' + rule.description + '\n\n';
      }).join(CR);
    }

    // @todo handle another templates
    fs.writeFileAsync(readmePath, processMarkdown('\n<!-- toc -->\n\n----------------------\n# Enabled rules\n\n' + rulesToText(groups.enabled) + '\n\n# Disabled rules\n\n' + rulesToText(groups.disabled) + '\n'), 'utf8');
  });
};