window.WebComponents = window.WebComponents || {};
window.WebComponents.root = 'node_modules/@webcomponents/webcomponentsjs/';

import '@webcomponents/webcomponentsjs/webcomponents-loader.js';

import { createComponent } from './utilities/createComponent';

/** @todo Remove code sample. */

const HelloWorld = createComponent('hello-world', {
  props: ['name'],
  render() {
    return `
      <div>Hello ${this.name || 'World'}!</div>
    `
  }
});

document.body.appendChild(new HelloWorld());
