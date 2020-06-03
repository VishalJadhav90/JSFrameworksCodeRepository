import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe-item') recipeItem: Recipe;
  @Input('recipe-index') recipeIndex: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      this.recipeItem = this.recipeService.getRecipe(+param.id);
    })
   }

  ngOnInit(): void {
  }

}
