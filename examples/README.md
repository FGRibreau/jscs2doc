
        <html>
          <head>
            <link rel="stylesheet" href="http://jscs.info/assets/bundle.css" media="screen" title="no title" charset="utf-8" />
          </head>
          <body>
          <div class="toc"><div class="toc-header">Table of contents:</div>
<ul>
<li><a href="#enabled-rules">Enabled rules</a></li>
<li><a href="#disabled-rules">Disabled rules</a></li>
</ul>
</div>
<hr>
<h1 id="enabled-rules">Enabled rules</h1>
<h2 id="disallowdanglingunderscores">disallowDanglingUnderscores</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows identifiers that start or end in <code>_</code>.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>Object</code>:<ul>
<li><code>allExcept</code>: array of quoted identifiers</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#nomen"><code>nomen</code></a></p>
<p>Some popular identifiers are automatically listed as exceptions:</p>
<ul>
<li><code>__proto__</code> (javascript)</li>
<li><code>_</code> (underscore.js)</li>
<li><code>__filename</code> (node.js global)</li>
<li><code>__dirname</code> (node.js global)</li>
<li><code>super_</code> (node.js, used by
<a href="http://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor"><code>util.inherits</code></a>)</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowDanglingUnderscores"</span>: { <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"_exception"</span>] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> o = obj.__proto__;
<span class="hljs-keyword">var</span> y = _.extend;
<span class="hljs-keyword">var</span> z = __dirname;
<span class="hljs-keyword">var</span> w = __filename;
<span class="hljs-keyword">var</span> x_y = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> v = _exception;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> _x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> x_ = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> x_y_ = <span class="hljs-number">1</span>;
</code></pre>
<h2 id="disallowemptyblocks">disallowEmptyBlocks</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows empty blocks (except for catch blocks).</p>
<p>Type: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> for default behavior (strict mode, no empty blocks allowed)</li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;comments&#39;</code> blocks containing only comments are not considered empty</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#noempty"><code>noempty</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowEmptyBlocks"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> ( a == b ) { c = d; }
<span class="hljs-keyword">try</span> { a = b; } <span class="hljs-keyword">catch</span>( e ){}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> ( a == b ) { } <span class="hljs-keyword">else</span> { c = d; }
</code></pre>
<h2 id="disallowkeywordsonnewline">disallowKeywordsOnNewLine</h2>
<p><strong>Current value </strong> : <code>[
  &quot;else&quot;
]</code></p>
<p>Disallows placing keywords on a new line.</p>
<p>Types: <code>Array</code></p>
<p>Values:</p>
<ul>
<li><code>Array</code> specifies quoted keywords which are disallowed from being placed on a new line</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowKeywordsOnNewLine"</span>: [<span class="hljs-string">"else"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>) {
    x++;
} <span class="hljs-keyword">else</span> {
    x--;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>)
    x++;
<span class="hljs-keyword">else</span>
    x--;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>) {
    x++;
}
<span class="hljs-comment">// comments</span>
<span class="hljs-keyword">else</span> {
    x--;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">do</span> {
    x++;
} <span class="hljs-keyword">while</span>(x &lt; <span class="hljs-number">0</span>);
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">do</span>
    x++;
<span class="hljs-keyword">while</span>(x &lt; <span class="hljs-number">0</span>);
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">do</span> {
    x++;
}
<span class="hljs-comment">// comments</span>
<span class="hljs-keyword">while</span>(x &lt; <span class="hljs-number">0</span>);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>) {
    x++;
}
<span class="hljs-keyword">else</span> {
    x--;
}
</code></pre>
<h2 id="disallowkeywords">disallowKeywords</h2>
<p><strong>Current value </strong> : <code>[
  &quot;with&quot;
]</code></p>
<p>Disallows usage of specified keywords.</p>
<p>Type: <code>Array</code></p>
<p>Values: Array of quoted keywords</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowKeywords"</span>: [<span class="hljs-string">"with"</span>]
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">with</span> (x) {
    prop++;
}
</code></pre>
<h2 id="disallowmixedspacesandtabs">disallowMixedSpacesAndTabs</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires lines to not contain both spaces and tabs consecutively,
or spaces after tabs only for alignment if &quot;smart&quot;</p>
<p>Types: <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>true</code> or <code>&quot;smart&quot;</code></p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#smarttabs"><code>smarttabs</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMixedSpacesAndTabs"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-example-for-mode-true">Valid example for mode <code>true</code></h5>
<pre><code class="lang-js">\tvar foo = <span class="hljs-string">"blah blah"</span>;
\s\s\s\svar foo = <span class="hljs-string">"blah blah"</span>;
\t<span class="hljs-comment">/**
\t\s*
\t\s*/</span> <span class="hljs-comment">//a single space to align the star in a multi-line comment is allowed</span>
</code></pre>
<h5 id="invalid-example-for-mode-true">Invalid example for mode <code>true</code></h5>
<pre><code class="lang-js">\t\svar foo = <span class="hljs-string">"blah blah"</span>;
\s\tsvar foo = <span class="hljs-string">"blah blah"</span>;
</code></pre>
<h5 id="valid-example-for-mode-smart">Valid example for mode <code>&quot;smart&quot;</code></h5>
<pre><code class="lang-js">\tvar foo = <span class="hljs-string">"blah blah"</span>;
\t\svar foo = <span class="hljs-string">"blah blah"</span>;
\s\s\s\svar foo = <span class="hljs-string">"blah blah"</span>;
\t<span class="hljs-comment">/**
\t\s*
\t\s*/</span> <span class="hljs-comment">//a single space to align the star in a multi-line comment is allowed</span>
</code></pre>
<h5 id="invalid-example-for-mode-smart">Invalid example for mode <code>&quot;smart&quot;</code></h5>
<pre><code class="lang-js">\s\tsvar foo = <span class="hljs-string">"blah blah"</span>;
</code></pre>
<h2 id="disallowmultiplelinebreaks">disallowMultipleLineBreaks</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows multiple blank lines in a row.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMultipleLineBreaks"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;

x++;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;


x++;
</code></pre>
<h2 id="disallowmultiplelinestrings">disallowMultipleLineStrings</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows strings that span multiple lines without using concatenation.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#multistr"><code>multistr</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMultipleLineStrings"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"multi"</span> +
        <span class="hljs-string">"line"</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-string">"single line"</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"multi \
        line"</span>;
</code></pre>
<h2 id="disallowmultiplevardecl">disallowMultipleVarDecl</h2>
<p><strong>Current value </strong> : <code>&quot;exceptUndefined&quot;</code></p>
<p>Disallows multiple <code>var</code> declaration (except for-loop).</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> disallows multiple variable declarations except within a for loop</li>
<li><code>Object</code>:<ul>
<li><code>&#39;strict&#39;</code> disallows all multiple variable declarations</li>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;undefined&#39;</code> allows declarations where all variables are not defined</li>
<li><code>&#39;require&#39;</code> allows declarations where all variables are importing external modules with require</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMultipleVarDecl"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, j = arr.length; i &lt; j; i++) {}
</code></pre>
<h5 id="valid-for-strict-true">Valid for <code>{ strict: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<h5 id="valid-for-allexcept-undefined">Valid for <code>{ allExcept: [&#39;undefined&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a, b;
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, j = arr.length; i &lt; j; i++) {}
</code></pre>
<h5 id="valid-for-allexcept-require">Valid for <code>{ allExcept: [&#39;require&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-built_in">require</span>(<span class="hljs-string">'a'</span>),
    b = <span class="hljs-built_in">require</span>(<span class="hljs-string">'b'</span>);

<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, j = arr.length; i &lt; j; i++) {}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>,
    y = <span class="hljs-number">2</span>;

<span class="hljs-keyword">var</span> x, y = <span class="hljs-number">2</span>, z;
</code></pre>
<h2 id="disallowquotedkeysinobjects">disallowQuotedKeysInObjects</h2>
<p><strong>Current value </strong> : <code>&quot;allButReserved&quot;</code></p>
<p>Disallows quoted keys in object if possible.</p>
<p>Types: <code>Boolean</code>, <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> for strict mode</li>
<li><code>&quot;allButReserved&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [&quot;reserved&quot;]</code>)</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code> array of exceptions:<ul>
<li><code>&quot;reserved&quot;</code> allows ES3+ reserved words to remain quoted
 which is helpful when using this option with JSHint&#39;s <code>es3</code> flag.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowQuotedKeysInObjects"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: { <span class="hljs-keyword">default</span>: <span class="hljs-number">1</span> } };
</code></pre>
<h5 id="valid-for-mode-allexcept-reserved">Valid for mode <code>{&quot;allExcept&quot;: [&quot;reserved&quot;]}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>, <span class="hljs-string">'default'</span>: <span class="hljs-number">2</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {<span class="hljs-string">'a'</span>: <span class="hljs-number">1</span>};
</code></pre>
<h2 id="disallowspaceafterobjectkeys">disallowSpaceAfterObjectKeys</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows space after object keys.</p>
<p>Types: <code>Boolean</code>, <code>String</code>, or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;ignoreSingleLine&quot;</code> ignores objects if the object only takes up a single line
(<em>deprecated</em> use <code>&quot;allExcept&quot;: [ &quot;singleline&quot; ]</code>)</li>
<li><code>&quot;ignoreMultiLine&quot;</code> ignores objects if the object takes up multiple lines
(<em>deprecated</em> use <code>&quot;allExcept&quot;: [ &quot;multiline&quot; ]</code>)</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: array of exceptions:<ul>
<li><code>&quot;singleline&quot;</code> ignores objects if the object only takes up a single line</li>
<li><code>&quot;multiline&quot;</code> ignores objects if the object takes up multiple lines</li>
<li><code>&quot;aligned&quot;</code> ignores aligned object properties</li>
<li><code>&quot;method&quot;</code> ignores method declarations</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterObjectKeys"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
<span class="hljs-keyword">var</span> y = {
    a: <span class="hljs-number">1</span>,
    b: <span class="hljs-number">2</span>
}
</code></pre>
<h5 id="valid-for-allexcept-singleline">Valid for <code>{ allExcept: [&#39;singleline&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a : <span class="hljs-number">1</span>};
<span class="hljs-keyword">var</span> y = {
    a: <span class="hljs-number">1</span>,
    b: <span class="hljs-number">2</span>
}
</code></pre>
<h5 id="valid-for-allexcept-multiline">Valid for <code>{ allExcept: [&#39;multiline&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
<span class="hljs-keyword">var</span> y = {
    a  : <span class="hljs-number">1</span>,
    b   : <span class="hljs-number">2</span>
}
</code></pre>
<h5 id="valid-for-allexcept-aligned">Valid for <code>{ allExcept: [&#39;aligned&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> y = {
    abc: <span class="hljs-number">1</span>,
    d  : <span class="hljs-number">2</span>
}
</code></pre>
<h5 id="valid-for-allexcept-method">Valid for <code>{ allExcept: [&#39;method&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> y = {
    fn () {
       <span class="hljs-keyword">return</span> <span class="hljs-number">42</span>;
    }
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a : <span class="hljs-number">1</span>};
</code></pre>
<h2 id="disallowspaceafterprefixunaryoperators">disallowSpaceAfterPrefixUnaryOperators</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires sticking unary operators to the right.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to disallow space after prefix for all unary operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterPrefixUnaryOperators"</span>: [<span class="hljs-string">"++"</span>, <span class="hljs-string">"--"</span>, <span class="hljs-string">"+"</span>, <span class="hljs-string">"-"</span>, <span class="hljs-string">"~"</span>, <span class="hljs-string">"!"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = !y; y = ++z;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = ! y; y = ++ z;
</code></pre>
<h2 id="disallowspacebeforebinaryoperators">disallowSpaceBeforeBinaryOperators</h2>
<p><strong>Current value </strong> : <code>[
  &quot;,&quot;
]</code></p>
<p>Requires sticking binary operators to the left.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to disallow space before all possible binary operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeBinaryOperators"</span>: [
    <span class="hljs-string">"="</span>,
    <span class="hljs-string">","</span>,
    <span class="hljs-string">"+"</span>,
    <span class="hljs-string">"-"</span>,
    <span class="hljs-string">"/"</span>,
    <span class="hljs-string">"*"</span>,
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
    <span class="hljs-comment">// etc</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x+ y;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x + y;
</code></pre>
<h2 id="disallowspacebeforepostfixunaryoperators">disallowSpaceBeforePostfixUnaryOperators</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires sticking unary operators to the left.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to disallow space before postfix for all unary operators
(i.e. increment/decrement operators)</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforePostfixUnaryOperators"</span>: [<span class="hljs-string">"++"</span>, <span class="hljs-string">"--"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = y++; y = z--;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = y ++; y = z --;
</code></pre>
<h2 id="disallowspacesinnamedfunctionexpression">disallowSpacesInNamedFunctionExpression</h2>
<p><strong>Current value </strong> : <code>{
  &quot;beforeOpeningRoundBrace&quot;: true
}</code></p>
<p>Disallows space before <code>()</code> or <code>{}</code> in named function expressions.</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInNamedFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
</code></pre>
<h2 id="disallowspacesinsidearraybrackets">disallowSpacesInsideArrayBrackets</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows space after opening array square bracket and before closing.
Reports only on arrays, not on property accessors.
Use <a href="http://jscs.info/rule/disallowSpacesInsideBrackets.html">disallowSpacesInsideBrackets</a>
to report on all brackets.</p>
<p>Types: <code>Boolean</code>, <code>String</code> or <code>Object</code></p>
<p>Values: <code>&quot;all&quot;</code> or <code>true</code> for strict mode, <code>&quot;nested&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [ &quot;[&quot;, &quot;]&quot; ]</code>)
ignores closing brackets in a row.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideArrayBrackets"</span>: <span class="hljs-string">"all"</span>

<span class="hljs-comment">// or</span>

<span class="hljs-string">"disallowSpacesInsideArrayBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"["</span>, <span class="hljs-string">"]"</span>, <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-all">Valid for mode <code>&quot;all&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [[<span class="hljs-number">1</span>]];
<span class="hljs-keyword">var</span> x = a[ <span class="hljs-number">0</span> ]; <span class="hljs-comment">// Property accessor not an array</span>
</code></pre>
<h5 id="valid-for-mode-nested">Valid for mode <code>&quot;nested&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ [<span class="hljs-number">1</span>] ];
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>&quot;allExcept&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ [<span class="hljs-number">1</span>] ];
<span class="hljs-keyword">var</span> x = [ { a: <span class="hljs-number">1</span> } ];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ [ <span class="hljs-number">1</span> ] ];
</code></pre>
<h2 id="disallowspacesinsideparentheses">disallowSpacesInsideParentheses</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows space after opening round bracket and before closing.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values: Either <code>true</code> or Object with <code>&quot;only&quot;</code> property as an array of tokens</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideParentheses"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-true-value">Valid for <code>true</code> value</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) * <span class="hljs-number">3</span>;
</code></pre>
<h5 id="valid-for-only-value">Valid for <code>only</code> value</h5>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideParentheses"</span>: { <span class="hljs-string">"only"</span>: [ <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span>, <span class="hljs-string">"\""</span> ] }
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = ( <span class="hljs-number">1</span> + <span class="hljs-number">2</span> );
<span class="hljs-keyword">var</span> x = foo({});
<span class="hljs-keyword">var</span> x = foo(<span class="hljs-string">"1"</span>);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foo( {} );
</code></pre>
<h2 id="disallowtrailingcomma">disallowTrailingComma</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows an extra comma following the final element of an array or object literal.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>JSHint: <a href="http://jshint.com/docs/options/#es3"><code>es3</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowTrailingComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> bar = {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>}
<span class="hljs-keyword">const</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">const</span> {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, ];
<span class="hljs-keyword">var</span> bar = {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>, }
</code></pre>
<h2 id="disallowtrailingwhitespace">disallowTrailingWhitespace</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires all lines to end on a non-whitespace character</p>
<p>Types: <code>Boolean</code> or <code>String</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;ignoreEmptyLines&quot;</code>: (default: <code>false</code>) allow whitespace on empty lines</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#trailing"><code>trailing</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowTrailingWhitespace"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">"blah blah"</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">"blah blah"</span>; <span class="hljs-comment">//&lt;-- whitespace character here</span>
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js">foo = <span class="hljs-string">'bar'</span>;

foo = <span class="hljs-string">'baz'</span>;
</code></pre>
<h5 id="invalid-for-true-but-valid-for-ignoreemptylines">Invalid for <code>true</code> but Valid for <code>ignoreEmptyLines</code></h5>
<pre><code class="lang-js">foo = <span class="hljs-string">'bar'</span>;
\t
foo = <span class="hljs-string">'baz'</span>;
</code></pre>
<h2 id="disallowyodaconditions">disallowYodaConditions</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires the variable to be the left hand operator when doing a boolean comparison</p>
<p>Type: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to disallow yoda conditions for most possible comparison operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowYodaConditions"</span>: [
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a == <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">return</span>
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-number">1</span> == a) {
    <span class="hljs-keyword">return</span>
}
</code></pre>
<h2 id="maximumlinelength">maximumLineLength</h2>
<p><strong>Current value </strong> : <code>150</code></p>
<p>Requires all lines to be at most the number of characters specified</p>
<p>Types: <code>Integer</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Integer</code>: lines should be at most the number of characters specified</li>
<li><code>Object</code>:<ul>
<li><code>value</code>: (required) lines should be at most the number of characters specified</li>
<li><code>tabSize</code>: (default: <code>1</code>) considered the tab character as number of specified spaces</li>
<li><code>allExcept</code>: (default: <code>[]</code>) an array of conditions that will exempt a line<ul>
<li><code>regex</code>: allows regular expression literals to break the rule</li>
<li><code>comments</code>: allows comments to break the rule</li>
<li><code>urlComments</code>: allows comments with long urls to break the rule</li>
<li><code>functionSignature</code>: allows function definitions to break the rule</li>
<li><code>require</code>: allows require expressions to break the rule</li>
</ul>
</li>
<li><code>allowRegex</code>: <em>deprecated</em> use <code>allExcept: [&quot;regex&quot;]</code> instead</li>
<li><code>allowComments</code>: <em>deprecated</em> use <code>allExcept: [&quot;comments&quot;]</code> instead</li>
<li><code>allowUrlComments</code>: <em>deprecated</em> use <code>allExcept: [&quot;urlComments&quot;]</code> instead</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#maxlen"><code>maxlen</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"maximumLineLength"</span>: <span class="hljs-number">40</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> aLineOf40Chars = <span class="hljs-number">123456789012345678</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> aLineOf41Chars = <span class="hljs-number">1234567890123456789</span>;
</code></pre>
<h4 id="example-for-allexcept-functionsignature">Example for allExcept functionSignature</h4>
<pre><code class="lang-js"><span class="hljs-string">"maximumLineLength"</span>: { <span class="hljs-string">"value"</span>: <span class="hljs-number">40</span>, <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"functionSignature"</span> ] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> f = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">with, many, _many_, arguments</span>) </span>{ .... };
<span class="hljs-keyword">let</span> f = x =&gt; x * x * x * x * x * x * x * x;
(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">foo, bar, baz, quux, cuttlefish</span>) </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">namesNaamesNaaamesNaaaames</span>(<span class="hljs-params"></span>) </span>{
        ...
    }
})();
<span class="hljs-keyword">const</span> longNameIgnoredAsWell = (a, b) =&gt; a * b;
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">X</span> </span>{ myLongMethodName(withPossiblyManyArgs) { ... } };
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// valid</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">"function_bodies_are_not_protected"</span>;
}
</code></pre>
<h2 id="requireblocksonnewline">requireBlocksOnNewline</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires blocks to begin and end with a newline</p>
<p>Types: <code>Boolean</code>, <code>Integer</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> validates all non-empty blocks</li>
<li><code>Integer</code> specifies a minimum number of lines containing elements in the block before validating</li>
<li><code>Object</code>:<ul>
<li><code>&#39;includeComments&#39;</code><ul>
<li><code>true</code> includes comments as part of the validation</li>
</ul>
</li>
<li><code>&#39;minLines&#39;</code><ul>
<li><code>Integer</code> specifies a minimum number of lines containing elements in the block before validating</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="examples">Examples</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireBlocksOnNewline"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requireBlocksOnNewline"</span>: <span class="hljs-number">1</span>
<span class="hljs-string">"requireBlocksOnNewline"</span>: {
     <span class="hljs-string">"includeComments"</span>: <span class="hljs-literal">true</span>
}
<span class="hljs-string">"requireBlocksOnNewline"</span>: {
     <span class="hljs-string">"includeComments"</span>: <span class="hljs-literal">true</span>,
     <span class="hljs-string">"minLines"</span>: <span class="hljs-number">1</span>
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { <span class="hljs-comment">//comments</span>
    doSomething();
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
<span class="hljs-comment">/** comments */</span>
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {doSomething();}
</code></pre>
<h5 id="valid-for-mode-1">Valid for mode <code>1</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
    doSomethingElse();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { <span class="hljs-comment">//comments</span>
    doSomething();
    doSomethingElse();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
    doSomethingElse();
    <span class="hljs-comment">/** comments */</span>
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); doSomethingElse(); }
</code></pre>
<h5 id="valid-for-mode-includecomments-true">Valid for mode <code>{ includeComments: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    <span class="hljs-comment">//comments</span>
    doSomething();
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
     <span class="hljs-comment">//comments</span>
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { <span class="hljs-comment">//comments</span>
    doSomething();
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
<span class="hljs-comment">/** comments */</span>}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="valid-for-mode-includecomments-true-minlines-1">Valid for mode <code>{ includeComments: true, minLines: 1 }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    <span class="hljs-comment">//comments</span>
    doSomething();
    doSomethingElse();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
    doSomethingElse();
    <span class="hljs-comment">//comments</span>
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { <span class="hljs-comment">//comments</span>
    doSomething();
    doSomethingElse();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
    doSomethingElse();
    <span class="hljs-comment">/** comments */</span>}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h2 id="requirecamelcaseoruppercaseidentifiers">requireCamelCaseOrUpperCaseIdentifiers</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires identifiers to be camelCased or UPPERCASE_WITH_UNDERSCORES</p>
<p>Types: <code>Boolean</code> or <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;ignoreProperties&quot;</code> allows an exception for object property names. Deprecated, Please use the <code>Object</code> value</li>
<li><code>Object</code>:<ul>
<li><code>ignoreProperties</code>:  boolean that allows an exception for object property names</li>
<li><code>strict</code>: boolean that forces the first character to not be capitalized</li>
<li><code>allowedPrefixes</code>: array of String, RegExp, or ESTree RegExpLiteral values permitted as prefixes</li>
<li><code>allowedSuffixes</code>: array of String, RegExp, or ESTree RegExpLiteral values permitted as suffixes</li>
<li><code>allExcept</code>: array of String, RegExp, or ESTree RegExpLiteral values permitted as exceptions</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#camelcase"><code>camelcase</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCamelCaseOrUpperCaseIdentifiers"</span>: <span class="hljs-literal">true</span>

<span class="hljs-string">"requireCamelCaseOrUpperCaseIdentifiers"</span>: {<span class="hljs-string">"ignoreProperties"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"strict"</span>: <span class="hljs-literal">true</span>}

<span class="hljs-string">"requireCamelCaseOrUpperCaseIdentifiers"</span>: {<span class="hljs-string">"allowedPrefixes"</span>: [<span class="hljs-string">"opt_"</span>, <span class="hljs-regexp">/pfx\d+_/</span>]}

<span class="hljs-string">"requireCamelCaseOrUpperCaseIdentifiers"</span>: {<span class="hljs-string">"allowedSuffixes"</span>: [<span class="hljs-string">"_dCel"</span>, {regex: {pattern: <span class="hljs-string">"_[kMG]?Hz"</span>}}]}

<span class="hljs-string">"requireCamelCaseOrUpperCaseIdentifiers"</span>: {<span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"var_args"</span>, {regex: {pattern: <span class="hljs-string">"^ignore"</span>, flags: <span class="hljs-string">"i"</span>}}]}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> CamelCase = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> lower_case = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> mixed_Case = <span class="hljs-number">3</span>;
</code></pre>
<h5 id="valid-for-mode-ignoreproperties">Valid for mode <code>ignoreProperties</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> CamelCase = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> obj.snake_case = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> camelCase = { snake_case: <span class="hljs-number">6</span> };
</code></pre>
<h5 id="invalid-for-mode-ignoreproperties">Invalid for mode <code>ignoreProperties</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> lower_case = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> mixed_Case = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> snake_case = { snake_case: <span class="hljs-number">6</span> };
</code></pre>
<h5 id="valid-for-mode-strict">Valid for mode <code>strict</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> obj.snake_case = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> camelCase = { snake_case: <span class="hljs-number">6</span> };
</code></pre>
<h5 id="invalid-for-mode-strict">Invalid for mode <code>strict</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> Snake_case = { snake_case: <span class="hljs-number">6</span> };
<span class="hljs-keyword">var</span> snake_case = { SnakeCase: <span class="hljs-number">6</span> };
</code></pre>
<h5 id="valid-for-allowedprefix-opt_-pfx-d-_">Valid for <code>{ allowedPrefix: [&quot;opt_&quot;, /pfx\d+_/] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> CamelCase = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> opt_camelCase = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> pfx32_camelCase = <span class="hljs-number">6</span>;
</code></pre>
<h5 id="invalid-for-allowedprefix-opt_-pfx-d">Invalid for <code>{ allowedPrefix: [&quot;opt_&quot;, /pfx\d+/] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> lower_case = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> mixed_Case = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> req_camelCase = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> pfx_CamelCase = <span class="hljs-number">5</span>;
</code></pre>
<h5 id="valid-for-allowedsuffixes-_dcel-regex-pattern-_-kmg-hz">Valid for <code>{ allowedSuffixes: [&quot;_dCel&quot;, {regex:{pattern:&quot;_[kMG]?Hz&quot;}}] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> CamelCase = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> camelCase_dCel = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> _camelCase_MHz = <span class="hljs-number">6</span>;
</code></pre>
<h5 id="invalid-for-allowedsuffixes-_dcel-regex-pattern-_-kmg-hz">Invalid for <code>{ allowedSuffixes: [&quot;_dCel&quot;, {regex:{pattern:&quot;_[kMG]?Hz&quot;}}] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> lower_case = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> mixed_Case = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> camelCase_cCel = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> CamelCase_THz = <span class="hljs-number">5</span>;
</code></pre>
<h5 id="valid-for-allexcept-var_args-regex-pattern-ignore-flags-i">Valid for <code>{ allExcept: [&quot;var_args&quot;, {regex:{pattern:&quot;^ignore&quot;,flags:&quot;i&quot;}}] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> camelCase = <span class="hljs-number">0</span>;
<span class="hljs-keyword">var</span> CamelCase = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> _camelCase = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> camelCase_ = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> UPPER_CASE = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> var_args = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> ignoreThis_Please = <span class="hljs-number">6</span>;
<span class="hljs-keyword">var</span> iGnOrEeThis_Too = <span class="hljs-number">7</span>;
</code></pre>
<h5 id="invalid-for-allexcept-var_args-regex-pattern-ignore-flags-i">Invalid for <code>{ allExcept: [&quot;var_args&quot;, {regex:{pattern:&quot;^ignore&quot;,flags:&quot;i&quot;}}] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> lower_case = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> Mixed_case = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> mixed_Case = <span class="hljs-number">3</span>;
<span class="hljs-keyword">var</span> var_arg = <span class="hljs-number">4</span>;
<span class="hljs-keyword">var</span> signore_per_favore = <span class="hljs-number">5</span>;
</code></pre>
<h2 id="requirecapitalizedconstructors">requireCapitalizedConstructors</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires constructors to be capitalized (except for <code>this</code>)</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> or Object with <code>allExcept</code> Array of quoted identifiers which are exempted</p>
<p>JSHint: <a href="http://jshint.com/docs/options/#newcap"><code>newcap</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCapitalizedConstructors"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requireCapitalizedConstructors"</span>: {
    <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"somethingNative"</span>]
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-keyword">new</span> B();
<span class="hljs-keyword">var</span> c = <span class="hljs-keyword">new</span> <span class="hljs-keyword">this</span>();
<span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> somethingNative();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> e();
</code></pre>
<h2 id="requirecommabeforelinebreak">requireCommaBeforeLineBreak</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires commas as last token on a line in lists.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#laxcomma"><code>laxcomma</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCommaBeforeLineBreak"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    one: <span class="hljs-number">1</span>,
    two: <span class="hljs-number">2</span>
};
<span class="hljs-keyword">var</span> y = { three: <span class="hljs-number">3</span>, four: <span class="hljs-number">4</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    one: <span class="hljs-number">1</span>
    , two: <span class="hljs-number">2</span>
};
</code></pre>
<h2 id="requirecurlybraces">requireCurlyBraces</h2>
<p><strong>Current value </strong> : <code>[
  &quot;if&quot;,
  &quot;else&quot;,
  &quot;for&quot;,
  &quot;while&quot;,
  &quot;do&quot;,
  &quot;try&quot;,
  &quot;catch&quot;,
  &quot;finally&quot;
]</code></p>
<p>Requires curly braces after statements.</p>
<p>Types: <code>Array</code> or <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<pre><code>- Array of quoted keywords
- `true` to require curly braces after the following keywords
- `Object`
    - `&#39;keywords&#39;`
        - Array of quoted keywords
    - `&#39;allExcept&#39;`
        - Array of keywords inside of the block that would allow curly braces
        - Ex: [&quot;return&quot; , &quot;continue&quot;, &quot;break&quot;]
</code></pre><p>JSHint: <a href="http://jshint.com/docs/options/#curly"><code>curly</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCurlyBraces"</span>: [
    <span class="hljs-string">"if"</span>,
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"for"</span>,
    <span class="hljs-string">"while"</span>,
    <span class="hljs-string">"do"</span>,
    <span class="hljs-string">"try"</span>,
    <span class="hljs-string">"catch"</span>,
    <span class="hljs-string">"case"</span>,
    <span class="hljs-string">"default"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) {
    x++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) x++;
</code></pre>
<h2 id="requiredotnotation">requireDotNotation</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires member expressions to use dot notation when possible</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;except_snake_case&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [&quot;snake_case&quot;]</code>) allow quoted snake cased identifiers</li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;keywords&#39;</code> allow quoted identifiers made of reserved words</li>
<li><code>&#39;snake_case&#39;</code> allow quoted snake cased identifiers</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>N.B.: keywords are always allowed with es3 enabled (<a href="http://jscs.info/overview.html#es3">http://jscs.info/overview.html#es3</a>)</p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#sub"><code>sub</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDotNotation"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[c];
<span class="hljs-keyword">var</span> a = b.c;
<span class="hljs-keyword">var</span> a = b[c.d];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-number">1</span>];
<span class="hljs-keyword">var</span> a = b.while; <span class="hljs-comment">// reserved words can be property names in ES5</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'c'</span>];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'snake_cased'</span>];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'_camelCased'</span>];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'camelCased_'</span>];
</code></pre>
<h4 id="example-for-allexcept-snake_case">Example for allExcept snake_case</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDotNotation"</span>: { <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"snake_case"</span> ] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[c];
<span class="hljs-keyword">var</span> a = b.c;
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'snake_cased'</span>];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'camelCased_butWithSnakes'</span>];
</code></pre>
<h4 id="example-for-allexcept-keywords">Example for allExcept keywords</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDotNotation"</span>: { <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"keywords"</span> ] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'yield'</span>]; <span class="hljs-comment">// reserved word in ES5</span>
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'let'</span>];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'await'</span>]; <span class="hljs-comment">// reserved word in ES6</span>
</code></pre>
<h4 id="example-for-allexcept-keywords-with-esnext">Example for allExcept keywords with esnext</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDotNotation"</span>: { <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"keywords"</span> ] }
<span class="hljs-string">"esnext"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'await'</span>]; <span class="hljs-comment">// reserved word in ES6</span>
</code></pre>
<h4 id="example-for-es3-true">Example for <code>&quot;es3&quot;: true</code></h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDotNotation"</span>: <span class="hljs-literal">true</span>,
<span class="hljs-string">"es3"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[c];
<span class="hljs-keyword">var</span> a = b.c;
<span class="hljs-keyword">var</span> a = b[c.d];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-number">1</span>];
<span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'while'</span>]; <span class="hljs-comment">// reserved word in ES3</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b[<span class="hljs-string">'c'</span>];
</code></pre>
<h2 id="requirelinefeedatfileend">requireLineFeedAtFileEnd</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires placing line feed at file end.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireLineFeedAtFileEnd"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h2 id="requireoperatorbeforelinebreak">requireOperatorBeforeLineBreak</h2>
<p><strong>Current value </strong> : <code>[
  &quot;?&quot;,
  &quot;+&quot;,
  &quot;-&quot;,
  &quot;/&quot;,
  &quot;*&quot;,
  &quot;=&quot;,
  &quot;===&quot;,
  &quot;!==&quot;,
  &quot;&gt;&quot;,
  &quot;&gt;=&quot;,
  &quot;&lt;&quot;,
  &quot;&lt;=&quot;,
  &quot;&amp;&amp;&quot;,
  &quot;||&quot;,
  &quot;:&quot;
]</code></p>
<p>Requires operators to appear before line breaks and not after.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to require all possible binary operators to appear before line breaks</p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#laxbreak"><code>laxbreak</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireOperatorBeforeLineBreak"</span>: [
    <span class="hljs-string">"?"</span>,
    <span class="hljs-string">"="</span>,
    <span class="hljs-string">"+"</span>,
    <span class="hljs-string">"-"</span>,
    <span class="hljs-string">"/"</span>,
    <span class="hljs-string">"*"</span>,
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>,
    <span class="hljs-string">"&gt;"</span>,
    <span class="hljs-string">"&gt;="</span>,
    <span class="hljs-string">"&lt;"</span>,
    <span class="hljs-string">"&lt;="</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = y ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
