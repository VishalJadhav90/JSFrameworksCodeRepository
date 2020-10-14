import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Testy Schnitzel',
      'Super tasty Schnitzel - just awesome !',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg/1280px-Oscar_schnitzel_at_Grilli_Toro.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1920px-RedDot_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Chicken Meat', 2)
      ]
    ),
  ];

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipeChanged = new Subject();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes;
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppingListService.itemsAdded.next(new Ingredient(ingredient.name, +ingredient.amount));
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
