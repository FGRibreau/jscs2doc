'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = processMarkdown;

var _markedToc = require('marked-toc');

var _markedToc2 = _interopRequireDefault(_markedToc);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_marked2.default.setOptions({
    highlight: function highlight(code, lang) {
        return lang ? _highlight2.default.highlight(lang, code).value : code;
    }
});

function processMarkdown(markdown, callback) {
    var toc = '\n<!--start_toc-->\n\n' + (0, _markedToc2.default)(markdown, { maxDepth: 2, slugify: generateHeaderAnchor }) + '\n\n<!--end_toc-->\n';
    var html = (0, _marked2.default)(markdown.replace('<!-- toc -->', toc), { renderer: new RendererReplacement() }, callback);
    html = html.replace('<!--start_toc-->', '<div class="toc"><div class="toc-header">Table of contents:</div>');
    html = html.replace('<!--end_toc-->', '</div>');
    return html;
}

var RendererReplacement = function (_Renderer) {
    _inherits(RendererReplacement, _Renderer);

    function RendererReplacement() {
        _classCallCheck(this, RendererReplacement);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RendererReplacement).apply(this, arguments));
    }

    _createClass(RendererReplacement, [{
        key: 'heading',
        value: function heading(text, level, raw) {
            var idPrefix = this.options.headerPrefix;
            var id = generateHeaderAnchor(raw);
            return '<h' + level + ' id="' + (idPrefix + id) + '">' + text + '</h' + level + '>\n';
        }
    }]);

    return RendererReplacement;
}(_marked.Renderer);

/**
 * @see https://github.com/vmg/redcarpet/blob/master/ext/redcarpet/html.c
 * @param {String} text
 * @returns {String}
 */


function generateHeaderAnchor(text) {
    var heading = '';
    /* Dasherize the string removing extra white spaces
     and stripped chars */
    for (var i = 0; i < text.length; ++i) {
        var addDash = false;
        while (i + 1 < text.length && isIllegalChar(text[i]) && isIllegalChar(text[i + 1])) {
            if (shouldReplaceWithDash(text[i]) || shouldReplaceWithDash(text[i + 1])) {
                addDash = true;
            }
            i++;
        }

        if (addDash || shouldReplaceWithDash(text[i])) {
            if (i + 1 < text.length) {
                heading += '-';
            }
        } else {
            if (!shouldRemoveChar(text[i])) {
                heading += text[i].toLowerCase();
            }
        }
    }
    return heading;
}

var toDashChars = toCharIndex(' -&+$,:;=?@"#{}|^~[]`\\*()%.!\'');
var removeChars = toCharIndex('/');

function isIllegalChar(char) {
    return shouldReplaceWithDash(char) || shouldRemoveChar(char);
}

function shouldReplaceWithDash(char) {
    return Boolean(toDashChars[char]);
}

function shouldRemoveChar(char) {
    return Boolean(removeChars[char]);
}

function toCharIndex(input) {
    return input.split('').reduce(function (obj, char) {
        obj[char] = true;
        return obj;
    }, {});
}