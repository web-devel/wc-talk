export const hljsStyles = `
  :host marked-element [slot="markdown-html"] pre code .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-comment,
  :host marked-element [slot="markdown-html"] pre code .hljs-quote {
    color: #998;
    font-style: italic;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-keyword,
  :host marked-element [slot="markdown-html"] pre code .hljs-selector-tag,
  :host marked-element [slot="markdown-html"] pre code .hljs-subst {
    color: #333;
    font-weight: bold;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-number,
  :host marked-element [slot="markdown-html"] pre code .hljs-literal,
  :host marked-element [slot="markdown-html"] pre code .hljs-variable,
  :host marked-element [slot="markdown-html"] pre code .hljs-template-variable,
  :host marked-element [slot="markdown-html"] pre code .hljs-tag .hljs-attr {
    color: #008080;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-string,
  :host marked-element [slot="markdown-html"] pre code .hljs-doctag {
    color: #d14;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-title,
  :host marked-element [slot="markdown-html"] pre code .hljs-section,
  :host marked-element [slot="markdown-html"] pre code .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-subst {
    font-weight: normal;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-type,
  :host marked-element [slot="markdown-html"] pre code .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-tag,
  :host marked-element [slot="markdown-html"] pre code .hljs-name,
  :host marked-element [slot="markdown-html"] pre code .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-regexp,
  :host marked-element [slot="markdown-html"] pre code .hljs-link {
    color: #009926;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-symbol,
  :host marked-element [slot="markdown-html"] pre code .hljs-bullet {
    color: #990073;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-built_in,
  :host marked-element [slot="markdown-html"] pre code .hljs-builtin-name {
    color: #0086b3;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-meta {
    color: #999;
    font-weight: bold;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-deletion {
    background: #fdd;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-addition {
    background: #dfd;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-emphasis {
    font-style: italic;
  }
  :host marked-element [slot="markdown-html"] pre code .hljs-strong {
    font-weight: bold;
  }
`;