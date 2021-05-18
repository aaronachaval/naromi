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
        },
        {
          name: 'Lisos',
          link: 'lisos'
        },
        {
          name: 'De Piel Sintética',
          link: 'pielsintetica'
        },
        {
          name: 'Familias',
          link: 'familias'
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
    },
    {
      name: 'Mantas',
      link: 'mantas',
      children: []
    },
    {
      name: 'Mesas de arrime',
      link: 'arrime',
      children: [
        {
          name: 'de chapa',
          link: 'chapa'
        },
        {
          name: 'de hierro',
          link: 'hierro'
        },
        {
          name: 'de madera',
          link: 'madera'
        }
      ]
    },
    {
      name: 'Patas',
      link: 'patas',
      children: [
        {
          name: 'de aluminio pulido',
          link: 'aluminio'
        },
        {
          name: 'de chapa',
          link: 'chapa',
        },
        {
          name: 'de madera',
          link: 'madera',
        },
      ]
    },
    {
      name: 'Otros',
      link: 'otros',
      children: [
        {
          name: 'Espejos',
          link: 'espejos'
        },
        {
          name: 'Veladores',
          link: 'veladores'
        },
        {
          name: 'Macetas',
          link: 'macetas'
        },
        {
          name: 'Estantes',
          link: 'estantes'
        },
        {
          name: 'Percheros',
          link: 'percheros'
        }
      ]
    },
    {
      name: 'Contacto',
      link: 'contacto',
      children: []
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
