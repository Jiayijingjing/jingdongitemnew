<template>
  <div class="loginmain">
    <div class="login">
        <div class="inner">
            <div class="inner_box">
                <div class="login_1">
                    <div class="saomiao">扫描登录</div>
                    <div class="zhanghu">账户登录</div>
                </div>
                <div class="login_2">
                    <div><input type="text" class="name" value="邮箱/用户名/手机号"/></div>
                    <div><input type="text" class="password" value="请输入手机号"/></div>
                    <div class="gologin">登录</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {

    };
  },
  computed:{

  },
  watch:{

  },
  methods: {

  },
};
</script>

<style scoped>
.loginmain{
    border-top:1px solid red;
    width: 100%;
    background-color: rgb(223, 114, 141);
}
.login{
    width: 1190px;
    height: 700px;
    margin:0 auto;
    display: flex;
    flex-direction: row-reverse;
    align-items:center;
}
.inner{
    width: 460px;
    height: 460px;
    background-color: white;
    border: 1px solid rgb(206, 58, 58);
    padding: 20px;
}
.inner_box{
    width: 100%;
    height: 100%;
    border: 1px solid rgb(241, 238, 238);
}
.login_1{
    display: flex;
    margin-bottom: 20px;
}
.login_1 div{
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    font-weight: 800;
    text-align: center;
}
.login_2{
    display: flex;
    flex-direction: column;
    align-items:center;
}
.login_2 input{
  width:360px;
  height: 30px;
  margin-top: 30px;
  border: 1px solid #ccc;
  text-indent:20px;
  color:rgb(179, 176, 176);
}
.gologin{
    width:360px;
    height: 40px;
    margin-top:40px;
    background-color: rgb(236, 70, 65);
    color:white;
    text-align:center;
    line-height: 40px;
    font-size: 20px;
    letter-spacing:16px;
}
.saomiao{
    border-bottom: 1px solid rgb(241, 238, 238);
    border-right:1px solid rgb(241, 238, 238);
}
/* .zhanghu{
    border-bottom: 1px solid rgb(241, 238, 238);
    border-left:1px solid rgb(241, 238, 238);
} */
</style>

