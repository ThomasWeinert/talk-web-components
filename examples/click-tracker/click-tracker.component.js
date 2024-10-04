class ClickTrackerComponent extends HTMLElement {

  constructor() {
    super();
    this._ul = document.createElement('ul');
    this._ul.style.border = '1px solid green';
    this._ul.style.minHeight = '100px';
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(this._ul);
  }

  connectedCallback() {
    this._track = (event) => {
      this.add(event);
    }
    document.addEventListener('click', this._track);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this._track);
  }

  add(event) {
    const li = document.createElement('li');
    li.textContent = `CLICK: ${event.target.localName}, ${(new Date).toLocaleTimeString()}`;
    this._ul.append(li);
  }

}

customElements.define('cui-click-tracker', ClickTrackerComponent);
