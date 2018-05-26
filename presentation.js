import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.5.1/lit-element.js?module';
import {hljsStyles} from './hljs-styles.js';

class PresentationElement extends LitElement {

  static get properties() {
    return {
      page: {
        type: Number,
        totalPages: Number
      }
    }
  }
  
  constructor() {
    super();
    this.page = 0;
    this.totalPages = 18;
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.__kbListener = document.addEventListener('keydown', ({keyCode}) => {
      if (keyCode === 39) this.next();
      if (keyCode === 37) this.prev();
    });
    this.addEventListener('syntax-highlight', function(event) {
      const {code, lang} = event.detail;
      if (lang == null) {
        event.detail.code = hljs.highlightAuto(code).value
      } else {
        event.detail.code = hljs.highlight(lang, code).value;
      }
      return event;
    });
  }
  
  disconnectedCallback() {
    document.removeEventListener(this.__kbListener);
    this.__kbListener = null;
  }
  
  next() {
    if (this.page >= this.totalPages - 1) {
      return;
    }
    this.page++;
  }
  
  prev() {
    if (this.page < 1) {
      return;
    }
    this.page--;
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render({page}) {
    return html`
      <style>
        .controls {
          position: fixed;
          bottom:0;
          text-align:center;
          width:100%;
        }
        iron-pages {
          max-width:900px;
          border: 5px solid #00FFFF;
          margin: 0px auto;
          padding: 0 24px;
        }
        [slot="markdown-html"] {
          font-size: 18px;
        }
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
      </style>
      <iron-pages selected="${page}">

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./000-README.md"></script>
          </marked-element>        

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./010-WHY.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./020-WC.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./030-CE.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./031-CE2.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./032-CE3.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./040-HT.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./050-SD.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./060-HI.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./070-BROWSERS.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./080-WHO-USES.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./090-P2.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./091-P2-example.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./100-EXPERIENCE.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./110-P3.md"></script>
          </marked-element>

          <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./120-JSX.md"></script>
          </marked-element>

         <marked-element>
            <div slot="markdown-html"></div>
            <script type="text/markdown" src="./130-LIT.md"></script>
          </marked-element>


      </iron-pages>

      <div class="controls">
        <button on-click="${(e) => this.prev()}">←</button>
        <button on-click="${(e) => this.next()}">→</button>
      </div>
    `;
  }

}
customElements.define('presentation-element', PresentationElement);