<template>
     <ul>
         
            <li v-for="cart in cartItems" :key="cart.index">
                <div>
                    
                        <img :src="cart.imageUrl" alt=""/>
                        <div class="text">
                            <p>{{cart.name}}</p>
                            <small>${{cart.price}}</small>
                        </div>
                        <div class="count">
                            <p>수량: 1</p>
                            <button type="button">주문수정</button>
                        </div>
                        <div class="total">
                            합계
                        </div>
                        <div class="buttons">
                            <button type="button">삭제</button>
                        </div>
                </div>
            </li>
            
            
        </ul>
</template>

<script>
    export default {
        // async asyncData() --- pages 에 속한 vue 파일만 사용 가능
        async fetch(){
            const cartItems = this.$store.state.cartItems;
            this.cartItems = [...cartItems];
        },
        data(){
            return {
                cartItems: []
            }
        }

    }
</script>

<style scoped>
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