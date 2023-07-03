import { Product } from './types/Products';
export  const sampleProducts: Product[] = [
    {
        name: 'Nike T-shirt',
        slug: 'nike-slim-shirt',
        category:'Shirts',
        image: '../images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numRrviews: 15,
        description: 'Hight quality t-shirt'

    },
    {
        name: 'Adidas Fit shirt',
        slug: 'adidas-fit-shirt',
        category:'Shirts',
        image: '../images/p2.jpg',
        price: 100,
        countInStock: 40,
        brand: 'Adidas',
        rating: 4.7,
        numRrviews: 34,
        description: 'Hight quality Product'

    },
    {
        name: 'Lacoste Free Pant',
        slug: 'lacoste-free-pant',
        category:'Pants',
        image: '../images/p3.jpg',
        price: 96,
        countInStock: 20,
        brand: 'Lacoste',
        rating: 4.4,
        numRrviews: 29,
        description: 'Hight quality Lacoste pant'

    },
    {
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category:'Pants',
        image: '../images/p4.jpg',
        price: 86,
        countInStock: 20,
        brand: 'Nike',
        rating: 4.5,
        numRrviews: 15,
        description: 'Hight quality pant'

    }
]