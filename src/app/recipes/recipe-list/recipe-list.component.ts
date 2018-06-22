import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'Test desc', 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  displayDetails(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
