class HelloComponent extends HTMLElement {

  static observedAttributes = [
    'target'
  ];


  constructor() {
    super();
    this._name = document.createElement('span');

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(
      'Hello ', this._name, '!'
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
