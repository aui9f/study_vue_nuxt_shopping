import {createCartItem, fetchCartItem} from '@/api/index'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';


export const state = () => ({
    user: {},
    cartItems: []
});

export const mutations = {
    insertUser(state, payload){
        state.user={...payload}
    },

    INSERT_CARTS(state, cartItems){
        state.cartItems = [...cartItems];
    },

    INSERT_CART(state, cartItem){
        state.cartItems.push(cartItem);
    }
};

export const actions = {
    async [FETCH_CART_ITEMS]({commit}, payload){
        const {data} = await fetchCartItem();
        commit('INSERT_CARTS', data.map(x=>({
            ...x,
                imageUrl: `${x.imageUrl}?random=${Math.random()}`
        })));
    },

    async setCardItem({commit}, payload){
        const res = await createCartItem(payload);
        commit('INSERT_CART', payload);
    },

    //정의되어있는 함수 
    async nuxtServerInit(storeContext, nuxtContext){
        
        await storeContext.dispatch(FETCH_CART_ITEMS);

        // const {data} = await fetchCartItem();
        // storeContext.commit('INSERT_CARTS', data.map(x=>({
        //     ...x,
        //     imageUrl: `${x.imageUrl}?random=${Math.random()}`
        // })));

    },

    
};

export const getters = {

};