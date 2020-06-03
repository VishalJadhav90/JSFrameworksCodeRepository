import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output('itemAdded') itemAdded = new EventEmitter<Ingredient>();
  @Output('itemDeleted') itemDeleted = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    //this.itemAdded.emit(new Ingredient(nameInput.value, +amountInput.value));
    this.shoppingListService.itemsAdded.emit(new Ingredient(nameInput.value, +amountInput.value))
  }

  onDelete(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    //this.itemDeleted.emit(new Ingredient(nameInput.value, +amountInput.value));
    this.shoppingListService.itemsRemoved.emit(new Ingredient(nameInput.value, +amountInput.value));
  }

  onClear(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    nameInput.value = '';
    amountInput.value = '';
  }
}
