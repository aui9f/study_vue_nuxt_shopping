<template>
    <div class="detail-page">

        <img :src="product.imageUrl"/>
        
        <div class="review">
            <div class="star">****</div>
            <p>리뷰 5건</p>
        </div>
        
        <h2>{{product.name}}</h2>
        <div class="price">
            <p>{{product.price}}</p>
            <button type="button" @click="addToCart">Add to Cart</button>
        </div>
        
        <!-- id, name, price, imageUrl -->
        <!--  -->
    </div>
</template>

<script>
    import {createCartItem, fetchProductById} from '@/api/index'
    export default {
        async asyncData({params}){

            const id = params.id;
            const res = await fetchProductById(id);
            const product = res.data;
            
            return {product}
        },
        methods: {
            async addToCart(){
              this.$store.dispatch('setCardItem', this.product)  
                // const res = await createCartItem(this.product);
                // this.$store.commit('INSERT_CART', this.product)
                // this.$router.push('/cart');
            }
        }
    }
</script>

<style scoped>
.detail-page{
    
    width: 480px;
    margin: 40px auto 0;
}
img{
    width: 100%;
}
.review{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
}
.review >div{
    margin-right: 4px;
}
h2{
    text-align: center;
    margin: 8px 0;

}

.price{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.price >p{
    margin-right: 8px;
    background-color: #1e1e1e;
    color: #FFFFFF;

}
.price button{
    background-color: #ffeb00;
    color: #000000;
}
.price >p, .price button{
    border: 0;
    width: 120px;
    height: 48px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
} 
</style>