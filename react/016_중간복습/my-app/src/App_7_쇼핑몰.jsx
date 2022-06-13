import { data } from './asset/data/data'

function ProductImage({thumbnailImg, productName}){
    const imgUrl = 'http://test.api.weniv.co.kr/' + thumbnailImg
    return <img src={imgUrl} alt={productName}></img>
}

function ProductName({productName}){
    return <p>{productName}</p>
}

function ProductPrice({price}){
    return <p>{price}</p>
}

function ProductCard({productName, price, thumbnailImg}){
    return (
        <>
            <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            <ProductName productName={productName}/>
            <ProductPrice price={price}/>
        </>
    )
}

function App() {
    // console.log(data)
    return (
        <div>
            {data.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
            )}
        </div>
    );
}

export default App;