x = y ?
    <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = y
    ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
</code></pre>
<h2 id="requirepaddingnewlinesbeforelinecomments">requirePaddingNewLinesBeforeLineComments</h2>
<p><strong>Current value </strong> : <code>{
  &quot;allExcept&quot;: &quot;firstAfterCurly&quot;
}</code></p>
<p>Requires newline before line comments</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: always require a newline before line comments</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: <code>&quot;firstAfterCurly&quot;</code> Comments may be first line of block without extra padding</li>
</ul>
</li>
</ul>
<h4 id="examples">Examples</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLinesBeforeLineComments"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requirePaddingNewLinesBeforeLineComments"</span>: { <span class="hljs-string">"allExcept"</span>: <span class="hljs-string">"firstAfterCurly"</span> }
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> b = <span class="hljs-number">3</span>; <span class="hljs-comment">// comment</span>

<span class="hljs-comment">// comment</span>
<span class="hljs-keyword">return</span> a;

<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

  <span class="hljs-comment">// comment</span>
}
</code></pre>
<h5 id="valid-for-allexcept-firstaftercurly">Valid for <code>{ &quot;allExcept&quot;: &quot;firstAfterCurly&quot; }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;

<span class="hljs-comment">// comment</span>
<span class="hljs-keyword">return</span> a;

<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// comment</span>
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
<span class="hljs-comment">//comment</span>
<span class="hljs-keyword">return</span> a;

<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// comment</span>
}
</code></pre>
<h2 id="requireparenthesesaroundiife">requireParenthesesAroundIIFE</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires parentheses around immediately invoked function expressions.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#immed"><code>immed</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireParenthesesAroundIIFE"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>; })();
<span class="hljs-keyword">var</span> b = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>; }());
<span class="hljs-keyword">var</span> c = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>; }).call(<span class="hljs-keyword">this</span>, arg1);
<span class="hljs-keyword">var</span> d = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>; }.call(<span class="hljs-keyword">this</span>, arg1));
<span class="hljs-keyword">var</span> e = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> d; }).apply(<span class="hljs-keyword">this</span>, args);
<span class="hljs-keyword">var</span> f = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> d; }.apply(<span class="hljs-keyword">this</span>, args));
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>; }();
<span class="hljs-keyword">var</span> c = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>; }.call(<span class="hljs-keyword">this</span>, arg1);
<span class="hljs-keyword">var</span> d = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> d; }.apply(<span class="hljs-keyword">this</span>, args);
</code></pre>
<h2 id="requirespaceafterbinaryoperators">requireSpaceAfterBinaryOperators</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Disallows sticking binary operators to the right.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to require space after all possible binary operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterBinaryOperators"</span>: [
    <span class="hljs-string">"="</span>,
    <span class="hljs-string">","</span>,
    <span class="hljs-string">"+"</span>,
    <span class="hljs-string">"-"</span>,
    <span class="hljs-string">"/"</span>,
    <span class="hljs-string">"*"</span>,
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
    <span class="hljs-comment">// etc</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x + y;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x +y;
</code></pre>
<h2 id="requirespaceafterkeywords">requireSpaceAfterKeywords</h2>
<p><strong>Current value </strong> : <code>[
  &quot;if&quot;,
  &quot;else&quot;,
  &quot;for&quot;,
  &quot;while&quot;,
  &quot;do&quot;,
  &quot;switch&quot;,
  &quot;case&quot;,
  &quot;return&quot;,
  &quot;try&quot;,
  &quot;catch&quot;,
  &quot;typeof&quot;
]</code></p>
<p>Requires space after keyword.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted keywords or <code>true</code> to require all of the keywords below to have a space afterward.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterKeywords"</span>: [
    <span class="hljs-string">"do"</span>,
    <span class="hljs-string">"for"</span>,
    <span class="hljs-string">"if"</span>,
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"switch"</span>,
    <span class="hljs-string">"case"</span>,
    <span class="hljs-string">"try"</span>,
    <span class="hljs-string">"catch"</span>,
    <span class="hljs-string">"void"</span>,
    <span class="hljs-string">"while"</span>,
    <span class="hljs-string">"with"</span>,
    <span class="hljs-string">"return"</span>,
    <span class="hljs-string">"typeof"</span>,
    <span class="hljs-string">"function"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) {
    x++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span>(x) {
    x++;
}
</code></pre>
<h2 id="requirespacebeforebinaryoperators">requireSpaceBeforeBinaryOperators</h2>
<p><strong>Current value </strong> : <code>[
  &quot;?&quot;,
  &quot;+&quot;,
  &quot;-&quot;,
  &quot;/&quot;,
  &quot;*&quot;,
  &quot;=&quot;,
  &quot;==&quot;,
  &quot;===&quot;,
  &quot;!=&quot;,
  &quot;!==&quot;,
  &quot;&gt;&quot;,
  &quot;&gt;=&quot;,
  &quot;&lt;&quot;,
  &quot;&lt;=&quot;
]</code></p>
<p>Disallows sticking binary operators to the left.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to require space before all possible binary operators
without comma operator, since it&#39;s rarely used with this rule</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeBinaryOperators"</span>: [
    <span class="hljs-string">"="</span>,
    <span class="hljs-string">","</span>,
    <span class="hljs-string">"+"</span>,
    <span class="hljs-string">"-"</span>,
    <span class="hljs-string">"/"</span>,
    <span class="hljs-string">"*"</span>,
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
    <span class="hljs-comment">// etc</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x !== y;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x!== y;
</code></pre>
<h2 id="requirespacebeforeblockstatements">requireSpaceBeforeBlockStatements</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires space(s) before block statements (for loops, control structures).</p>
<p>Type: <code>Boolean</code> or <code>Integer</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> require <em>at least</em> a single space</li>
<li><code>Integer</code> require <em>at least</em> specified number of spaces</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeBlockStatements"</span>: <span class="hljs-number">1</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (cond) {
    foo();
} <span class="hljs-keyword">else</span> {
    bar();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements) {
    bar(e);
}

