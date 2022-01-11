<template>
  <div class="div-main" :style="{height: Height+'px'}">
    <img class="login-title" src="~imgs/login/login_bt.png" alt>
    <div class="login-box">
      <p class="form_title">学员登录</p>
      <el-form
        ref="ruleForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        class="login-el-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            type="text"
            placeholder="请输入用户名"
            @keyup.enter.native="submitForm('ruleForm')"
          />
          <img class="input_icon" src="~imgs/login/login_icon_01.png" alt>
        </el-form-item>
        <el-form-item prop="password" style="margin-top: 40px;">
          <el-input
            id="input_pwd"
            v-model="ruleForm.password"
            type="password"
            placeholder="请输入密码"
            @keyup.enter.native="submitForm('ruleForm')"
            @paste.native.capture.prevent="cophande()"
          />
          <img class="input_icon" src="~imgs/login/login_icon_02.png" alt>
        </el-form-item>
        <el-form-item>
          <div class="loginbtn" @click="submitForm('ruleForm')">登录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      type: 'login',
      ruleForm: {
        name: '',
        pass: ''
      },
      Height: 0,
      identity: '学员',
      loading: false,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  created() {},
  mounted() {
    this.Height = document.documentElement.clientHeight // 监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight
    }
  },
  methods: {
    submitForm(formName) {
      // const { username, password } = this.ruleForm
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.ruleForm)
            .then(() => {
              this.$router.push({ path: '/home' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
  }
}
</script>

<style  scoped>
.div-main {
  width: 100%;
  height: 100%;
  background: url(~imgs/login/login_bg.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.login-title {
  display: block;
  margin: 100px auto;
}

.login-box {
  width: 380px;
  margin: 100px auto;
  background: #e2f6ed;
  padding: 40px 90px;
  box-shadow: 0px 10px 35px 0px rgba(0, 45, 20, 0.3);
  border-radius: 6px;
}

.form_title {
  text-align: center;
  margin: 0 auto 34px;
  font-size: 38px;
  letter-spacing: 2px;
  background-image: linear-gradient(#3edd86, #02ad4f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-family: "方正粗体";
}

.login-box .name {
  font-size: 1.4rem;
  color: #2b67cd;
  text-align: center;
  letter-spacing: 16px;
  font-weight: bold;
}
.login-el-form >>> .el-input__prefix {
  color: #e4940e;
}
.login-box >>> .el-input__inner {
  background-color: #c8f6dc !important;
  color: #2e1e00 !important;
  border: 1px solid #54c286;
  border-radius: 0;
  text-indent: 20px;
}
.login-box >>> .el-input__inner::placeholder {
  color: #a2aba6;
}

.input_icon {
  position: absolute;
  left: 10px;
  top: 9px;
}

.loginbtn {
  width: 180px;
  height: 65px;
  margin: 40px auto 0;
  line-height: 65px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 6px;
  text-align: center;
  border: none;
  color: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 83, 36, 0.5);
  cursor: pointer;
  background: url(~imgs/login/lgoin_button_01.png) no-repeat;
  background-size: 100% 100%;
}
</style>
