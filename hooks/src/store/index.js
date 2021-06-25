export const initialState = {
    cart: [],
    product: [],
    user: null,
    number: 0
}

export function reducer(currentState, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...currentState, number: currentState.number + 2 }
        case "login":
            return { ...currentState, user: { name: action.payload} }
        default: return currentState;
    }
}