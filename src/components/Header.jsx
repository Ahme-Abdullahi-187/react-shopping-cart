import { Link } from "react-router-dom"
import useShop from "../ShopContext"

const Header = () => {
    const { products } = useShop();

    return (
        <div className="flex justify-around items-center my-5">
            <Link to='/' className="text-2xl font-bold text-sky-900">Salsabil</Link>
            <div className="space-x-8 font-meduim">
                <Link to='/' m>Home</Link>
                <Link to='About'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='card'>Card</Link>
            </div>
            <Link to='card'>
                <div class="flex justify-center items-center">
                    <div class="relative py-2">
                        {
                            products.length > 0 && <div class="t-0 absolute left-3">
                                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-sky-900 p-3 text-xs text-white">{products.length}</p>
                            </div>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Header