<template>
    <div class="feature">
      <a href="">
        <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoad">
      </a>
    </div>
</template>

<script>
  export default {
    name: "HomeFeature",
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad) {
          this.$bus.$emit('imageLoad')
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
</style>
