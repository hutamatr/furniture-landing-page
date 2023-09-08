import chairOne from '@assets/image/furniture/chair-1.webp';
import sofaOne from '@assets/image/furniture/sofa-1.webp';
import sofaTwo from '@assets/image/furniture/sofa-2.webp';
import sofaThree from '@assets/image/furniture/sofa-3.webp';

import { ICatalog } from 'types/types';

export const catalogueData: ICatalog[] = [
  {
    id: 1,
    name: 'Sofa Green',
    price: 12000000,
    description: 'Comfortable sofa with a modern design',
    image: sofaOne,
  },
  {
    id: 2,
    name: 'Sofa Brown',
    price: 10000000,
    description: 'Comfortable sofa with a classic design',
    image: sofaTwo,
  },
  {
    id: 3,
    name: 'Sofa Grey',
    price: 15000000,
    description: 'Comfortable sofa with a futuristic design',
    image: sofaThree,
  },
  {
    id: 4,
    name: 'Minimalism Chair',
    price: 5000000,
    description: 'Comfortable chair with a minimalist design',
    image: chairOne,
  },
];
