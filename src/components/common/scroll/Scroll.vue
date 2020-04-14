<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      ProbeType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type: Boolean,
        default() {
          return false
        }
      }
    }
    ,
    methods:{
      scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.ProbeType,
        pullUpLoad:this.pullUpLoad,
        click:true

      })

      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })

      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>

</style>
