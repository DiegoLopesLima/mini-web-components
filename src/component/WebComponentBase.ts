export default class WebComponentBase extends HTMLElement {
  shadowDOM: ShadowRoot;
  styleElement: HTMLElement;

  constructor() {
    super();

    this.create();
  }

  private create() {
    this.createShadowDOM();
    this.createStyleElement();
  }

  private createShadowDOM() {
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  private createStyleElement() {
    this.styleElement = document.createElement('style');

    this.shadowDOM.appendChild(this.styleElement);
  }
}
