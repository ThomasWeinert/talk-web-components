class AppShellComponent extends HTMLElement {

  constructor() {
    super();
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: grid;
        grid-template-rows: 100px 10fr; 
      }
      slot {
        display: block;
        border: 1px solid blue;
      }
    `;
    const header = document.createElement('slot');
    header.setAttribute('name', 'header');
    const main =  document.createElement('slot');
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(style, header, main);
  }
}

customElements.define('cui-app-shell', AppShellComponent);
