<template>
    <div class="goods-list-item">
      <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" alt="" @load="imageLoad()">
        <div class="item-font">
          <p class="title">{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
      </a>


    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('imageLoad')
      }
    }

  }
</script>

<style scoped>
  .goods-list-item{
    margin-bottom: 40px;
    width: 48%;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .item-font{
    position: absolute;
    bottom: -30px;
    right: 0;
    left: 0;

    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .item-font .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .item-font .price{
    margin-right: 25px;
    color: var(--color-high-text);
  }
  .item-font .cfav{
    position: relative;
  }
  .item-font .cfav::before{
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    left: -16px;
    height: 14px;
    width: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
