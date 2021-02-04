<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">王轼宸</a><span>|</span>
      <a href="">电信17-1</a><span>|</span>
      <a href="">17152010103</a>
    </div>
    <div class="copyright">Copyright ©2021 <span class="domain">WangShiChen</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name:"nav-footer"
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  .footer{
    height:234px;
    border-top: 4px solid $colorA;
    background-color: #333;
    color: #999;
    font-size:$fontI;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
      p{

      }
    }
    .footer-link{
      a{
        color:#999;
        display: inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:$colorA;
      }
    }
  }
</style>