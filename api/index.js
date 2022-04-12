import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3000`
})

function fetchProductById(id){
    console.log('ID: ',id)
    return instance.get(`/products/${id}`)
}

function fetchByKeyword(keyword){
    return instance.get('/products', {
        params: {
            name_like: keyword
        }
    })
}

function fetchCartItem(){
    return instance.get('/carts')
}

function createCartItem(cartItem){
    //(url, payload)
    return instance.post('/carts', cartItem)
}

export {fetchProductById, fetchByKeyword, createCartItem, fetchCartItem}