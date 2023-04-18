import products from "../data"
import Product from "./Product"

const Products = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
                products.map(product => <Product {...product} />)
            }
        </div>
    )
}

export default Products