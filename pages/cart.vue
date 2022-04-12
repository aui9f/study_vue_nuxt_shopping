<template>
    <div class="cart">
       <CartList/>
        <div class="cart-total">
            <h3>선택한상품금액 : 0</h3>
        </div>
    </div>
</template>

<script>
import CartList from "~/components/CartList.vue"

// import {FETCH_CART_ITEMS} from '@/store'
    export default {
        components: { CartList },
        // async asyncData({store}){
        //     // await store.dispatch('FETCH_CART_ITEMS');
        //     // await store.dispatch(FETCH_CART_ITEMS);
        //     const cartItems = store.state.cartItems
        //     return {cartItems}
        // }
    }
</script>

<style scoped>
.cart >ul, .cart >div{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
ul li{
    margin-bottom: 8px;
    border-bottom: 1px solid lightgray;
}
ul li:first-child{
    border-top: 1px solid lightgray;
}
ul li >div{
    
    padding: 8px;
    display: flex;
    
}
ul li >div >img{
    height: 80px;
}

ul li >div >div{
    display: flex;
    
    
}
ul li >div .text{
    height: 100%;
    flex-direction: column;
    padding: 16px;
    flex: 3;
}
p{
    margin: 0;
}
ul li >div .text p{
    
    font-weight: bold;
    margin-bottom: 6px;
}
ul li >div .text small{
    color: gray;
}

ul li >div .count, ul li >div .total, ul li >div .buttons{
    flex: 1;
    justify-content: center;
    align-items: center;
}

ul li >div .count{
    flex-direction: column;
}
ul li >div .count button{
    padding: 8px 16px;
    background-color: rgba(222,222,222,.6);
    border: 1px solid rgba(222,222,222,.6);
    border-radius: 8px;
    margin-top: 6px;
}

ul li >div .buttons button{
    padding: 8px 16px;
    background-color: bisque;
    border: 1px solid bisque;
    border-radius: 8px;
}

.cart-total{
    text-align: right;
}
</style>