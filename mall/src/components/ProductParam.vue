<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'nav-bar',
  props:{
    title:String
  },
  data(){
    return{
      //是否需要吸附
      isFixed: false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.initHeight)
  },
  methods:{
    //产品参数组件吸附
    initHeight(){
      let scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed=scrollTop > 154?true:false;
    }
  },
  //退出页面时，销毁事件
  destroyed(){
    window.removeEventListener('scroll',this.initHeight,false)
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
  .nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    &.is_fixed{
      position: fixed;
      top: 0;
      width:100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        font-size: $fontH;
        color:$colorB;
        font-weight: bold;
      }
      .pro-param{
        font-size: $fontJ;
        span{
          margin:0 10px;
        }
        a{
          color: $colorC;
        }
      }
    }
  }
</style>