<span class="hljs-keyword">while</span> (cond) {
    foo();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (cond){
    foo();
} <span class="hljs-keyword">else</span>{
    bar();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements){
    bar(e);
}

<span class="hljs-keyword">while</span> (cond){
    foo();
}
</code></pre>
<h2 id="requirespacebetweenarguments">requireSpaceBetweenArguments</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Ensure there are spaces after argument separators in call expressions.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBetweenArguments"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">a(b, c);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">a(b,c);
</code></pre>
<h2 id="requirespacesinanonymousfunctionexpression">requireSpacesInAnonymousFunctionExpression</h2>
<p><strong>Current value </strong> : <code>{
  &quot;beforeOpeningCurlyBrace&quot;: true
}</code></p>
<p>Requires space before <code>()</code> or <code>{}</code> in anonymous function expressions.</p>
<p>Type: <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Object</code> with the following properties. One of <code>&quot;beforeOpeningRoundBrace&quot;</code>
and <code>&quot;beforeOpeningCurlyBrace&quot;</code> must be provided:<ul>
<li><code>&quot;beforeOpeningRoundBrace&quot;</code> validates that there is a space before
the opening round brace <code>()</code>. If provided, it must be set to <code>true</code>.</li>
<li><code>&quot;beforeOpeningCurlyBrace&quot;</code> validates that there is a space before
the opening curly brace <code>{}</code>. If provided, it must be set to <code>true</code>.</li>
<li><code>&quot;allExcept&quot;</code> may be an Array containing <code>&quot;shorthand&quot;</code>, or
the Boolean <code>true</code> to enable all configuration exceptions. If
<code>&quot;shorthand&quot;</code> is provided, spaces will not be required for
ES6 method definitions.</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInAnonymousFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> Foo = {
    foo: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{}
}
array.map(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> Foo = {
    foo: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{}
}
array.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{});
</code></pre>
<h2 id="requirespacesinconditionalexpression">requireSpacesInConditionalExpression</h2>
<p><strong>Current value </strong> : <code>true</code></p>
<p>Requires space before and/or after <code>?</code> or <code>:</code> in conditional expressions.</p>
<p>Types: <code>Object</code> or <code>Boolean</code></p>
<p>Values: <code>&quot;afterTest&quot;</code>, <code>&quot;beforeConsequent&quot;</code>, <code>&quot;afterConsequent&quot;</code>, <code>&quot;beforeAlternate&quot;</code> as child properties,
or <code>true</code> to set all properties to <code>true</code>. Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInConditionalExpression"</span>: {
    <span class="hljs-string">"afterTest"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeConsequent"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"afterConsequent"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeAlternate"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b ? c : d;
<span class="hljs-keyword">var</span> a= b ? c : d;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b? c : d;
<span class="hljs-keyword">var</span> a = b ?c : d;
<span class="hljs-keyword">var</span> a = b ? c: d;
<span class="hljs-keyword">var</span> a = b ? c :d;
</code></pre>
<h2 id="requirespacesinfunctionexpression">requireSpacesInFunctionExpression</h2>
<p><strong>Current value </strong> : <code>{
  &quot;beforeOpeningCurlyBrace&quot;: true
}</code></p>
<p>Requires space before <code>()</code> or <code>{}</code> in function expressions (both <a href="#requirespacesinnamedfunctionexpression">named</a>
and <a href="#requirespacesinanonymousfunctionexpression">anonymous</a>).</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
</code></pre>
<h2 id="requirespacesinnamedfunctionexpression">requireSpacesInNamedFunctionExpression</h2>
<p><strong>Current value </strong> : <code>{
  &quot;beforeOpeningCurlyBrace&quot;: true
}</code></p>
<p>Requires space before <code>()</code> or <code>{}</code> in named function expressions.</p>
<p>Types: <code>Object</code></p>
<ul>
<li><code>Object</code> (at least one of properties must be present and it must be set to true):<ul>
<li><code>&#39;beforeOpeningRoundBrace&#39;</code><ul>
<li><code>true</code> validates that there is a space before <code>()</code></li>
</ul>
</li>
<li><code>&#39;beforeOpeningCurlyBrace&#39;</code><ul>
<li><code>true</code> validates that there is a space before <code>{}</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInNamedFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInNamedFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInNamedFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid-for-mode-beforeopeningroundbrace-true-beforeopeningcurlybrace-true">Valid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true, &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="valid-for-mode-beforeopeningroundbrace-true">Valid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
</code></pre>
<h5 id="valid-for-mode-beforeopeningcurlybrace-true">Valid for mode <code>{ &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid-for-mode-beforeopeningroundbrace-true-beforeopeningcurlybrace-true">Invalid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true, &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
</code></pre>
<h2 id="safecontextkeyword">safeContextKeyword</h2>
<p><strong>Current value </strong> : <code>&quot;PleaseUseFunctionDotPrototypeDotBind&quot;</code></p>
<p>Option to check <code>var that = this</code> expressions</p>
<p>Types: <code>String</code>, <code>Array</code></p>
<p>Values:</p>
<ul>
<li><code>String</code>: represents the keyword that can assigned to <code>this</code> context</li>
<li><code>Array</code>: represents the list of keywords that can assigned to <code>this</code> context</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"safeContextKeyword"</span>: [<span class="hljs-string">"that"</span>]
</code></pre>
<h5 id="valid-for-mode-that">Valid for mode <code>[&quot;that&quot;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> that = <span class="hljs-keyword">this</span>;
</code></pre>
<h5 id="invalid-for-mode-that">Invalid for mode <code>[&quot;that&quot;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> _this = <span class="hljs-keyword">this</span>;
</code></pre>
<h2 id="validateindentation">validateIndentation</h2>
<p><strong>Current value </strong> : <code>2</code></p>
<p>Validates indentation for switch statements and block statements</p>
<p>Types: <code>Integer</code>, <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Integer</code>: A positive number of spaces</li>
<li><code>String</code>: <code>&quot;\t&quot;</code> for tab indentation</li>
<li><code>Object</code>:<ul>
<li><code>value</code>: (required) the same effect as the non-object values</li>
<li><code>includeEmptyLines</code> (<em>deprecated</em>): (default: <code>false</code>) require empty lines to be indented</li>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;comments&#39;</code> ignores comments</li>
<li><code>&#39;emptyLines&#39;</code> ignore empty lines, included by default</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#indent"><code>indent</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateIndentation"</span>: <span class="hljs-string">"\t"</span>
</code></pre>
<h5 id="valid-example-for-mode-2">Valid example for mode <code>2</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
  b=c;
  <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
    e=f;
  }
}
</code></pre>
<h5 id="invalid-example-for-mode-2">Invalid example for mode <code>2</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
   b=c;
<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
       e=f;
}
}
</code></pre>
<h5 id="valid-example-for-mode-t">Valid example for mode <code>&quot;\t&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
    b=c;
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
        e=f;
    }
}
</code></pre>
<h5 id="invalid-example-for-mode-t">Invalid example for mode <code>&quot;\t&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
     b=c;
<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
           e=f;
 }
}
</code></pre>
<h5 id="valid-example-for-mode-value-t-includeemptylines-true">Valid example for mode <code>{ &quot;value&quot;: &quot;\t&quot;, &quot;includeEmptyLines&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
    b=c;
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
        e=f;
    }

} <span class="hljs-comment">// single tab character on previous line</span>
</code></pre>
<h5 id="invalid-example-for-mode-value-t-includeemptylines-true">Invalid example for mode <code>{ &quot;value&quot;: &quot;\t&quot;, &quot;includeEmptyLines&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
    b=c;
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">d</span>) </span>{
        e=f;
    }

} <span class="hljs-comment">// no tab character on previous line</span>
</code></pre>
<h5 id="valid-example-for-mode-value-t-allexcept-comments">Valid example for mode <code>{ &quot;value&quot;: &quot;\t&quot;, &quot;allExcept&quot;: [&quot;comments&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a) {
    b=c;
<span class="hljs-comment">//    e=f</span>
}
</code></pre>
<h2 id="validatelinebreaks">validateLineBreaks</h2>
<p><strong>Current value </strong> : <code>&quot;LF&quot;</code></p>
<p>Option to check line break characters</p>
<p>Types: <code>String</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>String</code>: setting this is the same as validating the rule using <code>{character: String, reportOncePerFile: false}</code></li>
<li><code>Object</code>:<ul>
<li><code>character</code><ul>
<li><code>String</code> specifies the line break character that is allowed. (Values allowed: <code>&quot;CR&quot;</code>, <code>&quot;LF&quot;</code> or <code>&quot;CRLF&quot;</code>)</li>
</ul>
</li>
<li><code>reportOncePerFile</code><ul>
<li><code>true</code> specifies that validation for the file should stop running upon encountering the first rule
violation and return the details of that violation in the report</li>
<li><code>false</code> specifies that all lines in the file should be validated with all rule violations captured in
the final report</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateLineBreaks"</span>: <span class="hljs-string">"LF"</span>
</code></pre>
<h5 id="valid-for-mode-lf">Valid for mode <code>&quot;LF&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-title">LF</span>&gt;</span>
x++;</span>
</code></pre>
<h5 id="invalid-for-mode-lf">Invalid for mode <code>&quot;LF&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-title">CRLF</span>&gt;</span>
x++;</span>
</code></pre>
<h2 id="validatequotemarks">validateQuoteMarks</h2>
<p><strong>Current value </strong> : <code>&quot;&#39;&quot;</code></p>
<p>Requires all quote marks to be either the supplied value, or consistent if <code>true</code></p>
<p>Types: <code>Boolean</code>, <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>&quot;\&quot;&quot;</code>: all strings require double quotes</li>
<li><code>&quot;&#39;&quot;</code>: all strings require single quotes</li>
<li><code>true</code>: all strings require the quote mark first encountered in the source code</li>
<li><code>Object</code>:<ul>
<li><code>escape</code>: allow the &quot;other&quot; quote mark to be used, but only to avoid having to escape</li>
<li><code>mark</code>: the same effect as the non-object values</li>
<li><code>ignoreJSX</code>: ignore JSX nodes</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://jshint.com/docs/options/#quotmark"><code>quotmark</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateQuoteMarks"</span>: <span class="hljs-string">"\""</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"validateQuoteMarks"</span>: { <span class="hljs-string">"mark"</span>: <span class="hljs-string">"\""</span>, <span class="hljs-string">"escape"</span>: <span class="hljs-literal">true</span> }
</code></pre>
<h5 id="valid-example-for-mode-mark-escape-true">Valid example for mode <code>{ &quot;mark&quot;: &quot;\&quot;&quot;, &quot;escape&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"x"</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-string">'"x"'</span>;
</code></pre>
<h5 id="invalid-example-for-mode-mark-escape-true">Invalid example for mode <code>{ &quot;mark&quot;: &quot;\&quot;&quot;, &quot;escape&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"x"</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-string">'x'</span>;
</code></pre>
<h5 id="valid-example-for-mode-mark-escape-true-ignorejsx-true">Valid example for mode <code>{ &quot;mark&quot;: &quot;&#39;&quot;, &quot;escape&quot;: true, &quot;ignoreJSX&quot;: true }</code></h5>
<pre><code class="lang-js">&lt;div className=<span class="hljs-string">"flex-card__header"</span>&gt;{<span class="hljs-keyword">this</span>.props.children}&lt;<span class="hljs-regexp">/div&gt;;</span>
</code></pre>
<h5 id="valid-example-for-mode-or-mode-true">Valid example for mode <code>&quot;\&quot;&quot;</code> or mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"x"</span>;
</code></pre>
<h5 id="valid-example-for-mode-or-mode-true">Valid example for mode <code>&quot;&#39;&quot;</code> or mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">'x'</span>;
</code></pre>
<h5 id="invalid-example-for-mode-true">Invalid example for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"x"</span>, y = <span class="hljs-string">'y'</span>;
</code></pre>
<h1 id="disabled-rules">Disabled rules</h1>
<h2 id="disallowanonymousfunctions">disallowAnonymousFunctions</h2>
<p>Requires that a function expression be named.
Named functions provide more information in the error stack trace than anonymous functions.</p>
<p>This option does not help if you use Arrow functions (ES6) which are always anonymous.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowAnonymousFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)</span>{

};

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)</span>{

});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{

};

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{

});
</code></pre>
<h2 id="disallowarraydestructuringreturn">disallowArrayDestructuringReturn</h2>
<p>Requires object destructuring for multiple return values,
not array destructuring.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowArrayDestructuringReturn"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { left, right } = processInput(input);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> [ left, __, top ] = processInput(input);
</code></pre>
<h2 id="disallowarrowfunctions">disallowArrowFunctions</h2>
<p>Disallows arrow functions.</p>
<p>Why enable this rule? Arrow functions might cause more problems than they
solve:</p>
<ul>
<li>Object-orientation may be better without ECMAScript&#39;s <code>this</code>.</li>
<li>You can&#39;t name an arrow function.</li>
<li>Arrow functions&#39; syntax can cause maintenance issues; see
<code>disallowShorthandArrowFunctions</code>.</li>
<li>Arrow functions shouldn&#39;t be used on prototypes, as objects&#39; methods,
as event listeners, or as anything polymorhpic- or mixin-related. See
<a href="https://gist.github.com/qubyte/43e0093274e793cc82ba#gistcomment-1292183">here</a>.</li>
</ul>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowArrowFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// function expression in a callback</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x * x;
});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// arrow function</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x) =&gt; {
    <span class="hljs-keyword">return</span> x * x;
});
</code></pre>
<h2 id="disallowcapitalizedcomments">disallowCapitalizedComments</h2>
<p>Requires the first alphabetical character of a comment to be lowercase.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<p><code>&quot;disallowCapitalizedComments&quot;: true</code></p>
<p>Valid:</p>
<pre><code>// valid
//valid

/*
  valid
 */

/**
 * valid
 */

// 123 or any non-alphabetical starting character
</code></pre><p>Invalid:</p>
<pre><code>// Invalid
//Invalid
/** Invalid */
/**
 * Invalid
 */
</code></pre><h2 id="disallowcommabeforelinebreak">disallowCommaBeforeLineBreak</h2>
<p>Disallows commas as last token on a line in lists.</p>
<p>Type: <code>Boolean</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> for default behavior (strict mode, comma on the same line)</li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;function&#39;</code> ignores objects if one of their values is a function expression</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>JSHint: <a href="http://www.jshint.com/docs/options/#laxcomma"><code>laxcomma</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowCommaBeforeLineBreak"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    one: <span class="hljs-number">1</span>
    , two: <span class="hljs-number">2</span>
};
<span class="hljs-keyword">var</span> y = {three: <span class="hljs-number">3</span>, four: <span class="hljs-number">4</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    one: <span class="hljs-number">1</span>,
    two: <span class="hljs-number">2</span>
};
</code></pre>
<h5 id="valid-for-allexcept-function">Valid for <code>{&quot;allExcept&quot;: [&quot;function&quot;]}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    one: <span class="hljs-number">1</span>,
    two: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
};
</code></pre>
<h2 id="disallowcurlybraces">disallowCurlyBraces</h2>
<p>Disallows curly braces after statements.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted keywords or <code>true</code> to disallow curly braces after the following keywords:</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowCurlyBraces"</span>: [
    <span class="hljs-string">"if"</span>,
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"while"</span>,
    <span class="hljs-string">"for"</span>,
    <span class="hljs-string">"do"</span>,
    <span class="hljs-string">"with"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) x++;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) {
    x++;
}
</code></pre>
<h2 id="disallowfunctiondeclarations">disallowFunctionDeclarations</h2>
<p>Disallows function declarations.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowFunctionDeclarations"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> expressed = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

};

<span class="hljs-keyword">var</span> expressed = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deeply</span>(<span class="hljs-params"></span>) </span>{

};

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{

});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">stated</span>(<span class="hljs-params"></span>) </span>{

}
</code></pre>
<h2 id="disallowidenticaldestructuringnames">disallowIdenticalDestructuringNames</h2>
<p>Disallows identical destructuring names for the key and value in favor of using shorthand destructuring.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowIdenticalDestructuringNames"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> {left, top} = obj; <span class="hljs-comment">// shorthand</span>
<span class="hljs-keyword">var</span> {left, top: topper} = obj; <span class="hljs-comment">// different identifier</span>
<span class="hljs-keyword">let</span> { [key]: key } = obj; <span class="hljs-comment">// computed property</span>
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> {left: left, top: top} = obj;
</code></pre>
<h2 id="disallowidentifiernames">disallowIdentifierNames</h2>
<p>Disallows a specified set of identifier names.</p>
<p>Type: <code>Array</code></p>
<p>Values: Array of strings, which should be disallowed as identifier names</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowIdentifierNames"</span>: [<span class="hljs-string">'temp'</span>, <span class="hljs-string">'foo'</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> good = <span class="hljs-number">1</span>;
object[<span class="hljs-string">'fine'</span>] = <span class="hljs-number">2</span>;
object.fine = <span class="hljs-number">3</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> temp = <span class="hljs-number">1</span>;
object[<span class="hljs-string">'foo'</span>] = <span class="hljs-number">2</span>;
object.foo = <span class="hljs-number">3</span>;
</code></pre>
<h2 id="disallowimplicittypeconversion">disallowImplicitTypeConversion</h2>
<p>Disallows implicit type conversion.</p>
<p>Type: <code>Array</code></p>
<p>Values: Array of quoted types</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowImplicitTypeConversion"</span>: [<span class="hljs-string">"numeric"</span>, <span class="hljs-string">"boolean"</span>, <span class="hljs-string">"binary"</span>, <span class="hljs-string">"string"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = <span class="hljs-built_in">Boolean</span>(y);
x = <span class="hljs-built_in">Number</span>(y);
x = <span class="hljs-built_in">String</span>(y);
x = s.indexOf(<span class="hljs-string">'.'</span>) !== -<span class="hljs-number">1</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = !!y;
x = +y;
x = <span class="hljs-string">''</span> + y;
x = ~s.indexOf(<span class="hljs-string">'.'</span>);
</code></pre>
<h2 id="disallowkeywordsincomments">disallowKeywordsInComments</h2>
<p>Disallows keywords in your comments, such as TODO or FIXME</p>
<p>Types: <code>Boolean</code>, <code>String</code> or <code>Array</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&#39;\b(word1|word2)\b&#39;</code></li>
<li><code>[&#39;word1&#39;, &#39;word2&#39;]</code></li>
</ul>
<h4 id="examples">Examples</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowKeywordsInComments"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"disallowKeywordsInComments"</span>: <span class="hljs-string">"\\b(word1|word2)\\b"</span>
<span class="hljs-string">"disallowKeywordsInComments"</span>: [<span class="hljs-string">"word1"</span>, <span class="hljs-string">"word2"</span>]
</code></pre>
<h4 id="invalid">Invalid:</h4>
<pre><code>// ToDo
//TODO
/** fixme */
/**
 * FIXME
 */
</code></pre><h2 id="disallowmultilineternary">disallowMultiLineTernary</h2>
<p>Disallows the test, consequent and alternate to be on separate lines when using the ternary operator.</p>
<p>Types: <code>Boolean</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMultiLineTernary"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b) ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b)
  ? <span class="hljs-number">1</span>
  : <span class="hljs-number">2</span>;
</code></pre>
<h2 id="disallowmultiplespaces">disallowMultipleSpaces</h2>
<p>Disallows multiple indentation characters (tabs or spaces) between identifiers, keywords, and any other token</p>
<p>Type: <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> or <code>{&quot;allowEOLComments&quot;: true}</code> to allow on-line comments to be ignored</p>
<h4 id="examples">Examples</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowMultipleSpaces"</span>: <span class="hljs-literal">true</span>
<span class="hljs-comment">// or</span>
<span class="hljs-string">"disallowMultipleSpaces"</span>: {<span class="hljs-string">"allowEOLComments"</span>: <span class="hljs-literal">true</span>}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"hello"</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">y</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="valid-for-alloweolcomments-true">Valid for <code>{&quot;allowEOLComments&quot;: true}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-string">"hello"</span>    <span class="hljs-comment">// world;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">y</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x  = <span class="hljs-string">"hello"</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span>  <span class="hljs-title">y</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h2 id="disallownamedunassignedfunctions">disallowNamedUnassignedFunctions</h2>
<p>Disallows unassigned functions to be named inline</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNamedUnassignedFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">[].forEach(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">y</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">[].forEach(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{});
</code></pre>
<h2 id="disallownestedternaries">disallowNestedTernaries</h2>
<p>Disallows nested ternaries.</p>
<p>Types: <code>Boolean</code>, <code>Object</code></p>
<p>Values: <code>true</code> or an Object that contains a <code>maxLevel</code> property equal to an integer
indicating the maximum levels of nesting to be allowed.</p>
<h4 id="examples">Examples</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNestedTernaries"</span>: <span class="hljs-literal">true</span>

<span class="hljs-comment">// or</span>

<span class="hljs-string">"disallowNestedTernaries"</span>: { <span class="hljs-string">"maxLevel"</span>: <span class="hljs-number">1</span> }
</code></pre>
<h5 id="valid-for-modes-true-and-maxlevel-1">Valid for modes <code>true</code> and <code>&quot;maxLevel&quot;: 1</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b) ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
</code></pre>
<h5 id="invalid-for-mode-true-but-valid-for-maxlevel-1">Invalid for mode <code>true</code>, but valid for <code>&quot;maxLevel&quot;: 1</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b)
  ? (a === c)
    ? <span class="hljs-number">1</span>
    : <span class="hljs-number">2</span>
  : (b === c)
    ? <span class="hljs-number">3</span>
    : <span class="hljs-number">4</span>;
</code></pre>
<h5 id="invalid-for-modes-true-and-maxlevel-1">Invalid for modes <code>true</code> and <code>&quot;maxLevel&quot;: 1</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b)
  ? (a === c)
    ? (c === d)
      ? <span class="hljs-number">5</span>
      : <span class="hljs-number">6</span>
    : <span class="hljs-number">2</span>
  : (b === c)
    ? <span class="hljs-number">3</span>
    : <span class="hljs-number">4</span>;
</code></pre>
<h2 id="disallownewlinebeforeblockstatements">disallowNewlineBeforeBlockStatements</h2>
<p>Disallows newline before opening curly brace of all block statements.</p>
<p>Type: <code>Boolean</code> or <code>Array</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> always disallows newline before curly brace of block statements</li>
<li><code>Array</code> specifies block-type keywords after which newlines are disallowed before curly brace<ul>
<li>Valid types include: <code>[&#39;if&#39;, &#39;else&#39;, &#39;try&#39;, &#39;catch&#39;, &#39;finally&#39;, &#39;do&#39;, &#39;while&#39;, &#39;for&#39;, &#39;function&#39;, &#39;class&#39;,
&#39;switch&#39;]</code></li>
</ul>
</li>
<li><code>Object</code>:<ul>
<li><code>value</code>: <code>true</code> or an Array</li>
<li><code>allExcept</code>: Array of exceptions<ul>
<li><code>&quot;multiLine&quot;</code>: if the conditions span on multiple lines, require a new line before the curly brace</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNewlineBeforeBlockStatements"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">good</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">var</span> obj = {
        val: <span class="hljs-literal">true</span>
    };

    <span class="hljs-keyword">return</span> {
        data: obj
    };
}

