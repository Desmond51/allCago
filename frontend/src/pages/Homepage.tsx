import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'
import { Product } from '../types/Products'

type State ={
  products: Product[]
  loading: boolean
  error: string
}

type Action = 
{ type: 'FETCH_REQUEST'}
{ 
  type: 'FETCH_SUCCESS'
  payload: Procduct[]
}

{ type: 'FETCH_FAIL'  
payload: string}

export default function Homepage() {
  
  return (
    <div>
       
          <Row>
          {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={'/product/' + product.slug}>
                <img src={product.image} alt= {product.name} className='product-image' />
              
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
              </Col>

            ))}
            
          </Row>
    </div>
  )
}
