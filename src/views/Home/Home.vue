<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="['流行','新款','精选']" class="tab-control-home"></tab-control>
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import TabControl from "../../components/content/tabControl/TabControl";

  import homeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  import {getHomeMultidata, getHomeGoods} from "../../network/home"


    export default {
      name: "Home",
      components:{
        NavBar,
        homeSwiper,
        HomeRecommend,
        HomeFeature,
        TabControl
      },
      data(){
        return {
          banners: [],
          recommend: [],
          goods:{
            'pop': {
              page:0,
              list:[]
            },
            'new': {
              page:0,
              list:[]
            },
            'sell': {
              page:0,
              list:[]
            }
          }
        }
      },
      created() {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      methods:{
        getHomeMultidata(){
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend.list;
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1;
          getHomeGoods(type,page).then(res =>{
            console.log(res);
            this.goods[type].page = page;
            this.goods[type].list.push(...res.data.list);
          })
        }
      }
    }
</script>

<style scoped>
  #home{
    margin-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control-home{
    position: sticky;
    top: 44px;
  }
</style>