<span class="hljs-keyword">if</span> (cond){
    foo();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements){
    bar(e);
}

<span class="hljs-keyword">while</span> (cond){
    foo();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bad</span>(<span class="hljs-params"></span>)
</span>{
    <span class="hljs-keyword">var</span> obj =
    {
        val: <span class="hljs-literal">true</span>
    };

    <span class="hljs-keyword">return</span> {
        data: obj
    };
}

<span class="hljs-keyword">if</span> (cond)
{
    foo();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements)
{
    bar(e);
}

<span class="hljs-keyword">while</span> (cond)
{
    foo();
}
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNewlineBeforeBlockStatements"</span>: [<span class="hljs-string">"if"</span>, <span class="hljs-string">"else"</span>, <span class="hljs-string">"for"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (i &gt; <span class="hljs-number">0</span>) {
    positive = <span class="hljs-literal">true</span>;
}

<span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>) {
    negative = <span class="hljs-literal">true</span>;
} <span class="hljs-keyword">else</span> {
    negative = <span class="hljs-literal">false</span>;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i) {
    newList.push(myList[i]);
}

<span class="hljs-comment">// this is fine, since "function" wasn't configured</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>)
</span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>)
{
    negative = <span class="hljs-literal">true</span>;
}

<span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>)
{
    negative = <span class="hljs-literal">true</span>;
}
<span class="hljs-keyword">else</span>
{
    negative = <span class="hljs-literal">false</span>;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i)
{
    newList.push(myList[i]);
}
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNewlineBeforeBlockStatements"</span>: [<span class="hljs-string">"function"</span>, <span class="hljs-string">"while"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">var</span> z = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x - <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// this is fine, since "for" wasn't configured</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i)
{
    newList.push(myList[i]);
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>)
</span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">var</span> z = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>)
</span>{
    <span class="hljs-keyword">return</span> x - <span class="hljs-number">1</span>;
}
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNewlineBeforeBlockStatements"</span>: {
    <span class="hljs-string">"value"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"multiLine"</span>]
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x,
                y</span>)
</span>{
    <span class="hljs-keyword">return</span> x + y;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (bar &amp;&amp; baz &amp;&amp;
        bat)
    {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x,
                y</span>) </span>{
    <span class="hljs-keyword">return</span> x + y;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (bar &amp;&amp; baz &amp;&amp;
        bat) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}
</code></pre>
<h2 id="disallownodetypes">disallowNodeTypes</h2>
<p>Disallow use of certain node types (from Esprima/ESTree).</p>
<p>Esprima node types</p>
<ul>
<li><a href="https://github.com/jquery/esprima/blob/758196a1c5dd20c3ead6300283a1112428bc7045/esprima.js#L108-L169">list</a></li>
</ul>
<p>Type: <code>Array</code></p>
<p>Value: Array of parser node types to be disallowed.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNodeTypes"</span>: [<span class="hljs-string">'LabeledStatement'</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// use of an allowed node type</span>
<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
<span class="hljs-comment">// shorthand form of arrow function that returns an object</span>
<span class="hljs-keyword">var</span> f = () =&gt; ({ a: <span class="hljs-number">1</span> });
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// label statement with loop</span>
loop1:
<span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
    <span class="hljs-keyword">if</span> (i === <span class="hljs-number">3</span>) {
        <span class="hljs-keyword">break</span> loop1;
    }
}
<span class="hljs-comment">// accidental label statement with arrow function</span>
<span class="hljs-keyword">var</span> f = () =&gt; { a: <span class="hljs-number">1</span> };
<span class="hljs-comment">// label statement</span>
{ a: <span class="hljs-number">1</span> }
</code></pre>
<h2 id="disallownotoperatorsinconditionals">disallowNotOperatorsInConditionals</h2>
<p>Disallows the not, not equals, and strict not equals operators in conditionals.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNotOperatorsInConditionals"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (clause) {
    <span class="hljs-comment">// Do something really crazy</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something crazy</span>
}

<span class="hljs-keyword">if</span> (a == <span class="hljs-number">1</span>) {
    <span class="hljs-comment">// Do something really crazy</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something crazy</span>
}

<span class="hljs-keyword">var</span> a = (clause) ? <span class="hljs-number">1</span> : <span class="hljs-number">0</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (!clause) {
    <span class="hljs-comment">// Do something crazy</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something really crazy</span>
}

<span class="hljs-keyword">if</span> (a != <span class="hljs-number">1</span>) {
    <span class="hljs-comment">// Do something crazy</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something really crazy</span>
}

<span class="hljs-keyword">if</span> (a !== <span class="hljs-number">1</span>) {
    <span class="hljs-comment">// Do something crazy</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something really crazy</span>
}

<span class="hljs-keyword">var</span> a = (!clause) ? <span class="hljs-number">0</span> : <span class="hljs-number">1</span>
</code></pre>
<h2 id="disallowobjectkeysonnewline">disallowObjectKeysOnNewLine</h2>
<p>Disallows placing object keys on new line</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowObjectKeysOnNewLine"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>, c: <span class="hljs-string">'c'</span>
};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>,
    c: <span class="hljs-string">'c'</span>
};
</code></pre>
<h2 id="disallowoperatorbeforelinebreak">disallowOperatorBeforeLineBreak</h2>
<p>Requires putting certain operators on the next line rather than on the current line before a line break.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of operators to apply to or <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowOperatorBeforeLineBreak"</span>: [<span class="hljs-string">"+"</span>, <span class="hljs-string">"."</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">$el.on( <span class="hljs-string">'click'</span>, fn )
    .appendTo( <span class="hljs-string">'body'</span> );

<span class="hljs-keyword">var</span> x = <span class="hljs-number">4</span> + <span class="hljs-number">5</span>
    + <span class="hljs-number">12</span> + <span class="hljs-number">13</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">$el.on( <span class="hljs-string">'click'</span>, fn ).
    appendTo( <span class="hljs-string">'body'</span> );

<span class="hljs-keyword">var</span> x = <span class="hljs-number">4</span> + <span class="hljs-number">5</span> +
    <span class="hljs-number">12</span> + <span class="hljs-number">13</span>;
</code></pre>
<h2 id="disallowpaddingnewlinesafterblocks">disallowPaddingNewLinesAfterBlocks</h2>
<p>Disallow a newline after blocks</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewLinesAfterBlocks"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">  * <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {
        <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
        <span class="hljs-keyword">continue</span>;
    }
    <span class="hljs-keyword">var</span> obj = {
        foo: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        },
        bar: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    };
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {
        <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }

        <span class="hljs-keyword">continue</span>;
    }

    <span class="hljs-keyword">var</span> obj = {
        foo: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        },

        bar: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    };
}
</code></pre>
<h2 id="disallowpaddingnewlinesafterusestrict">disallowPaddingNewLinesAfterUseStrict</h2>
<p>Disallow a blank line after <code>&#39;use strict&#39;;</code> statements</p>
<p>Values: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewLinesAfterUseStrict"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-pi">'use strict'</span>;
<span class="hljs-comment">// code</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-comment">// code</span>
</code></pre>
<h2 id="disallowpaddingnewlinesbeforeexport">disallowPaddingNewLinesBeforeExport</h2>
<p>Disallows newline before module.exports</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewLinesBeforeExport"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
<span class="hljs-built_in">module</span>.exports = a;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;

<span class="hljs-built_in">module</span>.exports = a;
</code></pre>
<h2 id="disallowpaddingnewlinesbeforekeywords">disallowPaddingNewlinesBeforeKeywords</h2>
<p>Disallow an empty line above the specified keywords.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted types or <code>true</code> to disallow padding new lines after all of the keywords below.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewlinesBeforeKeywords"</span>: [
    <span class="hljs-string">"do"</span>,
    <span class="hljs-string">"for"</span>,
    <span class="hljs-string">"if"</span>,
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"switch"</span>,
    <span class="hljs-string">"case"</span>,
    <span class="hljs-string">"try"</span>,
    <span class="hljs-string">"catch"</span>,
    <span class="hljs-string">"void"</span>,
    <span class="hljs-string">"while"</span>,
    <span class="hljs-string">"with"</span>,
    <span class="hljs-string">"return"</span>,
    <span class="hljs-string">"typeof"</span>,
    <span class="hljs-string">"function"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {

            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }

    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h2 id="disallowpaddingnewlinesbeforelinecomments">disallowPaddingNewLinesBeforeLineComments</h2>
<p>Disallows newline before line comments</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewLinesBeforeLineComments"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
<span class="hljs-comment">// comment</span>
<span class="hljs-keyword">return</span> a;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;

<span class="hljs-comment">//comment</span>
<span class="hljs-keyword">return</span> a;
</code></pre>
<h2 id="disallowpaddingnewlinesinblocks">disallowPaddingNewlinesInBlocks</h2>
<p>Disallows blocks from beginning or ending with 2 newlines.</p>
<p>Type: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> validates all non-empty blocks.</li>
<li><code>Object</code>:<ul>
<li><code>&#39;open&#39;</code><ul>
<li><ul>
<li><code>true</code> validates that there is a newline after the opening brace in a block</li>
</ul>
</li>
<li><ul>
<li><code>false</code> ignores the newline validation after the opening brace in a block</li>
</ul>
</li>
</ul>
</li>
<li><code>&#39;close&#39;</code><ul>
<li><code>true</code> validates that there is a newline before the closing brace in a block</li>
<li><code>false</code> ignores the newline validation before the closing brace in a block</li>
</ul>
</li>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;conditionals&#39;</code> ignores conditional (if, else if, else) blocks</li>
<li><code>&#39;functions&#39;</code> ignores function blocks</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewlinesInBlocks"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"disallowPaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"open"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"close"</span>: <span class="hljs-literal">false</span> }
<span class="hljs-string">"disallowPaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"conditionals"</span> ] }
<span class="hljs-string">"disallowPaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"open"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"close"</span>: <span class="hljs-literal">false</span>, allExcept: [<span class="hljs-string">'conditionals'</span>] }
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {doSomething();}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="valid-for-mode-open-true-close-false">Valid for mode <code>{ &quot;open&quot;: true, &quot;close&quot;: false }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();

}
</code></pre>
<h5 id="valid-for-allexcept-conditionals">Valid for <code>{ allExcept: [&#39;conditionals&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();

}

<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{
    <span class="hljs-keyword">return</span> bar;
}
</code></pre>
<h5 id="valid-for-open-true-close-false-allexcept-conditionals">Valid for <code>{  &quot;open&quot;: true, &quot;close&quot;: false, allExcept: [&#39;conditionals&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{
    <span class="hljs-keyword">return</span> bar;

}

<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();

}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();

}
</code></pre>
<h2 id="disallowpaddingnewlinesinobjects">disallowPaddingNewLinesInObjects</h2>
<p>Disallows newlines adjacent to curly braces in all object literals.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowPaddingNewLinesInObjects"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: <span class="hljs-number">1</span> };
<span class="hljs-keyword">var</span> y = { a: <span class="hljs-number">1</span>,
          b: <span class="hljs-number">2</span> };
<span class="hljs-keyword">var</span> z = { a: <span class="hljs-number">2</span>,
          b: <span class="hljs-number">2</span>,

          c: <span class="hljs-number">3</span>,



          d: <span class="hljs-number">4</span> };
foo({a: {b: <span class="hljs-number">1</span>}});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    a: <span class="hljs-number">1</span>
};
foo({
    a: {
        b: <span class="hljs-number">1</span>
    }
});
</code></pre>
<h2 id="disallowparenthesesaroundarrowparam">disallowParenthesesAroundArrowParam</h2>
<p>Disallows parentheses around arrow function expressions with a single parameter.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowParenthesesAroundArrowParam"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(x =&gt; x * x);
<span class="hljs-comment">// parentheses are always required for multiple parameters</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x, y, z) =&gt; x * x);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x) =&gt; x * x);
</code></pre>
<h2 id="disallowsemicolons">disallowSemicolons</h2>
<p>Disallows lines from ending in a semicolon.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSemicolons"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
;[b].forEach(c)
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
[b].forEach(c);
</code></pre>
<h2 id="disallowshorthandarrowfunctions">disallowShorthandArrowFunctions</h2>
<p>Require arrow functions to use a block statement (explicit return).</p>
<p>Why enable this rule? Arrow functions&#39; syntax can cause maintenance issues:</p>
<ul>
<li>When you add additional lines to an arrow function&#39;s expression body, the
function will now return <code>undefined</code>, unless you remember to add an
explicit <code>return</code>.</li>
<li>The shorthand syntax is ambiguous in terms of returning objects.
<code>(name) =&gt; {id: name}</code> is interpreted as a longhand arrow function with the
label <code>id:</code>.</li>
</ul>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowShorthandArrowFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// block statement</span>
evens.map(v =&gt; {
    <span class="hljs-keyword">return</span> v + <span class="hljs-number">1</span>;
});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// single expression</span>
evens.map(v =&gt; v + <span class="hljs-number">1</span>);
</code></pre>
<h2 id="disallowspaceafterbinaryoperators">disallowSpaceAfterBinaryOperators</h2>
<p>Requires sticking binary operators to the right.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to disallow space after all possible binary operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterBinaryOperators"</span>: [
    <span class="hljs-string">"="</span>,
    <span class="hljs-string">","</span>,
    <span class="hljs-string">"+"</span>,
    <span class="hljs-string">"-"</span>,
    <span class="hljs-string">"/"</span>,
    <span class="hljs-string">"*"</span>,
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
    <span class="hljs-comment">// etc</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x +y;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x+ y;
</code></pre>
<h2 id="disallowspaceaftercomma">disallowSpaceAfterComma</h2>
<p>Disallows spaces after commas</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Boolean</code>: <code>true</code> to disallow any spaces after any comma</li>
<li><code>Object</code>: <code>&quot;allExcept&quot;</code> array of exceptions<ul>
<li><code>&quot;sparseArrays&quot;</code> to allow spaces in place of absent values in sparse arrays</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterComma"</span> {<span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"sparseArrays"</span>]}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js">[a,b,c];
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js">[a, b, c];
</code></pre>
<pre><code class="lang-js">[a,b, , ,c];
</code></pre>
<h5 id="valid-for-mode-allexcept-sparsearrays">Valid for mode <code>{&quot;allExcept&quot;: [&quot;sparseArrays&quot;]}</code></h5>
<pre><code class="lang-js">[a,b, , ,c];
</code></pre>
<h5 id="invalid-for-mode-allexcept-sparsearrays">Invalid for mode <code>{&quot;allExcept&quot;: [&quot;sparseArrays&quot;]}</code></h5>
<pre><code class="lang-js">[a, b, , , c];
``




## disallowSpaceAfterKeywords


Disallows space after keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to disallow spaces after all possible keywords.

#### Example

