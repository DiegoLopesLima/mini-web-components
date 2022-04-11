import { WebComponentBase } from '../component';

interface ComponentConfig {
  props: string[];
  created?(): void;
  beforeDestroy?(): void;
  render(): string;
}

export const createComponent = (
  name: string,
  {
    props,
    created,
    beforeDestroy,
    render
  }: ComponentConfig
) => {
  class WebComponent extends WebComponentBase {
    constructor() {
      super();
    }

    static get observedAttributes() {
      return props;
    }

    connectedCallback() {
      this.render();

      created && created.call(this);
    }

    disconnectedCallback() {
      beforeDestroy && beforeDestroy.call(this);
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      this.render();

      /** @todo Remove log. */
      console.log('attributeChangedCallback', name, oldValue, newValue);
    }

    render() {
      this.shadowDOM.innerHTML = render.call(this);
    }
  }

  props.forEach(prop => Object.defineProperty(WebComponent.prototype, prop, {
    get: function() {
      return this.getAttribute(prop);
    },
    set: function(value) {
      this.setAttribute(prop, value);
    }
  }));

  customElements.define(name, WebComponent);

  return WebComponent;
};
