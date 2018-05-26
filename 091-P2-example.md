# Polymer2 - example

```html
<link rel="import" href="../bower_components/polymer/polymer.html">

<dom-module id="x-custom">
  <!-- Optional shadow DOM template -->
  <template>
    <style>
      /* CSS rules for your element */
    </style>
    <!-- shadow DOM for your element -->
    <div>{{greeting}}</div> <!-- data bindings in local DOM -->
  </template>

  <script>
    // Define the element's API using an ES2015 class
    class XCustom extends Polymer.Element {

      static get is() { return 'x-custom'; }

      // Declare properties for the element's public API
      static get properties() {
        return {
          greeting: {
            type: String,
            value: "Hello!"
          }
        }
      }

      // Add methods to the element's public API
      greetMe() {
        console.log(this.greeting);
      }

    }

    // Register the x-custom element with the browser
    customElements.define(XCustom.is, XCustom);
  </script>

</dom-module>
```