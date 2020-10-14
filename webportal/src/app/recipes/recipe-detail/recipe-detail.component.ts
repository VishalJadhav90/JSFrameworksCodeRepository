import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    route.params.subscribe((param) => {
        this.id = +param['id'];
        this.recipe = recipeService.getRecipe(this.id);
    });
  }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

  removeTheRecipe() {
    this.recipeService.removeRecipe(this.id);
  }
}
