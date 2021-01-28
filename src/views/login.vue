<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="loginruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="username" style="margin-left: -100px">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" style="margin-left: -100px">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="login" style="margin-left: -100px">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from "../api/user";
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginruleForm.validate((valid) => {
        if (valid) {
          login(this.ruleForm.username, this.ruleForm.password).then((res) => {
            console.log(res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 400px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // background: #ccc;
}
</style>

