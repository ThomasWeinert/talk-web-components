import { WebComponentAttributeChanged } from "../web-component/web-component-attribute-changed";
import { WebComponent } from "../web-component/web-component";

@WebComponent(
  'cui-hello',
  {
    target: 'string',
  }
)
class HelloComponent
  extends HTMLElement
  implements WebComponentAttributeChanged {

  public static observedAttributes = [
    'target'
  ];

  private readonly _name: HTMLSpanElement;

  constructor() {
    super();
    this._name = document.createElement('span');

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.append(
      'Hello ', this._name, '!'
    );
  }

  public attributeChangedCallback(
    name: string, _: string | null, newValue: string | null
  ) {
    switch (name) {
      case 'target':
        this._name.textContent = newValue || '';
        break;
    }
  }
}

customElements.define('cui-hello', HelloComponent);
