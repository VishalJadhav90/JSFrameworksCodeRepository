import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output('recipe-selected') recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


  // onRecipeSelected(recipeSelected: Recipe) {
  //   this.recipeSelected.emit(recipeSelected);
  // }
}
