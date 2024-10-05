class HelloComponent extends HTMLElement {

  static observedAttributes = [
    'target'
  ];

  constructor() {
    super();
    const style = document.createElement('style');
    style.textContent = `
      :host {
        color: green;
        font-size: 36px;
      }
    `;
    this._name = document.createElement('span');
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(
      style, 'Hello ', this._name, '!'
    );
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case 'target':
        this._name.textContent = newValue || '';
        break;
    }
  }
}

customElements.define('cui-hello', HelloComponent);