```js
&quot;disallowSpaceAfterKeywords&quot;: [
    &quot;if&quot;,
    &quot;else&quot;,
    &quot;for&quot;,
    &quot;while&quot;,
    &quot;do&quot;,
    &quot;switch&quot;,
    &quot;try&quot;,
    &quot;catch&quot;
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span>(x &gt; y) {
    y++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &gt; y) {
    y++;
}
</code></pre>
<h2 id="disallowspaceafterlinecomment">disallowSpaceAfterLineComment</h2>
<p>Requires that a line comment (<code>//</code>) not be followed by a space.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceAfterLineComment"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">//A comment</span>
<span class="hljs-comment">/* A comment*/</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// A comment</span>
</code></pre>
<h2 id="disallowspacebeforeblockstatements">disallowSpaceBeforeBlockStatements</h2>
<p>Disallows space before block statements (for loops, control structures).</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeBlockStatements"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (cond){
    foo();
} <span class="hljs-keyword">else</span>{
   bar();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements){
    bar(e);
}

<span class="hljs-keyword">while</span> (cond){
    foo();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (cond) {
    foo();
} <span class="hljs-keyword">else</span> {
   bar();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements) {
    bar(e);
}

<span class="hljs-keyword">while</span> (cond) {
    foo();
}
</code></pre>
<h2 id="disallowspacebeforecomma">disallowSpaceBeforeComma</h2>
<p>Disallows spaces before commas</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Boolean</code>: <code>true</code> to disallow any spaces before any comma</li>
<li><code>Object</code>: <code>&quot;allExcept&quot;</code> array of exceptions<ul>
<li><code>&quot;sparseArrays&quot;</code> to allow spaces in place of absent values in sparse arrays</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeComma"</span>: {<span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"sparseArrays"</span>]}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a, b;
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a ,b;
</code></pre>
<pre><code class="lang-js">[a, b, , , c]
</code></pre>
<h5 id="valid-for-mode-allexcept-sparsearrays">Valid for mode <code>{&quot;allExcept&quot;: [&quot;sparseArrays&quot;]}</code></h5>
<pre><code class="lang-js">[a, b, , , c]
</code></pre>
<h5 id="invalid-for-mode-allexcept-sparsearrays">Invalid for mode  <code>{&quot;allExcept&quot;: [&quot;sparseArrays&quot;]}</code></h5>
<pre><code class="lang-js">[a , b , , , c]
</code></pre>
<h2 id="disallowspacebeforekeywords">disallowSpaceBeforeKeywords</h2>
<p>Disallows space before keyword.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted keywords or <code>true</code> to disallow spaces before all possible keywords.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeKeywords"</span>: [
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"catch"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">}<span class="hljs-keyword">else</span> {
    y--;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">} <span class="hljs-keyword">else</span> {
    y--;
}
</code></pre>
<h2 id="disallowspacebeforeobjectvalues">disallowSpaceBeforeObjectValues</h2>
<p>Disallows space before object values.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeObjectValues"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a:<span class="hljs-number">1</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
</code></pre>
<h2 id="disallowspacebeforesemicolon">disallowSpaceBeforeSemicolon</h2>
<p>Disallows spaces before semicolons.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> to disallow any spaces before any semicolon.</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: <code>[ &quot;(&quot; ]</code> list of tokens that can occur after semicolon</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBeforeSemicolon"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
</code></pre>
<ul>
<li><h5 id="valid-for-mode-allexcept">Valid for mode <code>{ &quot;allExcept&quot;: [ &quot;(&quot; ] }</code></h5>
</li>
</ul>
<pre><code class="lang-js"><span class="hljs-keyword">for</span> ( ; nodeIndex &lt; nodesCount; ++nodeIndex ) {}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span> ;
</code></pre>
<h2 id="disallowspacebetweenarguments">disallowSpaceBetweenArguments</h2>
<p>Ensure there are no spaces after argument separators in call expressions.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpaceBetweenArguments"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">a(b,c);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">a(b, c);
</code></pre>
<h2 id="disallowspacesinanonymousfunctionexpression">disallowSpacesInAnonymousFunctionExpression</h2>
<p>Disallows space before <code>()</code> or <code>{}</code> in anonymous function expressions.</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInAnonymousFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> Foo = {
    foo: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{}
}
array.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> Foo = {
    foo: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{}
}
array.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{});
</code></pre>
<h2 id="disallowspacesincallexpression">disallowSpacesInCallExpression</h2>
<p>Disallows space before <code>()</code> in call expressions.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInCallExpression"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foobar();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foobar ();
</code></pre>
<h2 id="disallowspacesinconditionalexpression">disallowSpacesInConditionalExpression</h2>
<p>Disallows space before and/or after <code>?</code> or <code>:</code> in conditional expressions.</p>
<p>Types: <code>Object</code> or <code>Boolean</code></p>
<p>Values: <code>&quot;afterTest&quot;</code>, <code>&quot;beforeConsequent&quot;</code>, <code>&quot;afterConsequent&quot;</code>, <code>&quot;beforeAlternate&quot;</code> as child properties,
or <code>true</code> to set all properties to true. Child properties must be set to <code>true</code>. These token names correspond to:</p>
<pre><code>var a = b ? c : d;
         ^ ^ ^ ^
         | | | |
         | | | └- beforeAlternate
         | | └--- afterConsequent
         | └-------- beforeConsequent
         └---------- afterTest
</code></pre><h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInConditionalExpression"</span>: {
    <span class="hljs-string">"afterTest"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeConsequent"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"afterConsequent"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeAlternate"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b?c:d;
<span class="hljs-keyword">var</span> a= b?c:d;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = b ?c:d;
<span class="hljs-keyword">var</span> a = b? c:d;
<span class="hljs-keyword">var</span> a = b?c :d;
<span class="hljs-keyword">var</span> a = b?c: d;
</code></pre>
<h2 id="disallowspacesinforstatement">disallowSpacesInForStatement</h2>
<p>Disallow spaces in between for statement.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code> to disallow spaces in between for statement.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInForStatement"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>;i&lt;l;i++) {
    x++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;l; i++) {
    x++;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;l;i++) {
    x++;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>;i&lt;l; i++) {
    x++;
}
</code></pre>
<h2 id="disallowspacesinfunctiondeclaration">disallowSpacesInFunctionDeclaration</h2>
<p>Disallows space before <code>()</code> or <code>{}</code> in function declarations.</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInFunctionDeclaration"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{}
</code></pre>
<h2 id="disallowspacesinfunctionexpression">disallowSpacesInFunctionExpression</h2>
<p>Disallows space before <code>()</code> or <code>{}</code> in function expressions (both <a href="#disallowspacesinnamedfunctionexpression">named</a>
and <a href="#disallowspacesinanonymousfunctionexpression">anonymous</a>).</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInFunctionExpression"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
</code></pre>
<h2 id="disallowspacesinfunction">disallowSpacesInFunction</h2>
<p>Disallows space before <code>()</code> or <code>{}</code> in function expressions (both <a href="#disallowspacesinnamedfunctionexpression">named</a>
and <a href="#disallowspacesinanonymousfunctionexpression">anonymous</a>) and function declarations.</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInFunction"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{}
</code></pre>
<h2 id="disallowspacesingenerator">disallowSpacesInGenerator</h2>
<p>Disallow space before or after <code>*</code> in generator functions</p>
<p>Types: <code>Object</code></p>
<ul>
<li><code>Object</code> (at least one of properties must be present and it must be set to true):<ul>
<li><code>&#39;beforeStar&#39;</code><ul>
<li><code>true</code> disallows space before <code>*</code></li>
</ul>
</li>
<li><code>&#39;afterStar&#39;</code><ul>
<li><code>true</code> disallows space after <code>*</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInGenerator"</span>: {
    <span class="hljs-string">"beforeStar"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"afterStar"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid-for-mode-beforestar-true-afterstar-false">Valid for mode <code>{ &quot;beforeStar&quot;: true, &quot;afterStar&quot;: false }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>* (<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>* (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>* (<span class="hljs-params"></span>)</span>{};
</code></pre>
<h5 id="valid-for-mode-beforestar-false-afterstar-true">Valid for mode <code>{ &quot;beforeStar&quot;: false, &quot;afterStar&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> *(<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> *<span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> *(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> *<span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> *<span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> *(<span class="hljs-params"></span>)</span>{};
</code></pre>
<h2 id="disallowspacesinsidebrackets">disallowSpacesInsideBrackets</h2>
<p>Disallows space after opening square bracket and before closing.
Reports on all on brackets, even on property accessors.
Use <a href="http://jscs.info/rule/disallowSpacesInsideArrayBrackets.html">disallowSpacesInsideArrayBrackets</a>
to exclude property accessors.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> for strict mode, or <code>&quot;allExcept&quot;: [ &quot;[&quot;, &quot;]&quot; ]</code>
ignores closing brackets in a row.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideBrackets"</span>: <span class="hljs-literal">true</span>

<span class="hljs-comment">// or</span>

<span class="hljs-string">"disallowSpacesInsideBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"["</span>, <span class="hljs-string">"]"</span>, <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [[<span class="hljs-number">1</span>]];
<span class="hljs-keyword">var</span> x = a[<span class="hljs-number">1</span>];
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>{ allExcept&quot;: [ &quot;[&quot;, &quot;]&quot;, &quot;{&quot;, &quot;}&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ [<span class="hljs-number">1</span>] ];
<span class="hljs-keyword">var</span> x = [ { a: <span class="hljs-number">1</span> } ];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ [ <span class="hljs-number">1</span> ] ];
</code></pre>
<h2 id="disallowspacesinsideobjectbrackets">disallowSpacesInsideObjectBrackets</h2>
<p>Disallows space after opening object curly brace and before closing.</p>
<p>Types: <code>Object</code>, <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>&quot;all&quot;</code> or <code>true</code> for strict mode, <code>&quot;nested&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [&#39;}&#39;]</code>)
ignores closing brackets in a row.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideObjectBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"}"</span>, <span class="hljs-string">")"</span> ]
}

<span class="hljs-comment">// or</span>
<span class="hljs-string">"disallowSpacesInsideObjectBrackets"</span>: <span class="hljs-literal">true</span> | <span class="hljs-string">"all"</span> | <span class="hljs-string">"nested"</span>
</code></pre>
<h5 id="valid-for-mode-all">Valid for mode <code>&quot;all&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: {b: <span class="hljs-number">1</span>}};
</code></pre>
<h5 id="valid-for-mode-nested">Valid for mode <code>&quot;nested&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: {b: <span class="hljs-number">1</span>} };
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>&quot;allExcept&quot;: [&quot;}&quot;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: {b: <span class="hljs-number">1</span>} };
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: { b: <span class="hljs-number">1</span> } };
</code></pre>
<h2 id="disallowspacesinsideparenthesizedexpression">disallowSpacesInsideParenthesizedExpression</h2>
<p>Disallows space after opening and before closing grouping parentheses.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: always disallow spaces inside grouping parentheses</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: <code>[ &quot;{&quot;, &quot;}&quot;, &quot;function&quot; ]</code> Ignore parenthesized objects and functions</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideParenthesizedExpression"</span>: <span class="hljs-literal">true</span>

<span class="hljs-comment">// or</span>

<span class="hljs-string">"disallowSpacesInsideParenthesizedExpression"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = (<span class="hljs-number">1</span> + obj.size) * (<span class="hljs-number">2</span>);
</code></pre>
<h5 id="valid-for-mode-allexcept-function">Valid for mode <code>{ allExcept&quot;: [ &quot;{&quot;, &quot;}&quot;, &quot;function&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = (options || { x: <span class="hljs-literal">true</span> } ).x;
<span class="hljs-keyword">var</span> global = ( <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>; } )();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = ( <span class="hljs-number">1</span> + obj.size ) * ( <span class="hljs-number">2</span> );
</code></pre>
<h2 id="disallowspacesinsidetemplatestringplaceholders">disallowSpacesInsideTemplateStringPlaceholders</h2>
<p>Disallows spaces before and after curly brace inside template string placeholders.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowSpacesInsideTemplateStringPlaceholders"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-string">`Hello <span class="hljs-subst">${name}</span>!`</span>
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-string">`Hello <span class="hljs-subst">${ name}</span>!`</span>
<span class="hljs-string">`Hello <span class="hljs-subst">${name }</span>!`</span>
<span class="hljs-string">`Hello <span class="hljs-subst">${ name }</span>!`</span>
</code></pre>
<h2 id="disallowtabs">disallowTabs</h2>
<p>Disallows tabs everywhere.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowTabs"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
\s\sfoo();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>){
\tfoo();
}
</code></pre>
<h2 id="disallowunusedparams">disallowUnusedParams</h2>
<p>Disallows unused params in function expression and function declaration.</p>
<p>Types: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowUnusedParams"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params">test</span>) </span>{
    <span class="hljs-keyword">return</span> test;
}

<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">test</span>) </span>{
    <span class="hljs-keyword">return</span> test;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">  * <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params">test</span>) </span>{
}

<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">test</span>) </span>{
}
</code></pre>
<h2 id="disallowvar">disallowVar</h2>
<p>Disallows declaring variables with <code>var</code>.</p>
<p>Types: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowVar"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">let</span> foo;
<span class="hljs-keyword">const</span> bar;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> baz;
</code></pre>
<h2 id="jsdoc">jsDoc</h2>
<p>Validate jsdoc comments</p>
<h2 id="usage">Usage</h2>
<pre><code class="lang-json">{
    "<span class="hljs-attribute">jsDoc</span>": <span class="hljs-value">{
        "<span class="hljs-attribute">checkAnnotations</span>": <span class="hljs-value"><span class="hljs-string">"closurecompiler"</span></span>,
        "<span class="hljs-attribute">checkTypes</span>": <span class="hljs-value"><span class="hljs-string">"strictNativeCase"</span></span>,
        "<span class="hljs-attribute">enforceExistence</span>": <span class="hljs-value"><span class="hljs-string">"exceptExports"</span>
        ...
    </span>}
</span>}
</code></pre>
<h2 id="rules">Rules</h2>
<h3 id="checkannotations">checkAnnotations</h3>
<p>Checks tag names are valid.</p>
<p>There are 3 presets for <code>Closure Compiler</code>, <code>JSDoc3</code> and <code>JSDuck5</code>.</p>
<p>By default it allows any tag from any preset. You can pass <code>Object</code>
to select preset with <code>preset</code> field and add custom tags with <code>extra</code> field.</p>
<p>Type: <code>Boolean</code> or <code>String</code> or <code>{&quot;preset&quot;: String, &quot;extra&quot;: Object}</code>
(see <a href="#user-content-tag-values">tag values</a>).</p>
<p>Values: <code>true</code>, <code>&quot;closurecompiler&quot;</code>, <code>&quot;jsdoc3&quot;</code>, <code>&quot;jsduck5&quot;</code>, <code>Object</code></p>
<p>Context: <code>file</code></p>
<p>Tags: <code>*</code></p>
<h4 id="tag-values">Tag values</h4>
<p><code>extra</code> field should contains tags in keys and there are options for values:</p>
<ul>
<li><code>false</code> means tag available with no value</li>
<li><code>true</code> means tag available with any value</li>
<li><code>&quot;some&quot;</code> means tag available and requires some value</li>
</ul>
<p>See also <a href="https://github.com/jscs-dev/jscs-jsdoc/tree/master/lib/tags">tag presets</a>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkAnnotations"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @chainable
 * @param {string} message
 * @return {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @pororo
 * @lalala
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h4 id="example-2">Example 2</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkAnnotations"</span>: {
    <span class="hljs-string">"preset"</span>: <span class="hljs-string">"jsdoc3"</span>,
    <span class="hljs-string">"extra"</span>: {
        <span class="hljs-string">"boomer"</span>: <span class="hljs-literal">false</span>
    }
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @boomer
 * @argument {String}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/** @still-invalid */</span>
</code></pre>
<h3 id="checkparamexistence">checkParamExistence</h3>
<p>Checks all parameters are documented.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkParamExistence"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {string} message
 * @return {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span> (<span class="hljs-params"> message </span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}

<span class="hljs-comment">/**
 * @inheritdoc
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span> (<span class="hljs-params"> message </span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @return {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span> (<span class="hljs-params"> message </span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h3 id="checkparamnames">checkParamNames</h3>
<p>Checks param names in jsdoc and in function declaration are equal.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>param</code>, <code>arg</code>, <code>argument</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkParamNames"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} message
 * @param {Number|Object} [line]
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">message, line</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} msg
 * @param {Number|Object} [line]
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">message</span>) </span>{}
</code></pre>
<h3 id="requireparamtypes">requireParamTypes</h3>
<p>Checks params in jsdoc contains type.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>param</code>, <code>arg</code>, <code>argument</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireParamTypes"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="checkredundantparams">checkRedundantParams</h3>
<p>Reports redundant params in jsdoc.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>param</code>, <code>arg</code>, <code>argument</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkRedundantParams"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">message</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="checkreturntypes">checkReturnTypes</h3>
<p>Checks for differences between the jsdoc and actual return types if both exist.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>return</code>, <code>returns</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkReturnTypes"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {String}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'foo'</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {String}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">f</span>) </span>{
    <span class="hljs-keyword">if</span> (f) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
}
</code></pre>
<h3 id="checkredundantreturns">checkRedundantReturns</h3>
<p>Report statements for functions without return.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>return</code>, <code>returns</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkRedundantReturns"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'yes'</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// no return here</span>
}
</code></pre>
<h3 id="requirereturntypes">requireReturnTypes</h3>
<p>Checks returns in jsdoc contains type</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>return</code>, <code>returns</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireReturnTypes"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {String}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * no @return
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="checktypes">checkTypes</h3>
<p>Reports invalid types for bunch of tags.</p>
<p>The <code>strictNativeCase</code> mode checks that case of natives is the same as in this
list: <code>boolean</code>, <code>number</code>, <code>string</code>, <code>Object</code>, <code>Array</code>, <code>Date</code>, <code>RegExp</code>.</p>
<p>The <code>capitalizedNativeCase</code> mode checks that the first letter in all native
types and primitives is uppercased except the case with <code>function</code> in google
closure format: <code>{function(...)}</code></p>
<p>Type: <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>true</code> or <code>&quot;strictNativeCase&quot;</code> or <code>&quot;capitalizedNativeCase&quot;</code></p>
<p>Context: <code>*</code></p>
<p>Tags: <code>typedef</code>, <code>type</code>, <code>param</code>, <code>return</code>, <code>returns</code>, <code>enum</code>, <code>var</code>, <code>prop</code>,
<code>property</code>, <code>arg</code>, <code>argument</code>, <code>cfg</code>, <code>lends</code>, <code>extends</code>, <code>implements</code>, <code>define</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkTypes"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @typedef {Object} ObjectLike
 * @property {boolean} hasFlag
 * @property {string} name
 */</span>

<span class="hljs-comment">/** @type {number} */</span>
<span class="hljs-keyword">var</span> bar = <span class="hljs-number">1</span>;

<span class="hljs-comment">/** @const {number} */</span>
<span class="hljs-keyword">var</span> FOO = <span class="hljs-number">2</span>;

<span class="hljs-comment">/**
 * @const
 * @type {number}
 */</span>
<span class="hljs-keyword">var</span> BAZ = <span class="hljs-number">3</span>;

<span class="hljs-comment">/**
 * @param {SomeX} x
 * @returns {string}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">x</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/** @type {some~number} */</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;

<span class="hljs-comment">/**
 * @param {function(redundantName: Number)} x
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">x</span>) </span>{}

<span class="hljs-comment">/**
 * @param {Number|Boolean|object|array} x invalid for strictNativeCase
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">x</span>) </span>{}
</code></pre>
<pre><code class="lang-js"><span class="hljs-comment">/** @type {some~number} */</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
</code></pre>
<h3 id="checkredundantaccess">checkRedundantAccess</h3>
<p>Reports redundant access declarations.</p>
<p>Type: <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>true</code> or <code>&quot;enforceLeadingUnderscore&quot;</code> or <code>&quot;enforceTrailingUnderscore&quot;</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>access</code>, <code>private</code>, <code>protected</code>, <code>public</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"checkRedundantAccess"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"checkRedundantAccess"</span>: <span class="hljs-string">"enforceLeadingUnderscore"</span>
</code></pre>
<h5 id="valid-for-true-enforceleadingunderscore">Valid for true, &quot;enforceLeadingUnderscore&quot;</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @access private
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * @access public
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid-for-true">Invalid for true</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @private
 * @access private
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid-for-enforceleadingunderscore">Invalid for &quot;enforceLeadingUnderscore&quot;</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @private
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="leadingunderscoreaccess">leadingUnderscoreAccess</h3>
<p>Checks access declaration is set for <code>_underscored</code> function names</p>
<p>Ignores a bunch of popular identifiers:
<code>__filename</code>, <code>__dirname</code>, <code>__proto__</code>, <code>__defineGetter__</code>, <code>super_</code>,
<code>__constructor</code>, etc.</p>
<p>Type: <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>true</code> (means not public), <code>&quot;private&quot;</code>, <code>&quot;protected&quot;</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>access</code>, <code>private</code>, <code>protected</code>, <code>public</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"leadingUnderscoreAccess"</span>: <span class="hljs-string">"protected"</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @protected
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_g</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * @private
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_e</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="enforceexistence">enforceExistence</h3>
<p>Checks jsdoc block exists.</p>
<p>Type: <code>Boolean</code>, <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;exceptExports&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [&quot;exports&quot;]</code>)</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code> array of exceptions:<ul>
<li><code>&quot;expressions&quot;</code> skip expression functions</li>
<li><code>&quot;exports&quot;</code> skip <code>module.exports = function () {};</code></li>
<li><code>&quot;paramless-procedures&quot;</code> functions without parameters and with empty
return statements will be skipped</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Context: <code>functions</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"enforceExistence"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @protected
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_g</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="requirehyphenbeforedescription">requireHyphenBeforeDescription</h3>
<p>Checks a param description has a hyphen before it (checks for <code>-</code>).</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>param</code>, <code>arg</code>, <code>argument</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireHyphenBeforeDescription"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="requirenewlineafterdescription">requireNewlineAfterDescription</h3>
<p>Checks a doc comment description has padding newline.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>*</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNewlineAfterDescription"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}

<span class="hljs-comment">/**
 * Description
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description
 *
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * Description
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="disallownewlineafterdescription">disallowNewlineAfterDescription</h3>
<p>Checks a doc comment description has no padding newlines.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>*</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"disallowNewlineAfterDescription"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}

<span class="hljs-comment">/**
 * Description
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * Description
 *
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">message</span>) </span>{}
</code></pre>
<h3 id="requiredescriptioncompletesentence">requireDescriptionCompleteSentence</h3>
<p>Checks a doc comment description is a complete sentence.</p>
<p>A complete sentence is defined as starting with an upper case letter and ending
with a period.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>*</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDescriptionCompleteSentence"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}

<span class="hljs-comment">/**
 * Description.
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * (Description).
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description.
 *
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}

<span class="hljs-comment">/**
 * Description
 * on multiple lines are allowed.
 *
 * @param {String} msg - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">msg</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * Description
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description
 * On multiple lines should not start with an upper case.
 *
 * @param {String} - message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * description starting with a lower case letter.
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description period is offset .
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}

<span class="hljs-comment">/**
 * Description!
 * @param {String} message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h3 id="requireparamdescription">requireParamDescription</h3>
<p>Checks a param description exists.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>param</code>, <code>arg</code>, <code>argument</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireParamDescription"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} arg message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">arg</span>) </span>{}

<span class="hljs-comment">/**
 * @param arg message
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">arg</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @param {String} arg
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">arg</span>) </span>{}

<span class="hljs-comment">/**
 * @param arg
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params">arg</span>) </span>{}
</code></pre>
<h3 id="requirereturndescription">requireReturnDescription</h3>
<p>Checks a return description exists.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Context: <code>functions</code></p>
<p>Tags: <code>return</code>, <code>returns</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireReturnDescription"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {Boolean} Method result.
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
}

<span class="hljs-comment">/**
 * @returns {String} method result
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">'Hello!'</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">/**
 * @returns {Boolean}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">method</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
}
</code></pre>
<h2 id="maximumnumberoflines">maximumNumberOfLines</h2>
<p>Requires the file to be at most the number of lines specified</p>
<p>Types: <code>Integer</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Integer</code>: file should be at most the number of lines specified</li>
<li><code>Object</code>:<ul>
<li><code>value</code>: (required) lines should be at most the number of characters specified</li>
<li><code>allExcept</code>: (default: <code>[]</code>) an array of conditions that will exempt a line<ul>
<li><code>comments</code>: allows comments to break the rule
*<h4 id="example">Example</h4>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<pre><code class="lang-js"><span class="hljs-string">"maximumNumberOfLines"</span>: <span class="hljs-number">100</span>
</code></pre>
<h2 id="requirealignedmultilineparams">requireAlignedMultilineParams</h2>
<p>Enforces indentation of parameters in multiline functions</p>
<p>Types: <code>Boolean</code>, <code>String</code>, <code>Number</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> to require parameters are aligned with the body of the function</li>
<li><code>&#39;firstParam&#39;</code> to require parameters to be aligned with the first parameter</li>
<li><code>Number</code> for the number of columns the parameters should be indented past the function body</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireAlignedMultilineParams"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-true">Valid for <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">one, two,
  three, four, five,
  six, seven, eight</span>) </span>{
  <span class="hljs-built_in">console</span>.log(a);
};
</code></pre>
<h5 id="valid-for-2">Valid for <code>2</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">one, two,
    three, four, five,
    six, seven, eight</span>) </span>{
  <span class="hljs-built_in">console</span>.log(a);
};
</code></pre>
<h5 id="valid-for-firstparam">Valid for <code>&#39;firstParam&#39;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">one, two,
                    three, four, five,
                    six, seven, eight</span>) </span>{
  <span class="hljs-built_in">console</span>.log(a);
};
</code></pre>
<h5 id="invalid-for-0">Invalid for <code>0</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">one, two,
    three, four, five,
    six, seven, eight</span>) </span>{
  <span class="hljs-built_in">console</span>.log(a);
};
</code></pre>
<h2 id="requirealignedobjectvalues">requireAlignedObjectValues</h2>
<p>Requires proper alignment in object literals.</p>
<p>Type: <code>String</code></p>
<p>Values:</p>
<ul>
<li><code>&quot;all&quot;</code> for strict mode,</li>
<li><code>&quot;ignoreFunction&quot;</code> ignores objects if one of the property values is a function expression,</li>
<li><code>&quot;ignoreLineBreak&quot;</code> ignores objects if there are line breaks between properties</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireAlignedObjectValues"</span>: <span class="hljs-string">"all"</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    a   : <span class="hljs-number">1</span>,
    bcd : <span class="hljs-number">2</span>,
    ef  : <span class="hljs-string">'str'</span>
};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    a : <span class="hljs-number">1</span>,
    bcd : <span class="hljs-number">2</span>,
    ef : <span class="hljs-string">'str'</span>
};
</code></pre>
<h2 id="requireanonymousfunctions">requireAnonymousFunctions</h2>
<p>Requires that a function expression be anonymous.</p>
<p>Type: <code>Boolean</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;declarations&#39;</code> ignores function declarations</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireAnonymousFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

};

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

})
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{

};

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{

});
</code></pre>
<h5 id="valid-for-allexcept-declarations">Valid for <code>{ &quot;allExcept&quot;: [&quot;declarations&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{

}

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

})
</code></pre>
<h2 id="requirearraydestructuring">requireArrayDestructuring</h2>
<p>Requires that variable assignment from array values are * destructured.</p>
<p>Type: <code>Boolean</code></p>
<p>Values: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireArrayDestructuring"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> colors = [<span class="hljs-string">'red'</span>, <span class="hljs-string">'green'</span>, <span class="hljs-string">'blue'</span>];
<span class="hljs-keyword">var</span> [ red ] = colors;

<span class="hljs-keyword">var</span> attributes = {
  colors: [<span class="hljs-string">'red'</span>, <span class="hljs-string">'green'</span>, <span class="hljs-string">'blue'</span>];
};

<span class="hljs-keyword">var</span> [ red ] = attributes.colors;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> colors = [<span class="hljs-string">'red'</span>, <span class="hljs-string">'green'</span>, <span class="hljs-string">'blue'</span>];
<span class="hljs-keyword">var</span> red = colors[<span class="hljs-number">0</span>];

<span class="hljs-keyword">var</span> attributes = {
  colors: [<span class="hljs-string">'red'</span>, <span class="hljs-string">'green'</span>, <span class="hljs-string">'blue'</span>];
};

<span class="hljs-keyword">var</span> red = attributes.colors[<span class="hljs-number">0</span>];
</code></pre>
<h2 id="requirearrowfunctions">requireArrowFunctions</h2>
<p>Requires that arrow functions are used instead of anonymous function expressions in callbacks.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireArrowFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// arrow function</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x) =&gt; {
    <span class="hljs-keyword">return</span> x * x;
});
<span class="hljs-comment">// function declaration</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params">n</span>) </span>{ <span class="hljs-keyword">return</span> n + <span class="hljs-number">1</span>; }
<span class="hljs-comment">// getter/setter</span>
<span class="hljs-keyword">var</span> x = { get y() {}, set y(y) {} }
<span class="hljs-comment">// object shorthand</span>
<span class="hljs-keyword">var</span> x = { bar() {} }
<span class="hljs-comment">// class method</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> </span>{ bar() {} }
<span class="hljs-comment">// function expression in a return statement</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x };
};
<span class="hljs-comment">// function expression in a variable declaration</span>
<span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{ <span class="hljs-keyword">return</span> x };
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// function expression in a callback</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x * x;
});
</code></pre>
<h2 id="requirecapitalizedcomments">requireCapitalizedComments</h2>
<p>Requires the first alphabetical character of a comment to be uppercase, unless it is part of a multi-line textblock.</p>
<p>This rule automatically ignores jscs, jshint, eslint and istanbul specific comments.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>Object</code>:<ul>
<li><code>allExcept</code>: array of quoted exceptions</li>
<li><code>inlined</code>: Ignore comments in the middle of the code line</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCapitalizedComments"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid:</h5>
<pre><code class="lang-js"><span class="hljs-comment">// Valid</span>
<span class="hljs-comment">//Valid</span>

<span class="hljs-comment">/*
  Valid
 */</span>

<span class="hljs-comment">/**
 * Valid
 */</span>

<span class="hljs-comment">// A textblock is a set of lines</span>
<span class="hljs-comment">// that starts with a capitalized letter</span>
<span class="hljs-comment">// and has one or more non-capitalized lines</span>
<span class="hljs-comment">// afterwards</span>

<span class="hljs-comment">// A textblock may also have multiple lines.</span>
<span class="hljs-comment">// Those lines can be uppercase as well to support</span>
<span class="hljs-comment">// sentence breaks in textblocks</span>

<span class="hljs-comment">// 123 or any non-alphabetical starting character</span>
<span class="hljs-comment">// @are also valid anywhere</span>

<span class="hljs-comment">// jscs: enable</span>
</code></pre>
<h5 id="invalid">Invalid:</h5>
<pre><code class="lang-js"><span class="hljs-comment">// invalid</span>
<span class="hljs-comment">//invalid</span>
<span class="hljs-comment">/** invalid */</span>
<span class="hljs-comment">/**
 * invalid
 */</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireCapitalizedComments"</span>: { <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"pragma"</span>] }
</code></pre>
<h5 id="valid">Valid:</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHello</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">/* pragma something */</span>

    <span class="hljs-comment">// I can now say hello in lots of statements, if I like.</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello"</span>;
}
</code></pre>
<h5 id="valid">Valid:</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHello</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">/* istanbul ignore next */</span>

    <span class="hljs-comment">// I'd like to ignore this statement in coverage reports.</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello"</span>;
}
</code></pre>
<h5 id="invalid">Invalid:</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHello</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">/* otherPragma something */</span>

    <span class="hljs-comment">// i can now say hello in lots of statements, if I like.</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello"</span>;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireCapitalizedComments"</span>: { <span class="hljs-string">"inlined"</span>: <span class="hljs-literal">true</span> }
</code></pre>
<h5 id="valid">Valid:</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHello</span>(<span class="hljs-params"> world <span class="hljs-comment">/*internal*/</span> </span>) </span>{
}
</code></pre>
<h2 id="requirecapitalizedconstructorsnew">requireCapitalizedConstructorsNew</h2>
<p>Requires capitalized constructors to to use the <code>new</code> keyword</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> or Object with <code>allExcept</code> Array of quoted identifiers which are exempted</p>
<p>JSHint: <a href="http://jshint.com/docs/options/#newcap"><code>newcap</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireCapitalizedConstructorsNew"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requireCapitalizedConstructorsNew"</span>: {
    <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"SomethingNative"</span>]
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-keyword">new</span> B();
<span class="hljs-keyword">var</span> c = SomethingNative();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> d = E();
</code></pre>
<h2 id="requiredollarbeforejqueryassignment">requireDollarBeforejQueryAssignment</h2>
<p>Require a $ before variable names that are jquery assignments.</p>
<p>Types: <code>Boolean</code> or <code>String</code></p>
<p>Values: <code>true</code> or <code>&quot;ignoreProperties&quot;</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireDollarBeforejQueryAssignment"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-example-for-mode-true">Valid example for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> $x = $(<span class="hljs-string">".foo"</span>);
<span class="hljs-keyword">var</span> y = {
  $x: $(<span class="hljs-string">".bar"</span>)
};
</code></pre>
<h5 id="invalid-example-for-mode-true">Invalid example for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = $(<span class="hljs-string">".foo"</span>);
<span class="hljs-keyword">var</span> y = {
  x: $(<span class="hljs-string">".bar"</span>)
};
</code></pre>
<h5 id="valid-example-for-mode-ignoreproperties">Valid example for mode <code>ignoreProperties</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> $x = $(<span class="hljs-string">".foo"</span>);
<span class="hljs-keyword">var</span> y = {
  x: $(<span class="hljs-string">".bar"</span>)
};
</code></pre>
<h5 id="invalid-example-for-mode-ignoreproperties">Invalid example for mode <code>ignoreProperties</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = $(<span class="hljs-string">".foo"</span>);
</code></pre>
<h2 id="requireearlyreturn">requireEarlyReturn</h2>
<p>Requires to return early in a function.</p>
<p>Types: <code>Boolean</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: disallow to use of else if the corrisponding <code>if</code> block contain a return.</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireEarlyReturn"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (x) {
        <span class="hljs-keyword">return</span> x;
    }
    <span class="hljs-keyword">return</span> y;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (x) {
        <span class="hljs-keyword">return</span> x;
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> y;
    }
}
</code></pre>
<h2 id="requireenhancedobjectliterals">requireEnhancedObjectLiterals</h2>
<p>Requires declaring objects via ES6 enhanced object literals</p>
<p>Type: <code>Boolean</code></p>
<p>Values: true</p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireEnhancedObjectLiterals"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> bar = <span class="hljs-literal">true</span>;
<span class="hljs-keyword">var</span> obj = {
  foo() { },
  bar
};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> bar = <span class="hljs-literal">true</span>;
<span class="hljs-keyword">var</span> obj = {
  foo: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ },
  bar: bar
};
</code></pre>
<h2 id="requirefunctiondeclarations">requireFunctionDeclarations</h2>
<p>Requires function declarations by disallowing assignment of functions
expressions to variables. Function expressions are allowed in all other
contexts, including when passed as function arguments or immediately invoked.</p>
<p>Assignment of function expressions to object members is also permitted, since
these can&#39;t be declared.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireFunctionDeclarations"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">declared</span>(<span class="hljs-params"></span>) </span>{

};

(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">iife</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">void</span> <span class="hljs-number">0</span>;
})();

<span class="hljs-keyword">var</span> obj = {
    a: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{}
};

obj.b = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{ };

$(<span class="hljs-string">'#foo'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{

};)
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> expressed = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

};

<span class="hljs-keyword">var</span> expressed = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deeply</span>(<span class="hljs-params"></span>) </span>{

};
</code></pre>
<h2 id="requireimportalphabetized">requireImportAlphabetized</h2>
<p>Requires imports to be alphabetised</p>
<p>Types: <code>Boolean</code></p>
<p>Values: <code>true</code> to require imports to be ordered (A-Z)</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireImportAlphabetized"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">import</span> a <span class="hljs-keyword">from</span> <span class="hljs-string">'a'</span>;
<span class="hljs-keyword">import</span> c <span class="hljs-keyword">from</span> <span class="hljs-string">'c'</span>;
<span class="hljs-keyword">import</span> z <span class="hljs-keyword">from</span> <span class="hljs-string">'z'</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">import</span> a <span class="hljs-keyword">from</span> <span class="hljs-string">'a'</span>;
<span class="hljs-keyword">import</span> z <span class="hljs-keyword">from</span> <span class="hljs-string">'z'</span>;
<span class="hljs-keyword">import</span> c <span class="hljs-keyword">from</span> <span class="hljs-string">'c'</span>;
</code></pre>
<h2 id="requirekeywordsonnewline">requireKeywordsOnNewLine</h2>
<p>Requires placing keywords on a new line.</p>
<p>Type: <code>Array</code></p>
<p>Values: Array of quoted keywords</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireKeywordsOnNewLine"</span>: [<span class="hljs-string">"else"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>) {
    x++;
}
<span class="hljs-keyword">else</span> {
    x--;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span>) {
    x++;
} <span class="hljs-keyword">else</span> {
    x--;
}
</code></pre>
<h2 id="requirelinebreakaftervariableassignment">requireLineBreakAfterVariableAssignment</h2>
<p>Requires placing line feed after assigning a variable.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireLineBreakAfterVariableAssignment"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> abc = <span class="hljs-number">8</span>;
<span class="hljs-keyword">var</span> foo = <span class="hljs-number">5</span>;

<span class="hljs-keyword">var</span> a, b, c,
    foo = <span class="hljs-number">7</span>,
    bar = <span class="hljs-number">8</span>;

<span class="hljs-keyword">var</span> a,
    foo = <span class="hljs-number">7</span>,
    a, b, c,
    bar = <span class="hljs-number">8</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> abc = <span class="hljs-number">8</span>; <span class="hljs-keyword">var</span> foo = <span class="hljs-number">5</span>;

<span class="hljs-keyword">var</span> a, b, c,
    foo = <span class="hljs-number">7</span>, bar = <span class="hljs-number">8</span>;
</code></pre>
<h2 id="requirematchingfunctionname">requireMatchingFunctionName</h2>
<p>Requires function names to match member and property names.</p>
<p>It doesn&#39;t affect anonymous functions nor functions assigned to members or
properties named with a reserved word. Assigning to <code>module.exports</code> is also
ignored, unless <code>includeModuleExports: true</code> is configured.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> or Object with <code>includeModuleExports: true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireMatchingFunctionName"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {};
test.foo = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {};
test[<span class="hljs-string">'foo'</span>] = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {foo: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{}};
</code></pre>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>[<span class="hljs-string">'exports'</span>] = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {};
test.foo = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {};
test[<span class="hljs-string">'foo'</span>] = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {foo: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{}};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> test = {<span class="hljs-built_in">module</span>: {}};
test.module.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireMatchingFunctionName"</span>: { <span class="hljs-string">"includeModuleExports"</span>: <span class="hljs-literal">true</span> }
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<pre><code class="lang-js"><span class="hljs-built_in">module</span>[<span class="hljs-string">'exports'</span>] = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h2 id="requiremultilineternary">requireMultiLineTernary</h2>
<p>Requires the test, consequent and alternate to be on separate lines when using the ternary operator.</p>
<p>Types: <code>Boolean</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireMultiLineTernary"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b)
  ? <span class="hljs-number">1</span>
  : <span class="hljs-number">2</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = (a === b) ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
</code></pre>
<h2 id="requiremultiplevardecl">requireMultipleVarDecl</h2>
<p>Requires multiple <code>var</code> declaration.</p>
<p>Types: <code>Boolean</code> or <code>String</code> or <code>Object</code></p>
<p>Values: <code>true</code> or <code>&quot;onevar&quot;</code> or <code>allExcept: [&#39;require&#39;]</code></p>
<p>If <code>requireMultipleVarDecl</code> defined as a <code>true</code> value, it will report only consecutive vars, if, on the other hand,
value equals to <code>&quot;onevar&quot;</code> string, <code>requireMultipleVarDecl</code> will allow only one <code>var</code> per function scope.</p>
<p>If the value is <code>allExcept: [&#39;require&#39;]</code>, then require statements are allowed to have a var declaration per variable.</p>
<p>JSHint: <a href="http://jshint.com/docs/options/#onevar"><code>onevar</code></a></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireMultipleVarDecl"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>,
    y = <span class="hljs-number">2</span>;
</code></pre>
<h5 id="valid-for-allexcept-require">Valid for <code>allExcept: [&#39;require&#39;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-built_in">require</span>(<span class="hljs-string">"a"</span>);
<span class="hljs-keyword">var</span> b = <span class="hljs-built_in">require</span>(<span class="hljs-string">"b"</span>);
<span class="hljs-keyword">var</span> c = <span class="hljs-number">1</span>,
    d = <span class="hljs-number">2</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<h2 id="requirenamedunassignedfunctions">requireNamedUnassignedFunctions</h2>
<p>Require unassigned functions to be named inline</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>Object</code>:<ul>
<li><code>allExcept</code>: array of quoted identifiers</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNamedUnassignedFunctions"</span>: { <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"describe"</span>, <span class="hljs-string">"it"</span>] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">[].forEach(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{});
<span class="hljs-keyword">var</span> y = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">z</span>(<span class="hljs-params"></span>) </span>{}
it(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">[].forEach(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});
before(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});
</code></pre>
<h2 id="requirenewlinebeforeblockstatements">requireNewlineBeforeBlockStatements</h2>
<p>Requires newline before opening curly brace of all block statements.</p>
<p>Type: <code>Boolean</code> or <code>Array</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> always requires newline before curly brace of block statements</li>
<li><code>Array</code> specifies block-type keywords after which newlines are required before curly brace<ul>
<li>Valid types include: <code>[&#39;if&#39;, &#39;else&#39;, &#39;try&#39;, &#39;catch&#39;, &#39;finally&#39;, &#39;do&#39;, &#39;while&#39;, &#39;for&#39;, &#39;function&#39;, &#39;switch&#39;]</code></li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNewlineBeforeBlockStatements"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">good</span>(<span class="hljs-params"></span>)
</span>{
    <span class="hljs-keyword">var</span> obj =
    {
        val: <span class="hljs-literal">true</span>
    };

    <span class="hljs-keyword">return</span> {
        data: obj
    };
}

<span class="hljs-keyword">if</span> (cond)
{
    foo();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements)
{
    bar(e);
}

<span class="hljs-keyword">while</span> (cond)
{
    foo();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bad</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">var</span> obj = {
        val: <span class="hljs-literal">true</span>
    };

    <span class="hljs-keyword">return</span> {
        data: obj
    };
}

<span class="hljs-keyword">if</span> (cond){
    foo();
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> e <span class="hljs-keyword">in</span> elements){
    bar(e);
}

<span class="hljs-keyword">while</span> (cond){
    foo();
}
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNewlineBeforeBlockStatements"</span>: [<span class="hljs-string">"if"</span>, <span class="hljs-string">"else"</span>, <span class="hljs-string">"for"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (i &gt; <span class="hljs-number">0</span>)
{
    positive = <span class="hljs-literal">true</span>;
}

<span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>)
{
    negative = <span class="hljs-literal">true</span>;
}
<span class="hljs-keyword">else</span>
{
    negative = <span class="hljs-literal">false</span>;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i)
{
    newList.push(myList[i]);
}

<span class="hljs-comment">// this is fine, since "function" wasn't configured</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>) {
    negative = <span class="hljs-literal">true</span>;
}

<span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">0</span>) {
    negative = <span class="hljs-literal">true</span>;
} <span class="hljs-keyword">else</span> {
    negative = <span class="hljs-literal">false</span>;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i) {
    newList.push(myList[i]);
}
</code></pre>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNewlineBeforeBlockStatements"</span>: [<span class="hljs-string">"function"</span>, <span class="hljs-string">"while"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>)
</span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">var</span> z = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>)
</span>{
    <span class="hljs-keyword">return</span> x - <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// this is fine, since "for" wasn't configured</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = myList.length; i &lt; len; ++i) {
    newList.push(myList[i]);
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">var</span> z = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">return</span> x - <span class="hljs-number">1</span>;
}
</code></pre>
<h2 id="requirenewlinebeforesinglestatementsinif">requireNewlineBeforeSingleStatementsInIf</h2>
<p>Requires newline before single if statements</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNewlineBeforeSingleStatementsInIf"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x)
   doX();
<span class="hljs-keyword">else</span>
   doY();

<span class="hljs-keyword">if</span> (x)
   doX();
<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (v)
   doV();
<span class="hljs-keyword">else</span>
   doY();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (x) doX();
<span class="hljs-keyword">else</span> doY();

<span class="hljs-keyword">if</span> (x) doX();
<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (v) doV();
<span class="hljs-keyword">else</span> doY();
</code></pre>
<h2 id="requirenumericliterals">requireNumericLiterals</h2>
<p>Requires use of binary, hexadecimal, and octal literals instead of parseInt.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireNumericLiterals"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-number">0b111110111</span> === <span class="hljs-number">503</span>;
<span class="hljs-number">0o767</span> === <span class="hljs-number">503</span>;
<span class="hljs-number">0x1F7</span> === <span class="hljs-number">503</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"111110111"</span>, <span class="hljs-number">2</span>) === <span class="hljs-number">503</span>;
<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"767"</span>, <span class="hljs-number">8</span>) === <span class="hljs-number">503</span>;
<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"1F7"</span>, <span class="hljs-number">16</span>) === <span class="hljs-number">255</span>;
</code></pre>
<h2 id="requireobjectdestructuring">requireObjectDestructuring</h2>
<p>Requires variable declarations from objects via destructuring</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireObjectDestructuring"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> { foo } = SomeThing;
<span class="hljs-keyword">var</span> { bar } = SomeThing.foo;
<span class="hljs-keyword">var</span> { val } = SomeThing[<span class="hljs-string">'some.key'</span>];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = SomeThing.foo;
<span class="hljs-keyword">var</span> bar = SomeThing.foo.bar;
<span class="hljs-keyword">var</span> val = SomeThing[<span class="hljs-string">'some.key'</span>].val;
</code></pre>
<h2 id="requireobjectkeysonnewline">requireObjectKeysOnNewLine</h2>
<p>Requires placing object keys on new line</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;sameLine&#39;</code> ignores the rule if all the keys and values are on the same line</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireObjectKeysOnNewLine"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requireObjectKeysOnNewLine"</span>: {
    <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"sameLine"</span>]
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>,
    c: <span class="hljs-string">'c'</span>
};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>, c: <span class="hljs-string">'c'</span>
};
</code></pre>
<h5 id="valid-for-allexcept-sameline">Valid for <code>{ &quot;allExcept&quot;: [&quot;sameLine&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>, c: <span class="hljs-string">'c'</span>
};
</code></pre>
<h5 id="invalid-for-allexcept-sameline">Invalid for <code>{ &quot;allExcept&quot;: [&quot;sameLine&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-string">'b'</span>, c: <span class="hljs-string">'c'</span>,
    d: <span class="hljs-string">'d'</span>
};
</code></pre>
<h2 id="requirepaddingnewlineaftervariabledeclaration">requirePaddingNewLineAfterVariableDeclaration</h2>
<p>Requires an extra blank newline after var declarations, as long
as it is not the last expression in the current block.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLineAfterVariableDeclaration"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    a: <span class="hljs-number">1</span>
};

foo({
    a: {
        b: <span class="hljs-number">1</span>
    }
});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: <span class="hljs-number">1</span> };
foo({a:{b:<span class="hljs-number">1</span>}});
</code></pre>
<h2 id="requirepaddingnewlinesafterblocks">requirePaddingNewLinesAfterBlocks</h2>
<p>Requires newline after blocks</p>
<p>Type: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: always require a newline after blocks</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: <code>Array</code><ul>
<li><code>&quot;inCallExpressions&quot;</code> Blocks don&#39;t need a line of padding in function argument lists</li>
<li><code>&quot;inNewExpressions&quot;</code> Blocks don&#39;t need a line of padding in constructor argument lists</li>
<li><code>&quot;inArrayExpressions&quot;</code> Blocks don&#39;t need a line of padding in arrays</li>
<li><code>&quot;inProperties&quot;</code> Blocks don&#39;t need a line of padding as object properties</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLinesAfterBlocks"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requirePaddingNewLinesAfterBlocks"</span>: {
    <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"inCallExpressions"</span>, <span class="hljs-string">"inNewExpressions"</span>, <span class="hljs-string">"inArrayExpressions"</span>, <span class="hljs-string">"inProperties"</span>]
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {
        <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }

        <span class="hljs-keyword">continue</span>;
    }

    <span class="hljs-keyword">var</span> obj = {
        foo: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        },

        bar: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    };

    func(
         <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
         }
    );

    <span class="hljs-keyword">var</span> a = [
        <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        },

        <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        }
    ]

}
</code></pre>
<h5 id="valid-for-allexcept-incallexpressions">Valid for <code>{ &quot;allExcept&quot;: [&quot;inCallExpressions&quot;] }</code></h5>
<pre><code class="lang-js">func(
    <span class="hljs-number">2</span>,
    <span class="hljs-number">3</span>,
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    }
);
</code></pre>
<h5 id="valid-for-allexcept-innewexpressions">Valid for <code>{ &quot;allExcept&quot;: [&quot;inNewExpressions&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">new</span> SomeClass(
    <span class="hljs-number">2</span>,
    <span class="hljs-number">3</span>,
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    }
);
</code></pre>
<h5 id="valid-for-allexcept-inarrayexpressions">Valid for <code>{ &quot;allExcept&quot;: [&quot;inArrayExpressions&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = [
    <span class="hljs-number">2</span>,
    <span class="hljs-number">3</span>,
    <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    }
];
</code></pre>
<ul>
<li><h5 id="valid-for-allexcept-inproperties">Valid for <code>{ &quot;allExcept&quot;: [&quot;inProperties&quot;] }</code></h5>
</li>
</ul>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = {
    a: <span class="hljs-number">2</span>,
    b: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    },
    c: <span class="hljs-number">3</span>
];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {
        <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
        <span class="hljs-keyword">continue</span>;
    }
}
</code></pre>
<h2 id="requirepaddingnewlinesafterusestrict">requirePaddingNewLinesAfterUseStrict</h2>
<p>Requires a blank line after <code>&#39;use strict&#39;;</code> statements</p>
<p>Values:</p>
<ul>
<li><code>true</code> for default behavior (require blank line after &#39;use strict&#39; statements)</li>
<li><code>Object</code>:<ul>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;require&#39;</code> allows &#39;require&#39; statements to occur immediately after &#39;use strict&#39;</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLinesAfterUseStrict"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-comment">// code</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-pi">'use strict'</span>;
<span class="hljs-comment">// code</span>
</code></pre>
<h2 id="requirepaddingnewlinesbeforeexport">requirePaddingNewLinesBeforeExport</h2>
<p>Requires newline before module.exports</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLinesBeforeExport"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;

<span class="hljs-built_in">module</span>.exports = a;

<span class="hljs-keyword">if</span> (cond) {
   <span class="hljs-built_in">module</span>.exports = a;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
<span class="hljs-built_in">module</span>.exports = a;

<span class="hljs-keyword">if</span> (cond) {
   foo();
   <span class="hljs-built_in">module</span>.exports = a;
}
</code></pre>
<h2 id="requirepaddingnewlinesbeforekeywords">requirePaddingNewlinesBeforeKeywords</h2>
<p>Requires an empty line above the specified keywords unless the keyword is the first expression in a block.</p>
<p>Types: <code>Boolean</code> or <code>Array</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> specifies that the spacedKeywords found in the utils module require an empty line above it</li>
<li><code>Array</code> specifies quoted keywords which require an empty line above it</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewlinesBeforeKeywords"</span>: [
    <span class="hljs-string">"do"</span>,
    <span class="hljs-string">"for"</span>,
    <span class="hljs-string">"if"</span>,
    <span class="hljs-string">"else"</span>
    <span class="hljs-comment">// etc</span>
]
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }

    <span class="hljs-keyword">while</span> (a) {
        a = <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }
    <span class="hljs-keyword">while</span> (a) {
        a = <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h5 id="valid-for-mode-if-for">Valid for mode <code>[&#39;if&#39;, for&#39;]</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }
    <span class="hljs-keyword">while</span> (a) {
        a = <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (!a) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; b; i++) {
        <span class="hljs-keyword">if</span> (!a[i]) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
    }
    <span class="hljs-keyword">while</span> (a) {
        a = <span class="hljs-literal">false</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}
</code></pre>
<h2 id="requirepaddingnewlinesinblocks">requirePaddingNewlinesInBlocks</h2>
<p>Requires blocks to begin and end with 2 newlines</p>
<p>Types: <code>Boolean</code>, <code>Integer</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> validates all non-empty blocks</li>
<li><code>Integer</code> specifies a minimum number of lines containing elements in the block before validating</li>
<li><code>Object</code> (at least one of properties must be true):<ul>
<li><code>&#39;open&#39;</code><ul>
<li><code>true</code> validates that there is a newline after the opening brace in a block</li>
<li><code>false</code> ignores the newline validation after the opening brace in a block</li>
</ul>
</li>
<li><code>&#39;close&#39;</code><ul>
<li><code>true</code> validates that there is a newline before the closing brace in a block</li>
<li><code>false</code> ignores the newline validation before the closing brace in a block</li>
</ul>
</li>
<li><code>&#39;allExcept&#39;</code> array of exceptions:<ul>
<li><code>&#39;conditionals&#39;</code> ignores conditional (if, else if, else) blocks</li>
<li><code>&#39;functions&#39;</code> ignores function blocks</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewlinesInBlocks"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requirePaddingNewlinesInBlocks"</span>: <span class="hljs-number">1</span>
<span class="hljs-string">"requirePaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"open"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"close"</span>: <span class="hljs-literal">false</span> }
<span class="hljs-string">"requirePaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"conditionals"</span> ] }
<span class="hljs-string">"requirePaddingNewlinesInBlocks"</span>: { <span class="hljs-string">"open"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"close"</span>: <span class="hljs-literal">false</span>, allExcept: [<span class="hljs-string">'conditionals'</span>] }
</code></pre>
<h5 id="valid-for-mode-true-or-open-true-close-true">Valid for mode <code>true</code> or <code>{ &quot;open&quot;: true, &quot;close&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();

}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {doSomething();}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
</code></pre>
<h5 id="valid-for-mode-1">Valid for mode <code>1</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();
    doSomethingElse();

}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); }
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) { doSomething(); doSomethingElse(); }
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
    doSomethingElse();
}
</code></pre>
<h5 id="valid-for-mode-open-true-close-false">Valid for mode <code>{ &quot;open&quot;: true, &quot;close&quot;: false }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {

    doSomething();
}
<span class="hljs-keyword">var</span> abc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {doSomething();}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();

}
</code></pre>
<h5 id="valid-for-allexcept-conditionals">Valid for <code>{ allExcept: [&#39;conditionals&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}

<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{

    <span class="hljs-keyword">return</span> bar;

}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{
    <span class="hljs-keyword">return</span> bar;
}
</code></pre>
<h5 id="valid-for-open-true-close-false-allexcept-conditionals">Valid for <code>{  &quot;open&quot;: true, &quot;close&quot;: false, allExcept: [&#39;conditionals&#39;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{

    <span class="hljs-keyword">return</span> bar;
}

<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    doSomething();
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">foo</span>) </span>{
    <span class="hljs-keyword">return</span> bar;

}
</code></pre>
<h2 id="requirepaddingnewlinesinobjects">requirePaddingNewLinesInObjects</h2>
<p>Requires newline inside curly braces of all objects.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requirePaddingNewLinesInObjects"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
    a: <span class="hljs-number">1</span>
};
foo({
    a: {
        b: <span class="hljs-number">1</span>
    }
});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: <span class="hljs-number">1</span> };
foo({a:{b:<span class="hljs-number">1</span>}});
</code></pre>
<h2 id="requireparenthesesaroundarrowparam">requireParenthesesAroundArrowParam</h2>
<p>Requires parentheses around arrow function expressions with a single parameter.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireParenthesesAroundArrowParam"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x) =&gt; x * x);
<span class="hljs-comment">// params are always required for multiple parameters</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((x, y, z) =&gt; x * x);
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(x =&gt; x * x);
</code></pre>
<h2 id="requirequotedkeysinobjects">requireQuotedKeysInObjects</h2>
<p>Requires quoted keys in objects.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireQuotedKeysInObjects"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">  * <span class="hljs-keyword">var</span> x = { <span class="hljs-string">'a'</span>: { <span class="hljs-string">"default"</span>: <span class="hljs-number">1</span> } };
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: <span class="hljs-number">1</span> };
</code></pre>
<h2 id="requiresemicolons">requireSemicolons</h2>
<p>Requires semicolon after:</p>
<ul>
<li>var declaration</li>
<li>expression statement</li>
<li>return</li>
<li>throw</li>
<li>break</li>
<li>continue</li>
<li>do-while</li>
</ul>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSemicolons"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
</code></pre>
<h2 id="requireshorthandarrowfunctions">requireShorthandArrowFunctions</h2>
<p>Require arrow functions to use an expression body when returning a single statement
(no block statement, implicit return).</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireShorthandArrowFunctions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// single expression</span>
evens.map(v =&gt; v + <span class="hljs-number">1</span>);
<span class="hljs-comment">// multiple statments require a block</span>
evens.map(v =&gt; {
    v = v + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> v;
});
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">evens.map(v =&gt; { <span class="hljs-keyword">return</span> v + <span class="hljs-number">1</span>; });
</code></pre>
<h2 id="requirespaceaftercomma">requireSpaceAfterComma</h2>
<p>Requires space after comma</p>
<p>Types: <code>Boolean</code>, or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Boolean</code>: <code>true</code> to require a space after any comma</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code> array of exceptions:<ul>
<li><code>&quot;trailing&quot;</code> ignore trailing commas</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<pre><code>&quot;requireSpaceAfterComma&quot;: {&quot;allExcept&quot;: [&quot;trailing&quot;]}
</code></pre><h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a, b;
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a,b;
</code></pre>
<h5 id="valid-for-mode-allexcept-trailing">Valid for mode <code>{&quot;allExcept&quot;: [&quot;trailing&quot;]}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>,];
</code></pre>
<h5 id="invalid-for-mode-allexcept-trailing">Invalid for mode <code>{&quot;allExcept&quot;: [&quot;trailing&quot;]}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a = [a,b,];
</code></pre>
<h2 id="requirespaceafterlinecomment">requireSpaceAfterLineComment</h2>
<p>Requires that a line comment (<code>//</code>) be followed by a space.</p>
<p>Types: <code>Boolean</code>, <code>Object</code> or <code>String</code></p>
<p>Values:</p>
<ul>
<li><code>true</code></li>
<li><code>&quot;allowSlash&quot;</code> (<em>deprecated</em> use <code>&quot;allExcept&quot;: [&quot;/&quot;]</code>) allows <code>///</code> format</li>
<li><code>Object</code>:<ul>
<li><code>allExcept</code>: array of allowed strings before space <code>//(here)</code></li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterLineComment"</span>: { <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"#"</span>, <span class="hljs-string">"="</span>] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// A comment</span>
<span class="hljs-comment">/*A comment*/</span>
<span class="hljs-comment">//# sourceURL=filename.js</span>
<span class="hljs-comment">//= require something</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">//A comment</span>
</code></pre>
<h2 id="requirespaceafterobjectkeys">requireSpaceAfterObjectKeys</h2>
<p>Requires space after object keys.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterObjectKeys"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a : <span class="hljs-number">1</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
</code></pre>
<h2 id="requirespaceafterprefixunaryoperators">requireSpaceAfterPrefixUnaryOperators</h2>
<p>Disallows sticking unary operators to the right.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to require space after prefix for all unary operators</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceAfterPrefixUnaryOperators"</span>: [<span class="hljs-string">"++"</span>, <span class="hljs-string">"--"</span>, <span class="hljs-string">"+"</span>, <span class="hljs-string">"-"</span>, <span class="hljs-string">"~"</span>, <span class="hljs-string">"!"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = ! y; y = ++ z;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = !y; y = ++z;
</code></pre>
<h2 id="requirespacebeforecomma">requireSpaceBeforeComma</h2>
<p>Requires space before comma</p>
<p>Types: <code>Boolean</code></p>
<p>Values: <code>true</code> to require a space before any comma</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a ,b;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a,b;
</code></pre>
<h2 id="requirespacebeforedestructuredvalues">requireSpaceBeforeDestructuredValues</h2>
<p>Require space after colon in object destructuring.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeDestructuredValues"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { foo: objectsFoo } = SomeObject;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { foo:objectsFoo } = SomeObject;
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { [ { foo: objectsFoo } ] } = SomeObject;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> { [ { foo:objectsFoo } ] } = SomeObject;
</code></pre>
<h2 id="requirespacebeforekeywords">requireSpaceBeforeKeywords</h2>
<p>Requires space before keyword.</p>
<p>Types: <code>Array</code>, <code>Boolean</code> or <code>Object</code></p>
<p>Values: <code>true</code> to require all possible keywords to have a preceding space (except <code>function</code>),
Array of quoted keywords
or an Object with the <code>allExcept</code> property set with an Array of quoted keywords.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeKeywords"</span>: [
    <span class="hljs-string">"else"</span>,
    <span class="hljs-string">"while"</span>,
    <span class="hljs-string">"catch"</span>
]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">} <span class="hljs-keyword">else</span> {
    x++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">}<span class="hljs-keyword">else</span> {
    x++;
}
</code></pre>
<h2 id="requirespacebeforeobjectvalues">requireSpaceBeforeObjectValues</h2>
<p>Requires space after object keys.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforeObjectValues"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a:<span class="hljs-number">1</span>};
</code></pre>
<h2 id="requirespacebeforepostfixunaryoperators">requireSpaceBeforePostfixUnaryOperators</h2>
<p>Disallows sticking unary operators to the left.</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values: Array of quoted operators or <code>true</code> to require space before postfix for all unary operators
(i.e. increment/decrement operators).</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpaceBeforePostfixUnaryOperators"</span>: [<span class="hljs-string">"++"</span>, <span class="hljs-string">"--"</span>]
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js">x = y ++; y = z --;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js">x = y++; y = z--;
</code></pre>
<h2 id="requirespacesincallexpression">requireSpacesInCallExpression</h2>
<p>Requires space before <code>()</code> in call expressions.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInCallExpression"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foobar ();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foobar();
</code></pre>
<h2 id="requirespacesinforstatement">requireSpacesInForStatement</h2>
<p>Requires spaces inbetween for statement.</p>
<p>Type: <code>Boolean</code></p>
<p>Value: <code>true</code> to requires spaces inbetween for statement.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInForStatement"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;l; i++) {
    x++;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>;i&lt;l;i++) {
    x++;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;l;i++) {
    x++;
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>;i&lt;l; i++) {
    x++;
}
</code></pre>
<h2 id="requirespacesinfunctiondeclaration">requireSpacesInFunctionDeclaration</h2>
<p>Requires space before <code>()</code> or <code>{}</code> in function declarations.</p>
<p>Type: <code>Object</code></p>
<p>Values: <code>&quot;beforeOpeningRoundBrace&quot;</code> and <code>&quot;beforeOpeningCurlyBrace&quot;</code> as child properties.
Child properties must be set to <code>true</code>.</p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInFunctionDeclaration"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{}
</code></pre>
<h2 id="requirespacesinfunction">requireSpacesInFunction</h2>
<p>Requires space before <code>()</code> or <code>{}</code> in function expressions (both <a href="#requirespacesinnamedfunctionexpression">named</a>
and <a href="#requirespacesinanonymousfunctionexpression">anonymous</a>) and function declarations.</p>
<p>Types: <code>Object</code></p>
<ul>
<li><code>Object</code> (at least one of properties must be present and it must be set to true):<ul>
<li><code>&#39;beforeOpeningRoundBrace&#39;</code><ul>
<li><code>true</code> validates that there is a space before <code>()</code></li>
</ul>
</li>
<li><code>&#39;beforeOpeningCurlyBrace&#39;</code><ul>
<li><code>true</code> validates that there is a space before <code>{}</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInFunction"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInFunction"</span>: {
    <span class="hljs-string">"beforeOpeningRoundBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInFunction"</span>: {
    <span class="hljs-string">"beforeOpeningCurlyBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid-for-mode-beforeopeningroundbrace-true-beforeopeningcurlybrace-true">Valid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true, &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="valid-for-mode-beforeopeningroundbrace-true">Valid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
</code></pre>
<h5 id="valid-for-mode-beforeopeningcurlybrace-true">Valid for mode <code>{ &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h5 id="invalid-for-mode-beforeopeningroundbrace-true-beforeopeningcurlybrace-true">Invalid for mode <code>{ &quot;beforeOpeningRoundBrace&quot;: true, &quot;beforeOpeningCurlyBrace&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> (<span class="hljs-params"></span>)</span>{}
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>)</span>{}
</code></pre>
<h2 id="requirespacesingenerator">requireSpacesInGenerator</h2>
<p>Requires space before and after <code>*</code> in generator functions</p>
<p>Types: <code>Object</code></p>
<ul>
<li><code>Object</code> (at least one of properties must be present and it must be set to true):<ul>
<li><code>&#39;beforeStar&#39;</code><ul>
<li><code>true</code> validates that there is a space before <code>*</code></li>
</ul>
</li>
<li><code>&#39;afterStar&#39;</code><ul>
<li><code>true</code> validates that there is a space after <code>*</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInGenerator"</span>: {
    <span class="hljs-string">"beforeStar"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"afterStar"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid-for-mode-beforestar-true-afterstar-true">Valid for mode <code>{ &quot;beforeStar&quot;: true, &quot;afterStar&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> * (<span class="hljs-params"></span>) </span>{};
<span class="hljs-function"><span class="hljs-keyword">function</span> * <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> * (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> * <span class="hljs-title">a</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> * <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> * (<span class="hljs-params"></span>)</span>{};
</code></pre>
<h2 id="requirespacesinsidearraybrackets">requireSpacesInsideArrayBrackets</h2>
<p>Requires space after opening array square bracket and before closing.
Reports only on arrays, not on property accessors.
Use <a href="http://jscs.info/rule/requireSpacesInsideBrackets.html">requireSpacesInsideBrackets</a>
to report on all brackets.</p>
<p>Types: <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>String</code><ul>
<li><code>&quot;all&quot;</code>: strict mode</li>
<li><code>&quot;allButNested&quot;</code>: (<em>deprecated</em> use Object version with <code>&quot;allExcept&quot;: [ &quot;[&quot;, &quot;]&quot; ]</code>) ignores nested
closing brackets in a row</li>
</ul>
</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: Array specifying list of tokens that can occur after an opening square bracket or before a
closing square bracket without a space</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideArrayBrackets"</span>: <span class="hljs-string">"all"</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideArrayBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"["</span>, <span class="hljs-string">"]"</span>, <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-all">Valid for mode <code>&quot;all&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ <span class="hljs-number">1</span> ];
<span class="hljs-keyword">var</span> x = a[<span class="hljs-number">1</span>];
</code></pre>
<h5 id="valid-for-mode-allexcept-or-allbutnested">Valid for mode <code>{ &quot;allExcept&quot;: [ &quot;[&quot;, &quot;]&quot; ] }</code> or <code>&quot;allButNested&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [[ <span class="hljs-number">1</span> ], [ <span class="hljs-number">2</span> ]];
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>{ &quot;allExcept&quot;: [ &quot;[&quot;, &quot;]&quot;, &quot;{&quot;, &quot;}&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [[ <span class="hljs-number">1</span> ], [ <span class="hljs-number">2</span> ]];
<span class="hljs-keyword">var</span> x = [{ a: <span class="hljs-number">1</span> }, { b: <span class="hljs-number">2</span>}];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>];
</code></pre>
<h2 id="requirespacesinsidebrackets">requireSpacesInsideBrackets</h2>
<p>Requires space after opening square bracket and before closing.
Reports on all on brackets, even on property accessors.
Use <a href="http://jscs.info/rule/requireSpacesInsideArrayBrackets.html">requireSpacesInsideArrayBrackets</a>
to exclude property accessors.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>Boolean</code><ul>
<li><code>true</code>: strict mode</li>
</ul>
</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: Array specifying list of tokens that can occur after an opening square bracket or before a
closing square bracket without a space</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideBrackets"</span>: <span class="hljs-literal">true</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"["</span>, <span class="hljs-string">"]"</span>, <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [ <span class="hljs-number">1</span> ];
<span class="hljs-keyword">var</span> x = a[ <span class="hljs-number">1</span> ];
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>{ allExcept&quot;: [ &quot;[&quot;, &quot;]&quot;, &quot;{&quot;, &quot;}&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [[ <span class="hljs-number">1</span> ], [ <span class="hljs-number">2</span> ]];
<span class="hljs-keyword">var</span> x = [{ a: <span class="hljs-number">1</span> }, { b: <span class="hljs-number">2</span>}];
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>];
</code></pre>
<h2 id="requirespacesinsideobjectbrackets">requireSpacesInsideObjectBrackets</h2>
<p>Requires space after opening object curly brace and before closing.</p>
<p>Types: <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>String</code><ul>
<li><code>&quot;all&quot;</code>: strict mode</li>
<li><code>&quot;allButNested&quot;</code>: (<em>deprecated</em> use Object version with <code>&quot;allExcept&quot;: [&#39;}&#39;]</code>) ignores nested
closing object braces in a row</li>
</ul>
</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: Array specifying list of tokens that can occur after an opening object brace or before a
closing object brace without a space</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideObjectBrackets"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"}"</span>, <span class="hljs-string">")"</span> ]
}
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideObjectBrackets"</span>: <span class="hljs-string">"all"</span>
</code></pre>
<h5 id="valid-for-mode-all">Valid for mode <code>&quot;all&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: { b: <span class="hljs-number">1</span> } };
</code></pre>
<h5 id="valid-for-mode-allexcept-or-allbutnested">Valid for mode <code>{ &quot;allExcept&quot;: [ &quot;}&quot; ] }</code> or <code>&quot;allButNested&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: { b: <span class="hljs-number">1</span> }};
</code></pre>
<h5 id="valid-for-mode-allexcept">Valid for mode <code>&quot;allExcept&quot;: [ &quot;}&quot;, &quot;)&quot; ]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = { a: (b ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>)};
<span class="hljs-keyword">var</span> x = { a: { b: <span class="hljs-number">1</span> }};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {a: <span class="hljs-number">1</span>};
</code></pre>
<h2 id="requirespacesinsideparentheses">requireSpacesInsideParentheses</h2>
<p>Requires space after opening round bracket and before closing.</p>
<p>Types: <code>String</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>String</code><ul>
<li><code>&quot;all&quot;</code>: strict mode</li>
<li><code>&quot;allButNested&quot;</code>: (<em>deprecated</em> use Object version with <code>&quot;except&quot;: [&quot;(&quot;, &quot;)&quot;]</code>) ignores nested brackets
in a row</li>
</ul>
</li>
<li><code>Object</code>:<ul>
<li><code>&quot;all&quot;</code>: true</li>
<li><code>&quot;ignoreParenthesizedExpression&quot;</code>: true</li>
<li><code>&quot;except&quot;</code>: Array specifying list of tokens that can occur after an opening bracket or before a
closing bracket without a space</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideParentheses"</span>: <span class="hljs-string">"all"</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideParentheses"</span>: {
    <span class="hljs-string">"all"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-string">"except"</span>: [ <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span>, <span class="hljs-string">"\""</span> ]
}
</code></pre>
<h5 id="valid-for-mode-all">Valid for mode <code>&quot;all&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-built_in">Math</span>.pow( ( <span class="hljs-number">1</span> + <span class="hljs-number">2</span> ), ( <span class="hljs-number">3</span> + <span class="hljs-number">4</span> ) );
</code></pre>
<h5 id="valid-for-mode-all-true-except-or-allbutnested">Valid for mode <code>{ &quot;all&quot;: true, &quot;except&quot;: [ &quot;(&quot;, &quot;)&quot; ] }</code> or <code>&quot;allButNested&quot;</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-built_in">Math</span>.pow(( <span class="hljs-number">1</span> + <span class="hljs-number">2</span> ), ( <span class="hljs-number">3</span> + <span class="hljs-number">4</span> ));
</code></pre>
<h5 id="valid-for-mode-all-true-ignoreparenthesizedexpression-true">Valid for mode <code>{ &quot;all&quot;: true, &quot;ignoreParenthesizedExpression&quot;: true }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> ( !(<span class="hljs-string">"foo"</span> <span class="hljs-keyword">in</span> obj) ) {}
</code></pre>
<h5 id="valid-for-mode-all-true-except">Valid for mode <code>{ &quot;all&quot;: true, &quot;except&quot;: [ &quot;{&quot;, &quot;}&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-built_in">Math</span>.pow( foo({ test: <span class="hljs-number">1</span> }) );
</code></pre>
<h5 id="valid-for-mode-all-true-except">Valid for mode <code>{ &quot;all&quot;: true, &quot;except&quot;: [ &quot;\&quot;&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = foo(<span class="hljs-string">"string"</span>);
<span class="hljs-keyword">var</span> x = foo( <span class="hljs-number">1</span> );
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-built_in">Math</span>.pow(<span class="hljs-number">1</span> + <span class="hljs-number">2</span>, <span class="hljs-number">3</span> + <span class="hljs-number">4</span>);
</code></pre>
<h2 id="requirespacesinsideparenthesizedexpression">requireSpacesInsideParenthesizedExpression</h2>
<p>Requires space after opening and before closing grouping parentheses.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: always require spaces inside grouping parentheses</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: <code>[ &quot;{&quot;, &quot;}&quot;, &quot;function&quot; ]</code> Ignore parenthesized objects and functions</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpacesInsideParenthesizedExpression"</span>: <span class="hljs-literal">true</span>

<span class="hljs-comment">// or</span>

<span class="hljs-string">"requireSpacesInsideParenthesizedExpression"</span>: {
    <span class="hljs-string">"allExcept"</span>: [ <span class="hljs-string">"{"</span>, <span class="hljs-string">"}"</span> ]
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = ( <span class="hljs-number">1</span> + obj.size ) * ( <span class="hljs-number">2</span> );
</code></pre>
<h5 id="valid-for-mode-allexcept-function">Valid for mode <code>{ allExcept&quot;: [ &quot;{&quot;, &quot;}&quot;, &quot;function&quot; ] }</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = ( options || { x: <span class="hljs-literal">true</span> }).x;
<span class="hljs-keyword">var</span> global = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>; })();
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = (<span class="hljs-number">1</span> + obj.size) * (<span class="hljs-number">2</span>);
</code></pre>
<h2 id="requirespread">requireSpread</h2>
<p>Disallows using <code>.apply</code> in favor of the spread operator</p>
<p>Types: <code>Boolean</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> specifies that apply <code>.apply</code> is disallowed</li>
</ul>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireSpread"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> wrap = (f, g) =&gt; (...args) =&gt; g(f, ...args)
instance.method(...args)
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> wrap = (f, g) =&gt; (...args) =&gt; g.apply(g, [f].concat(args))
instance.method.apply(instance, args);
</code></pre>
<h2 id="requiretemplatestrings">requireTemplateStrings</h2>
<p>Requires the use of template strings instead of string concatenation.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li>true</li>
<li><code>Object</code>:<ul>
<li><code>&quot;allExcept&quot;</code>: array of quoted exceptions:<ul>
<li><code>&quot;stringConcatenation&quot;</code> ignores strings concatenated with other strings</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Version: <code>ES6</code></p>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireTemplateStrings"</span>: <span class="hljs-literal">true</span>
<span class="hljs-string">"requireTemplateStrings"</span>: { <span class="hljs-string">"allExcept"</span>: [<span class="hljs-string">"stringConcatenation"</span>] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`How are you, <span class="hljs-subst">${name}</span>?`</span>;
}
<span class="hljs-string">`a <span class="hljs-subst">${b + c}</span>`</span>
<span class="hljs-string">`a <span class="hljs-subst">${a()}</span>`</span>
</code></pre>
<h5 id="valid-for-allexcept-stringconcatenation">Valid for <code>{ &quot;allExcept&quot;: [&quot;stringConcatenation&quot;] }</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayBye</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`It was good seeing you, <span class="hljs-subst">${name}</span>! Let's hang out again sometime and`</span> +
        <span class="hljs-string">' grab some chicken and waffles.'</span>;
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'How are you, '</span> + name + <span class="hljs-string">'?'</span>;
}
<span class="hljs-string">"a"</span> + (b + c)
<span class="hljs-string">"a"</span> + a()
</code></pre>
<h2 id="requiretrailingcomma">requireTrailingComma</h2>
<p>Requires an extra comma following the final element of an array or object literal.</p>
<p>Types: <code>Boolean</code> or <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: validates all arrays and objects</li>
<li><code>Object</code>:<ul>
<li><code>ignoreSingleValue</code>: allows single property objects and single element arrays to not require a trailing comma</li>
<li><code>ignoreSingleLine</code>: allows objects and arrays on a single line to not require a trailing comma</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireTrailingComma"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>,];
<span class="hljs-keyword">var</span> bar = {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>,}
</code></pre>
<h5 id="valid-with-ignoresinglevalue">Valid with ignoreSingleValue</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> car = [<span class="hljs-number">1</span>];
<span class="hljs-keyword">var</span> dar = {a: <span class="hljs-string">"a"</span>};
</code></pre>
<h5 id="valid-with-ignoresingleline">Valid with ignoreSingleLine</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> car = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> dar = {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> bar = {a: <span class="hljs-string">"a"</span>, b: <span class="hljs-string">"b"</span>}
</code></pre>
<h2 id="requirevardeclfirst">requireVarDeclFirst</h2>
<p>Requires <code>var</code> declaration to be on the top of an enclosing scope</p>
<p>Types: <code>Boolean</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> specifies that <code>var</code> declarations must occur the top of a function scope.</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireVarDeclFirst"</span>: <span class="hljs-literal">true</span>
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>,
    y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">'use strict;'</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>,
    y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-comment">// comments</span>
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-comment">// comments</span>
<span class="hljs-comment">// comments 2</span>
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> b = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">y</span>(<span class="hljs-params"></span>) </span>{<span class="hljs-keyword">var</span> z;};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<span class="hljs-keyword">var</span> z;};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> w = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{
 <span class="hljs-keyword">var</span> y;
<span class="hljs-comment">// comments</span>
<span class="hljs-comment">// comments 2</span>
 <span class="hljs-keyword">var</span> z;
};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> w = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{
<span class="hljs-pi"> "use strict"</span>;
 <span class="hljs-keyword">var</span> y;
};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y;
<span class="hljs-keyword">for</span> (y = <span class="hljs-number">0</span>; y &lt; <span class="hljs-number">10</span>; y++) {};
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x;
x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> y = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> w = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{<span class="hljs-keyword">var</span> y;};
<span class="hljs-keyword">var</span> z = <span class="hljs-number">2</span>;
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> w = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">x</span>(<span class="hljs-params"></span>) </span>{
 <span class="hljs-keyword">var</span> y;
 y = <span class="hljs-number">2</span>;
 <span class="hljs-keyword">var</span> z;
};
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> a;
<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> count=<span class="hljs-number">0</span>;count &lt; <span class="hljs-number">10</span>;count++){}
</code></pre>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x;
<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> count=<span class="hljs-number">0</span>;count &lt; <span class="hljs-number">10</span>;count++){
 <span class="hljs-keyword">var</span> y;
}
</code></pre>
<h2 id="requireyodaconditions">requireYodaConditions</h2>
<p>Requires the variable to be the right hand operator when doing a boolean comparison</p>
<p>Types: <code>Array</code> or <code>Boolean</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> specifies that yoda conditions are required for most possible comparison operators</li>
<li><code>Array</code>: represents the list of quoted operators that requires yoda conditions</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"requireYodaConditions"</span>: <span class="hljs-literal">true</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"requireYodaConditions"</span>: [
    <span class="hljs-string">"=="</span>,
    <span class="hljs-string">"==="</span>,
    <span class="hljs-string">"!="</span>,
    <span class="hljs-string">"!=="</span>
]
</code></pre>
<h5 id="valid-for-mode-true-or">Valid for mode <code>true</code> or <code>[&#39;==&#39;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (<span class="hljs-number">1</span> == a) {
    <span class="hljs-keyword">return</span>
}
</code></pre>
<h5 id="invalid-for-mode-true-or">Invalid for mode <code>true</code> or <code>[&#39;==&#39;]</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">if</span> (a == <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">return</span>
}
</code></pre>
<h2 id="validatealignedfunctionparameters">validateAlignedFunctionParameters</h2>
<p>Validates proper alignment of function parameters.</p>
<p>Types: <code>Boolean</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: setting this is the same as validating the rule using
<code>{lineBreakAfterOpeningBrace: true, lineBreakBeforeClosingBrace: true}</code></li>
<li><code>Object</code>:<ul>
<li><code>lineBreakAfterOpeningBrace</code><ul>
<li><code>true</code> specifies that the first function parameter must not be on the same line as the opening brace <code>(</code>
of the function parameters list</li>
</ul>
</li>
<li><code>lineBreakBeforeClosingBrace</code><ul>
<li><code>true</code> specifies that the last function parameter must not be on the same line as the closing brace <code>)</code>
of the function parameters list</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateAlignedFunctionParameters"</span>: {
  <span class="hljs-string">"lineBreakAfterOpeningBrace"</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-string">"lineBreakBeforeClosingBrace"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h5 id="valid-for-mode-linebreakafteropeningbrace-true-linebreakbeforeclosingbrace-true">Valid for mode <code>{ &quot;lineBreakAfterOpeningBrace&quot;: true, &quot;lineBreakBeforeClosingBrace&quot;: true}</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">
  thisIs,
  theLongestList,
  ofParametersEverWritten
