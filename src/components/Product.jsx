import { useEffect, useState } from 'react';
import useShop from '../ShopContext'

const Product = ({ id, name, urlImage, price }) => {
    const { products, addToCard, deletefromCard } = useShop();
    const [isInCard , setIsInCard] = useState(false);

    const product = {
        id,
        name,
        urlImage,
        price,
    }

    const handleChange = () => {
        if(!isInCard) {
            addToCard(product);
        } else {
            deletefromCard(product);
        }
    }

    useEffect(() => {
        const inCard = products.filter( _product => _product.id == product.id);
        if(inCard.length > 0) {
            setIsInCard(true);
        } else {
            setIsInCard(false);
        }
    } , [products]);

    return (
        <div class="flex items-center justify-center ">
            <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl relative">
                <img src={urlImage} alt="plant" class="h-auto w-full" />
                <div class="p-5">
                    <p class="text-medium mb-3 text-gray-800">{name}</p>
                    <p class="text-medium font-medium mb-3 text-gray-800">${price}</p>
                    <button onClick={handleChange} class="w-full rounded-md bg-sky-900 py-2 text-indigo-100 hover:bg-sky-800 hover:shadow-md duration-75">{!isInCard ? "Add To Card" : "Remove From Card"}</button>
                </div>
            </div>
        </div>
    )
}

export default Product