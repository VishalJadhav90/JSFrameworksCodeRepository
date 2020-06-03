import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
    })
  }

  ngOnInit(): void {
  }

}
