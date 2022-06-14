import { data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
  return (
    <main class="product">
        <ul class="product-list">
        {data.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )}
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
  )
}
