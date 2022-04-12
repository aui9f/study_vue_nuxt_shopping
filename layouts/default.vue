<template>
  <div>
      <!-- <header>
          <h1>{{$route.name}}페이지</h1>
          <NuxtLink to="/">홈페이지</NuxtLink>
          <span> | </span>
          <NuxtLink to="/main">메인</NuxtLink>
          <span> | </span>
          <NuxtLink to="/product">상품</NuxtLink>
      </header> -->
    <Header/>
    <div class="pages">
      <Nuxt />
    </div>
    
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: { Header },
  created(){
      console.log(this.$route)
  }
}
</script>

<style scoped>
.pages{
  margin-top: 48px;
}
</style>