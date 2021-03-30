<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}" @click="barClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex : 0
      }
    },
    methods:{
      barClick(index){
        this.currentIndex = index;
        this.$emit('barClick',this.currentIndex);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 4px;
  }
</style>
