class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h2>Welcome To Website The Meal</h2>`;
  }
}

customElements.define("app-bar", AppBar);
