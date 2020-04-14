<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @barClick="barClick" ref="tabControl1" class="tab-control" v-show="isTabTop"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="srcollShow" :pull-up-load="true" @pullingUp="getMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="['流行','新款','精选']" @barClick="barClick" ref="tabControl2"></tab-control>
      <goods-list :goods="clickGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick()" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goodsList/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import homeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  import {getHomeMultidata, getHomeGoods} from "../../network/home"
  import {debounce} from "../../common/utlis";


  export default {
      name: "Home",
      components:{
        NavBar,
        homeSwiper,
        HomeRecommend,
        HomeFeature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
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
          },
          currentGoods:'pop',
          isShowBackTop:false,
          tabControlTop:0,
          isTabTop:false

        }
      },
      created() {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      mounted() {
        const refresh = debounce(()=>{
          console.log(this.$refs.tabControl2.$el)
          this.tabControlTop = this.$refs.tabControl2.$el.offsetTop
          this.$refs.scroll.refresh
        })

        this.$bus.$on('imageLoad',() =>{
          refresh()
        })

      },
      computed:{
        clickGoods(){
          return this.goods[this.currentGoods].list;
        }
      }
      ,
      methods:{
        /**
         * 实现方法
         */
        barClick(index){
          switch (index) {
            case 0:
              this.currentGoods = 'pop';
              break
            case 1:
              this.currentGoods = 'new';
              break
            case 2:
              this.currentGoods = 'sell';
              break
          }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index

        },
        backClick(){
          this.$refs.scroll.scrollTo(0,0)
        },
        srcollShow(position){
          this.isShowBackTop = (-position.y)>1000
          this.isTabTop = (-position.y) >this.tabControlTop
        },
        getMore(){
          this.getHomeGoods(this.currentGoods)

        },


        /**
         * 网络数据方法
         */
        getHomeMultidata(){
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend.list;
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1;
          getHomeGoods(type,page).then(res =>{
            this.goods[type].page = page;
            this.goods[type].list.push(...res.data.list);
            this.$refs.scroll.finishPullUp()
          })
        }
      }
    }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: relative;
    z-index: 9;

  }

  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom:49px ;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }

</style>
