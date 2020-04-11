import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Panipuri',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg/250px-Panipuri%2C_Golgappa%2C_Phuchka.jpg',
      ingredients: ['Flour', 'Spice Water', 'Onions', 'Potatoes'],
    },
    {
      id: 'r2',
      title: 'Gulabjamun',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Gulaab_Jamun_%28homemade%21%29_bright.jpg/1024px-Gulaab_Jamun_%28homemade%21%29_bright.jpg',
      ingredients: ['Sugar', 'Spices', 'Flour'],
    }
  ];
  constructor() { }

  getAllRecipes() {
    console.log("inside getAllRecipes")
    return this.recipes;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
  }

  getRecipe(recipeId: string) {
    return this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  }

}