</span>) </span>{}
</code></pre>
<h5 id="invalid-for-mode-linebreakafteropeningbrace-true-linebreakbeforeclosingbrace-true">Invalid for mode <code>{ &quot;lineBreakAfterOpeningBrace&quot;: true, &quot;lineBreakBeforeClosingBrace&quot;: true}</code></h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">thisIs,
          theLongestList,
          ofParametersEverWritten</span>) </span>{}
</code></pre>
<h2 id="validatecommentposition">validateCommentPosition</h2>
<p>This rule is for validating the positioning of line comments. Block comments are ignored.</p>
<p>Comments that start with the following keywords are also ignored:
<code>eslint</code>, <code>jshint</code>, <code>jslint</code>, <code>istanbul</code>, <code>global</code>, <code>exported</code>, <code>jscs</code>, <code>falls through</code>
eg. // jshint strict: true</p>
<p>Type: <code>Object</code></p>
<p>Value:</p>
<ul>
<li><code>Object</code>:<ul>
<li><code>position</code>: <code>above</code> or <code>beside</code></li>
<li><code>allExcept</code>: array of quoted exceptions (comments that start with these values will be excepted)</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateCommentPosition"</span>: { position: <span class="hljs-string">`above`</span>, allExcept: [<span class="hljs-string">`pragma`</span>] }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// This is a valid comment</span>
<span class="hljs-number">1</span> + <span class="hljs-number">1</span>;
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-number">1</span> + <span class="hljs-number">1</span>; <span class="hljs-comment">// This is an invalid comment</span>
<span class="hljs-number">2</span> + <span class="hljs-number">2</span>; <span class="hljs-comment">// pragma (this comment is fine)</span>
</code></pre>
<pre><code class="lang-js"><span class="hljs-string">"validateCommentPosition"</span>: { position: <span class="hljs-string">`beside`</span> }
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-number">1</span> + <span class="hljs-number">1</span>; <span class="hljs-comment">// This is a valid comment</span>
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-comment">// This is an invalid comment</span>
<span class="hljs-number">1</span> + <span class="hljs-number">1</span>;
</code></pre>
<h2 id="validatenewlineafterarrayelements">validateNewlineAfterArrayElements</h2>
<p>Requires each element in array on a single line when array length is more than passed maximum
number or array fills more than one line.</p>
<p>Types: <code>Boolean</code>, <code>Integer</code>, <code>Object</code></p>
<p>Values:</p>
<ul>
<li><code>true</code>: setting this is the same as validating the rule using <code>{maximum: Infinity, ignoreBrackets: false}</code></li>
<li><code>Integer</code>: setting this is the same as validating the rule using <code>{maximum: Integer, ignoreBrackets: false}</code></li>
<li><code>Object</code>:<ul>
<li><code>maximum</code><ul>
<li><code>Integer</code> specifies the maximum number of elements that a single line array can contain</li>
</ul>
</li>
<li><code>ignoreBrackets</code><ul>
<li><code>true</code> specifies that the <code>[</code> and <code>]</code> brackets can be placed on the same line as the array elements</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateNewlineAfterArrayElements"</span>: {
  <span class="hljs-string">"maximum"</span>: <span class="hljs-number">3</span>
}
</code></pre>
<h5 id="valid-for-mode-true">Valid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [{a: <span class="hljs-number">1</span>}, [<span class="hljs-number">2</span>], <span class="hljs-string">'3'</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];
<span class="hljs-keyword">var</span> x = [
  {a: <span class="hljs-number">1</span>},
  [<span class="hljs-number">2</span>],
  <span class="hljs-string">'3'</span>,
  <span class="hljs-number">4</span>
];
</code></pre>
<h5 id="invalid-for-mode-true">Invalid for mode <code>true</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>];
</code></pre>
<h5 id="valid-for-mode-3">Valid for mode <code>3</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [{a: <span class="hljs-number">1</span>}, [<span class="hljs-number">2</span>], <span class="hljs-string">'3'</span>];
<span class="hljs-keyword">var</span> x = [
  <span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>,
  <span class="hljs-number">3</span>,
  <span class="hljs-number">4</span>
];
</code></pre>
<h5 id="invalid-for-mode-3">Invalid for mode <code>3</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>,
  <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> x = [
    <span class="hljs-number">1</span>, <span class="hljs-number">2</span>
];
</code></pre>
<h5 id="valid-for-mode-maximum-2-ignorebrackets-true">Valid for mode <code>{maximum: 2, ignoreBrackets: true}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [{a: <span class="hljs-number">1</span>}, [<span class="hljs-number">2</span>]];
<span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>,
  <span class="hljs-number">3</span>];
