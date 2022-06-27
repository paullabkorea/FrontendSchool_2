export const Card = ({ goods }) => {
    const url = 'http://test.api.weniv.co.kr/' + goods.thumbnailImg
    return (
        <li class="product-item">
            <div class="product-img">
                <img src={url} />
            </div>
            <strong class="product-name sl-ellipsis">{goods.productName}</strong>
            <button class="like-btn"></button>
            <div class="product-price">
                <strong class="price m-price">{goods.price}<span>원</span></strong>
            </div>
        </li>
    )
}