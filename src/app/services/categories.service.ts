import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  private categories: Category[] = [
    {
      name: 'Almohadones',
      link: 'almohadones',
      children: [
        {
          name: 'Bordados',
          link: 'bordados'
        },
        {
          name: 'Estampados',
          link: 'estampados'
        }
      ]
    },
    {
      name: 'Puffs',
      link: 'puffs',
      children: [
        {
          name: 'Pelo Corto',
          link: 'pelo-corto'
        },
        {
          name: 'Pelo Largo',
          link: 'pelo-largo'
        }
      ]
    }
  ];

  constructor() {
    console.log('Servicio listo para usar!');
  }

  getCategories(): Category[] {
    return this.categories;
  }
}

export interface Category {
  name: string;
  link: string;
  children: Subcategory[];
}

export interface Subcategory {
  name: string;
  link: string;
}
