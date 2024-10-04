class HelloWorldComponent extends HTMLElement {

  constructor() {
    super();
    this._span = document.createElement('span');
    this._span.textContent = 'Hello World';

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(this._span);
  }
}

customElements.define('cui-hello-world', HelloWorldComponent);
