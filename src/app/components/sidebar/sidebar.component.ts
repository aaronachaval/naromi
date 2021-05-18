import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '../../services/categories.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  categories: Category[];

  constructor(categoriesServices: CategoriesService) {
    this.categories = categoriesServices.getCategories();
  }
}
