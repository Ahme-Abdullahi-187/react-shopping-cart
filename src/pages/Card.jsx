import CardProducts from "../components/CardProducts"
import Payment from "../components/Payment"

const Card = () => {
    return (
        <div className="shadow-xl rounded p-5 grid grid-cols-3 gap-10">
            <div className="col-span-2">
                <CardProducts />
            </div>
            <div>
                <Payment />
            </div>
        </div>
    )
}

export default Card