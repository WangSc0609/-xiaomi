<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <!-- <div class="reg">立即注册<span>|</span>忘记密码？</div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
      <a href="">王轼宸</a><span>|</span>
      <a href="">电信17-1</a><span>|</span>
      <a href="">17152010103</a>
    </div>
    <div class="copyright">Copyright ©2021 <span class="domain">WangShiChen</span> All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default{
  name:'login',
  data(){
    return{
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    //登录
    login(){
      let { username,password }=this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'Session'});
        //保存用户名
        this.$store.dispatch('saveUserName',res.username);
        this.$router.push({
          /**
           * params传参:name(路由名称),get请求，在地址栏看不见，参数保存在内存中
           * query传参:path(路由路径),post请求,可以在地址栏看见
           */
          name:'index',
          params:{
            from:'login'
          }
        });
      })
    },
    //注册
    register(){
      this.axios.post('/user/register',{
        username:'wang99',
        password:'wang99',
        email:'wang@qq.com'
      }).then(()=>{
        this.$message.success('注册成功！')
      })
    }
  }
}
</script>

<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      position: relative;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          height: 50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>