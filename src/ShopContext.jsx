import { createContext, useContext, useReducer } from "react";
import shopReducer, { intialState } from "./ShopReducer";

const ShopContext = createContext(intialState);

export const ShopProvider = ({ children }) => {
    const [state , dispatch] = useReducer(shopReducer , intialState);

    const addToCard = (product) => {
        const updatedProducts = state.products.concat(product);
        calculateTotalPrice(updatedProducts);
        dispatch({
            type : "ADD_TO_CARD",
            payload : {
                products : updatedProducts,
            }
        });
    } 

    const deletefromCard = (_product) => {
        const updatedProducts = state.products.filter(product => product.id != _product.id);
        calculateTotalPrice(updatedProducts);
        dispatch({
            type : "REMOVE_FROM_CARD",
            payload : {
                products : updatedProducts
            }
        });
    }

    const calculateTotalPrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price;
        });
        dispatch({
            type : "CALCULATE_TOTAL_PRICE",
            payload : total,
        });
    }

    const values = {
        products : state.products,
        total : state.total,
        addToCard,
        deletefromCard,
        calculateTotalPrice,
    }

    return(
        <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    )

}

const useShop = () => {
    const context = useContext(ShopContext);
    if(context === undefined) {
        throw new Error("context must be used inside shop context");
    }
    return context
}

export default useShop