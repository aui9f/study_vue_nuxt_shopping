<template>
    
    <div class="app">
        <main>

            <!-- <SearchInput :searchKeyword="searchKeyword" 
            @input="updateSearchKeyword"
            /> -->
             <SearchInput v-model="searchKeyword" @search="searchProducts"/>
            <ProductList :productList="products"/>
        
            <!-- <ul>
                <li 
                    v-for="product in products" :key="product.id"
                    @click="moveToDetails(product.id)"
                >
                    <div>
                        <img :src="product.imageUrl" :alt="product.nane">
                        <p>{{product.name}}</p><small>(${{product.price}})</small>
                    </div>
                </li>
            </ul> -->
        </main>
      
    </div>
    
</template>

<script>
import axios from 'axios';
import ProductList from '~/components/ProductList.vue';
import SearchInput from '~/components/SearchInput.vue';
import {fetchByKeyword} from '@/api/index'
    export default {
    
        name: 'index',

        components: { ProductList, SearchInput },

        // pages 안에 컴포넌트에서만 asyncData 를 사용할 수 있다.
        async asyncData(){
            const res = await axios.get('http://localhost:3000/products');
            // this.products = res.data; -- this 사용 못함, 페이지가 그려지기 전에 수행하기 때문 (컴포넌트가 아직 생성되지 않았기때문에)
            const products = res.data.map(item=>({
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`
            }));
            return {products}; //{products:products}
        },
        data() {
            return {
                searchKeyword: ''
            }
        },
        methods: {
            moveToDetails(id){
                console.log(id);
                // this.$router.push(); -- 클라이언트 싱글페이지
                this.$router.push(`detail/${id}`);
            },
            // updateSearchKeyword(keyword){
            //     console.log(keyword);
            //     this.searchKeyword = keyword;
            // },
            async searchProducts(){
                const keyword = this.searchKeyword;
                const res = await fetchByKeyword(keyword);
                console.log(res.data)
                this.products = res.data;

            }
        }
        
        // data() {
        //     return {
        //         products: []
        //     }
        // },
        // created(){
        //     this.search();
        // },
        // methods: {
        //     async search(){
        //         const res = await axios.get('http://localhost:3000/products');
        //         this.products = res.data;
        //     }
        // }
     
        
    }
</script>

<style lang="css" scoped>
.app *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}






.app main >ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.app main >ul li{
    padding: 8px;
    width: 25%;
}

.app main >ul li >div img{
    width: 100%;
    border-radius: 8px;
}
</style>