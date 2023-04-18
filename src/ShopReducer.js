export const intialState = {
    products : [],
    total : 0,
} 

const shopReducer = (state , action) => {
    const { type , payload} = action;

    switch(type) {
        case "ADD_TO_CARD" : {
            return {
                ...state,
                products : payload.products,
            }
        }
        case "REMOVE_FROM_CARD" : {
            return {
                ...state,
                products : payload.products,
            }
        }
        case "CALCULATE_TOTAL_PRICE" : { 
            return {
                ...state,
                total : payload,
            }
        }        
        default : {
            throw new Error("Unknown action type...");
        }
    }
}

export default shopReducer;