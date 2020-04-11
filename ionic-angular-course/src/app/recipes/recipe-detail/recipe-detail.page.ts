import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipeService: RecipesService,
    private router: Router) 
    { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (! paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    })
  }

  onDelete() {
    console.log("I am here")
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
