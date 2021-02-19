<template>
  <!--transition模块实现动画效果-->
  <transition name="slide">
    <div class="modal" v-show="showModal">
    <!--遮罩层-->
      <div class="mask"></div>
      <!--弹框-->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <!--插槽部分-->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!--从子组件触发父组件的submit事件-->
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{confirmText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('cancel')">{{confirmText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
export default {
  name:'modal',
  props:{
    //弹框类型：小(small)、中(middle)、大(large)、表单(form)
    modalType:{
      type:String,
      default:'form'
    },
    //弹框的标题
    title:String,
    //按钮类型: 1、确定按钮 2、取消按钮 3、确定 取消
    btnType:String,
    confirmText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss'
</style>