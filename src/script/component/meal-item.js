class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
            <img class="fan-art-meal" src="${this._meal.fanArt}" alt="Fan Art">
           <div class="meal-info">
               <h2>${this._meal.name}</h2>
               <p>${this._meal.description}</p>
           </div>`;
  }
}

customElements.define("meal-item", MealItem);
