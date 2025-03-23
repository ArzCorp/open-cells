import { html } from 'lit';

import { CorePage } from '../../config/core-page';

export class SecondPage extends CorePage {
  constructor() {
    super();
    this.greeting = '';

    this.handlerChannelGreeting();
  }

  static get is() {
    return 'second-page';
  }

  static get properties() {
    return {
      greeting: { type: String },
    };
  }

  handlerChannelGreeting() {
    this.subscribe('greeting', (message) => {
      this.greeting = message;
    });
  }

  render() {
    return html`
      <main>
        <h1>${this.t("second-page.title")}</h1>
        <p>${this.greeting}</p>
        <button @click="${() => this.navigate('home')}">Go to home page</button>
      </main>
    `;
  }
}

customElements.define(SecondPage.is, SecondPage);