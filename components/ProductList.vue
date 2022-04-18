<template>
     <ul>
                <li 
                    v-for="product in productList" :key="product.id"
                    @click="moveToDetails(product.id)"
                >
                    <div>
                        <img :src="product.imageUrl" :alt="product.nane">
                        <p>{{product.name}}</p><small>(${{product.price}})</small>
                    </div>
                </li>
            </ul>
</template>

<script>
    import axios from 'axios';
    export default {
        props: {
            productList: {
                type: Array,
                defalut: ()=>{
                    return []
                }
            }
        },
        methods: {
            moveToDetails(id){
                console.log(id);
                // this.$router.push(); -- 클라이언트 싱글페이지
                this.$router.push(`detail/${id}`);
            }
        }
        // async fetch(){
        //             const res = await axios.get('http://localhost:3000/products');
        //     // this.products = res.data; -- this 사용 못함, 페이지가 그려지기 전에 수행하기 때문 (컴포넌트가 아직 생성되지 않았기때문에)
        //     const products = res.data.map(item=>({
        //         ...item,
        //         imageUrl: `${item.imageUrl}?random=${Math.random()}`
        //     }));
        //     return {products}; //{products:products}
        // },
    }
</script>

<style scoped>
ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
ul li{
    padding: 8px;
    width: 25%;
}
ul li >div img{
    width: 100%;
    border-radius: 8px;
}

</style>
