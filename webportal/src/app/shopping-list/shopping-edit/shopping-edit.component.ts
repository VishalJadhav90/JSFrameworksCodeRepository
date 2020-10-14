import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: true}) slForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((itemIndex: number) => {
      console.log("itemIndex....",itemIndex);
      this.editMode = true;
      this.editedItemIndex = itemIndex;
      this.editedItem = this.shoppingListService.getIngredient(itemIndex);
      console.log("editedItem....", this.editedItem);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onAdd(f: NgForm) {
    if (this.editMode) {
      this.shoppingListService.itemsSet.next(new Ingredient(f.value.name, +f.value.amount))
    } else {
      this.shoppingListService.itemsAdded.next(new Ingredient(f.value.name, +f.value.amount))
    }
    this.editMode = false
    f.reset();
  }

  onDelete(f: NgForm) {
    this.shoppingListService.itemsRemoved.next(new Ingredient(f.value.name, +f.value.amount));
    this.editMode = false;
    f.reset();
  }

  onClear(f: NgForm) {
    this.editMode = false;
    f.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
