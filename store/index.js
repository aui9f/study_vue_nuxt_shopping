export const state = () => ({
    user: {},
    cartItems: []
});

export const mutations = {
    insertUser(state, payload){
        state.user={...payload}
    },
    insertCart(state, cartItem){
        console.log("cartItem", cartItem)
        state.cartItems.push(cartItem);
    }
};

export const actions = {

};

export const getters = {

};