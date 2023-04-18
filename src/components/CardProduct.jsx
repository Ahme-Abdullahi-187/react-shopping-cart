import useShop from "../ShopContext"

const CardProduct = ({ id, name, urlImage, price }) => {
    const { deletefromCard } = useShop();

    const product = {
        id,
        name,
        urlImage,
        price
    }

    return (
        <>
            <div className="flex items-center justify-between my-3">
                <img
                    className="h-14 w-14 rounded-full mx-5 border-2 border-sky-900"
                    src={urlImage}
                    alt=""
                />
                <h2 className="flex-1 font-medium text-start">{name}</h2>
                <p className="flex-1 font-medium">${price}</p>
                <svg onClick={() => deletefromCard(product)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-900 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </>
    )
}

export default CardProduct