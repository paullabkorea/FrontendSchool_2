import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sale , soldout } from '../modules/stockCounter'

function StockCounter(){

    const { message } = useSelector(state => ({
        message: state.stockReducer.message,
    }))
    console.log(message)

    const { stock } = useSelector(state => ({
        stock: state.goodsReducer.stock
    }))
    console.log(stock)

    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
    const dispatch = useDispatch()

    const onSale = () => dispatch(sale())
    const onSoldout = () => dispatch(soldout())

    useEffect(() => {
        if (stock <= 0) {
            onSoldout()
        }
    }, [stock]);

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default StockCounter