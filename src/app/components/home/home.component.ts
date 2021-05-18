import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  opened = false;


  toggleSidebar() {
    this.opened = !this.opened;
  }


  categories: Category[];

  constructor(categoriesServices: CategoriesService) {
    this.categories = categoriesServices.getCategories();
  }

}
