import useShop from "../ShopContext"
import CardProduct from "./CardProduct";

const CardProducts = () => {
    const { products , total } = useShop();

    return (
        <div className="flex flex-col text-center space-y-3">
            <h1 className="text-xl font-semibold">Cart Product</h1>
            {
                products.map(product => <CardProduct {...product} />)
            }
            <h1 className="text-xl font-medium mt-5">Total price : ${total}</h1>    
        </div>
    )
}

export default CardProducts