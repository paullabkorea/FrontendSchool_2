import {useState,useEffect} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async ()=>{
      try {
        const res = await fetch('https://test.api.weniv.co.kr/mall')
        const result = await res.json()
        setItems(result);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    getData()
  }, [])
  if (error) {
    return <div>에러입니다 ㅠ.ㅠ {error.message}</div>
  }else if(!isLoaded){
    return <div>로딩중....</div>
  }else{
    return (
      <main class="product">
          <ul class="product-list">
          {items.map(item => 
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
}