</code></pre>
<h5 id="invalid-for-mode-maximum-2-ignorebrackets-true">Invalid for mode <code>{maximum: 2, ignoreBrackets: true}</code></h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>,
  <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> x = [<span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
</code></pre>
<h2 id="validateorderinobjectkeys">validateOrderInObjectKeys</h2>
<p>Validates the order in object keys.</p>
<p>Types: <code>Boolean</code> or <code>String</code></p>
<p>Values:</p>
<ul>
<li><code>true</code> (alias to <code>asc</code>)</li>
<li><code>&quot;asc&quot;</code>: requires sorting in ascending order</li>
<li><code>&quot;asc-insensitive&quot;</code>: requires sorting in ascending order (case-insensitive)</li>
<li><code>&quot;asc-natural&quot;</code>: requires sorting in ascending natural order</li>
<li><code>&quot;desc&quot;</code>: requires sorting in descending order</li>
<li><code>&quot;desc-insensitive&quot;</code>: requires sorting in descending order (case-insensitive)</li>
<li><code>&quot;desc-natural&quot;</code>: requires sorting in descending natural order</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateOrderInObjectKeys"</span>: <span class="hljs-string">"asc"</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
 x: <span class="hljs-string">'foo'</span>,
 y: <span class="hljs-string">'bar'</span>
}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> x = {
 y: <span class="hljs-string">'foo'</span>,
 x: <span class="hljs-string">'bar'</span>
}
</code></pre>
<h2 id="validateparameterseparator">validateParameterSeparator</h2>
<p>Enable validation of separators between function parameters. Will ignore newlines.</p>
<p>Type: <code>String</code></p>
<p>Values:</p>
<ul>
<li><code>&quot;,&quot;</code>: function parameters are immediately followed by a comma</li>
<li><code>&quot;, &quot;</code>: function parameters are immediately followed by a comma and then a space</li>
<li><code>&quot; ,&quot;</code>: function parameters are immediately followed by a space and then a comma</li>
<li><code>&quot; , &quot;</code>: function parameters are immediately followed by a space, a comma, and then a space</li>
</ul>
<h4 id="example">Example</h4>
<pre><code class="lang-js"><span class="hljs-string">"validateParameterSeparator"</span>: <span class="hljs-string">", "</span>
</code></pre>
<h5 id="valid">Valid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params">b, c</span>) </span>{}
</code></pre>
<h5 id="invalid">Invalid</h5>
<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params">b , c</span>) </span>{}
</code></pre>

          </body>
        </html>
      