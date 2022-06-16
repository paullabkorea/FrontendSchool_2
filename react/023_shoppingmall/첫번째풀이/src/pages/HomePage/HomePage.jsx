import { useState, useEffect, useContext } from 'react'
import { Data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
  const [loadData, setLoadData] = useState(null)

  useEffect(()=>{
    console.log('로딩중!')
  },[])
  
  useEffect(()=>{
    if (loadData === null) {
      return
    } else {
      console.log('로딩완료!')
      console.log(loadData)
    }
  }, [loadData])

  useContext(Data).then(d => {
    // console.log(d)
    setLoadData(d)
  })

  return (
    <main className="product">
        <ul className="product-list">
        {loadData !== null ? loadData.map(item => 
            <ProductCard
                key={item.id} 
                productName={item.productName}
                price={item.price}
                thumbnailImg={item.thumbnailImg}
            />
        ) : <h2>로딩 중입니다.</h2>}
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
  )
}
