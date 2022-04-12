<template>
     <div class="search">
        <input type="text" :value="value" placeholder="Search Data.."
            @input="$emit('input', $event.target.value)"

        />
        <button type="button" @click="$emit('search')">Search</button>
    </div>
</template>

<script>
    export default {
        props: {
            // v-model => value
            // 일반적으로 props, emit 으로 연결해줄 땐 searchKeyword
            // https://joshua1988.github.io/web-development/vuejs/v-model-usage/
            value: {
                type: String,
                default: ''
            },
        },


    }
</script>

<style scoped>
.search{
    display: flex;
    align-items: center;
    background-color: rgba(222,222,222, .4);
    border-radius: 6px;
    margin: 8px !important;
    height: 56px;
    padding: 0 8px !important;
}
.search input{
    flex: 1;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 6px;
    background-color: rgba(255,255,255,.6);
    color: gray;
}
.search input::placeholder{
    color: lightgray;
}
button{
    padding: 8px;
    margin-left: 8px;
    border: 1px solid lightgray;
    border-radius: 6px;
    background-color: rgba(255,255,255,.6);
    color: gray;
}
</style>