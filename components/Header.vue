<template>
     <header>
          <NuxtLink to="/">홈페이지</NuxtLink>
          <span> | </span>
          <NuxtLink to="/cart">장바구니</NuxtLink>
          <span> | </span>
          <NuxtLink to="/product">상품</NuxtLink>
      </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    box-sizing: border-box;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF1``;
}

header a{
    padding: 8px 16px;
    text-decoration: none;
}
a, span{
    color: lightgray;
}
 a:link { text-decoration: none;}
 a:visited {  text-decoration: none;}
 a:hover { text-decoration: underline;}

.nuxt-link-exact-active{
    color: gray;
    font-weight: bold;
}
</style>