import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnDestroy {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  itemsAdded: Subject<Ingredient> =  new Subject<Ingredient>();
  itemsRemoved: Subject<Ingredient> = new Subject<Ingredient>();
  itemsSet: Subject<Ingredient> = new Subject<Ingredient>();

  private itemsAddedSubscription: Subscription = null;
  private itemsRemovedSubscription: Subscription = null;
  private itemsSetSubscription: Subscription = null;

  startedEditing: Subject<number> = new Subject<number>();

  constructor() {
    this.itemsAddedSubscription = this.itemsAdded.subscribe((ingredient: Ingredient) => {
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
      this.ingredientsChanged.next(this.ingredients.slice());
    });

    this.itemsRemovedSubscription = this.itemsRemoved.subscribe((ingredient: Ingredient) => {
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
      this.ingredientsChanged.next(this.ingredients.slice());
    });

    this.itemsSetSubscription = this.itemsSet.subscribe((ingredient: Ingredient) => {
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].name === ingredient.name) {
          this.ingredients[i].amount = ingredient.amount;
        }
      }
    });
  }


  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngredients(index: number, amount: number) {
    this.ingredients[index].amount = amount;
  }

  ngOnDestroy() {
    if (this.itemsAddedSubscription) {
      this.itemsAddedSubscription.unsubscribe();
    }
    if (this.itemsRemovedSubscription) {
      this.itemsRemovedSubscription.unsubscribe();
    }
    if (this.itemsSetSubscription) {
      this.itemsSetSubscription.unsubscribe();
    }
  }

}
