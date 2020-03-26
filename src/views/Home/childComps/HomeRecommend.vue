<template>
    <div class="recommend">
      <a v-for="item in recommend" :href="item.link" class="recommend-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
</template>

<script>
  export default {
      name: "HomeRecommend",
      props:{
        recommend:{
          type: Array,
          default() {
            return [];
          }
        }
      }

    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    font-size: 14px;
  }
  .recommend-item img{
    height: 70px;
    width: 70px;
  }
</style>
