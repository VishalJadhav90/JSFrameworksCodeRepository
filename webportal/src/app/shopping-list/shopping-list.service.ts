import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  itemsAdded: EventEmitter<Ingredient> =  new EventEmitter<Ingredient>();
  itemsRemoved: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
    this.itemsAdded.subscribe((ingredient: Ingredient) => {
      let incr = false;
      for (let ingre of this.ingredients) {
        if (ingre.name === ingredient.name) {
          ingre.amount += ingredient.amount;
          incr = true;
        }
      }
      if (!incr) {
        this.ingredients.push(ingredient);
      }
      this.ingredientsChanged.emit(this.ingredients.slice());
    });

    this.itemsRemoved.subscribe((ingredient: Ingredient) => {
      let decr = false;
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].name === ingredient.name) {
          this.ingredients[i].amount -= ingredient.amount;
          decr = true;
          if (this.ingredients[i].amount === 0) {
            this.ingredients.splice(i, 1);
          }
        }
      }
      this.ingredientsChanged.emit(this.ingredients.slice());
    });
  }

  addIngredient(ingredient: Ingredient) {

  }

  removeIngredient(ingredient: Ingredient) {

  }

}
