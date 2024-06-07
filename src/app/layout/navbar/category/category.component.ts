import { CategoryService } from './category.service';
import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  categoryService = inject(CategoryService);
  
  categories: Category[] | undefined

  currentActivateCategory = this.categoryService.getCategoriesByDefault()

  ngOnInit(): void {
      this.fetchCategories()
  }

  private fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

}
