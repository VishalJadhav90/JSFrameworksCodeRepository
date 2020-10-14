import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put<{[id: string]: string}>('https://ng-course-recipe-book-da63e.firebaseio.com/recipes.json', recipes)
    .subscribe((res) => {
      console.log("Response of storeRecipes: ", res);
    })
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng-course-recipe-book-da63e.firebaseio.com/recipes.json',
    )
    .subscribe((res)=> {
      console.log("Response of fetchRecipes: ", res);
      this.recipeService.setRecipes(res);
    })
  }
}
