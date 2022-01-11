<template>
  <div class="block" :style="{ minHeight: Height + 'px' }">

    <div class="dropdown-div">
      <el-dropdown :hide-on-click="true">
        <div class="user-dropdown">
          <img class="account" src="~imgs/main/account.png" alt>
          <div ref="div" class="textAdmin">{{ deptName }}&nbsp;{{ nickName }}</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="userType!=0" @click.native="linkToPath('/memberList')">管理中心</el-dropdown-item>
          <el-dropdown-item v-if="userType==2" @click.native="linkToPath('/userCenter')">用户管理</el-dropdown-item>
          <el-dropdown-item @click.native="linkToPath('/studentCenter')">训练成绩</el-dropdown-item>
          <el-dropdown-item v-if="userType!=0" @click.native="modifyVisiable = true">修改信息</el-dropdown-item>
          <el-dropdown-item v-if="userType!=0" @click.native="passwordModifyVisiable = true">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="title" />
    <div class="card-box animate__animated animate__bounceInRight">

      <div id="step1" class="card" @click="linkToPath('knowIndex')">
        <img class="img" src="~imgs/home/llxx.png" alt>
        <div class="name">理论学习</div>
      </div>
      <div id="step2" class="card" @click="linkTo('planList')">
        <img class="img" src="~imgs/home/xnxl.png" alt>
        <div class="name">虚拟训练</div>
      </div>
      <div id="step3" class="card" @click="linkTo('ExamList')">
        <img class="img" src="~imgs/home/khpg.png" alt>
        <div class="name">考核评估</div>
      </div>
      <div id="step4" class="card" @click="linkTo('forum')">
        <img class="img" src="~imgs/home/jldy.png" alt>
        <div class="name">交流答疑</div>
      </div>
    </div>
    <p class="foot_tip">
      <span>版权所有：火箭军指挥学院</span>
      <span>技术支持：武汉苍穹融新科技有限公司</span>
    </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      passwordModifyVisiable: false,
      modifyVisiable: false,
      playVideo: 0,
      Height: 0
    }
  },
  created() {},
  mounted() {
    this.Height = document.documentElement.clientHeight
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight
    }
  },
  methods: {}
}
</script>

<style scoped>
.block {
  width: 100%;
  height: 100%;
  background-image: url(~imgs/home/bj_01.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 100px;
  overflow: hidden;
}

.dropdown-div {
  float: right;
  margin-right: calc(50% - 700px);
}

img.account {
  display: block;
  width: 40px;
  height: 40px;
}

.title {
  width: 1080px;
  height: 185px;
  margin: 60px auto 0;
  background: url(~imgs/home/bt.png) 0 0 no-repeat;
  background-size: 100%;
}

.title1 {
  text-align: center;
  font-size: 56px;
  letter-spacing: 4px;
  color: #004e0a;
  text-shadow: 1px 1px 3px #fff;
  font-family: "方正粗体";
  margin: 0;
}

.card-box {
  width: 1400px;
  display: flex;
  align-items: center;
  margin: 80px auto 0;
  justify-content: space-between;
}

.card {
  width: 240px;
  margin: 0 30px;
  cursor: pointer;
}
.card .img {
  width: 240px;
  height: 240px;
  transition: 0.2s;
}

.card .name {
  text-align: center;
  margin-top: 30px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #e5f0ce;
  font-weight: 600;
}
.card:hover .img {
  transform: scale(1.2);
}

.user-dropdown {
  display: flex;
  cursor: pointer;
}

.textAdmin {
  color: #fff;
  line-height: 40px;
  margin-left: 4px;
  text-shadow: 1px 1px 1px #000;
}
</style>
