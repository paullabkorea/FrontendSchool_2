// import { data } from '../../asset/data/data'
import { useContext, useState, useEffect, createContext} from "react";
import { ProductInfo } from '../../context/context'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

const ProductItems = ()=>{
  const products = useContext(ProductInfo);
  return(
    <>
    {products.products.map(item => 
      <ProductCard
      key={item.id} 
      productName={item.productName}
      price={item.price}
      thumbnailImg={item.thumbnailImg}
      />
    )}
    </>
  )
}

export default function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
      async function fetchAPI(){
        const res = await fetch('https://test.api.weniv.co.kr/mall')
        const result = await res.json()
        console.log(result)
        setProducts(result)
      }
      fetchAPI()
  }, [])
  return (
    <ProductInfo.Provider value={{products:products}}>

    <main className="product">
        <ul className="product-list">
        <ProductItems/>
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
    </ProductInfo.Provider>
  )
}

