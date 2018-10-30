<template>
    <div class="main">
        a
        <button v-on:click="log()">点击我</button>
        <p v-show="display">我是一段文字</p>
    </div>
</template>
<script>
export default {
    name:'center',
    data:function () {
        return {
            display: false,
        }
    },
    methods:{
        log(){
            this.display = !this.display
        }
    }
}
</script>
<style scoped>
.main{
    width: 100%;
    height: 100%;
    background-color: pink;
}
</style>