<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">注册登录</h3>
    <el-form-item prop="user">
      <el-input type="text" v-model="ruleForm2.user" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="password1">
      <el-input type="password" v-model="ruleForm2.password1" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
  import { getRegister } from '../api/test';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          user: 'admin',
          password: '123456',
          password1: '123456'
        },
        rules2: {
          user: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ],
          password1: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]


        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit() {
        console.log(this.ruleForm2.user);

        if(this.ruleForm2.password==this.ruleForm2.password1){
          this.$refs.ruleForm2.validate((valid) => {
            if(valid){
              this.$confirm('确认提交吗？', '提示', {}).then( ()=>{
                this.addLoading = true;
              let para = Object.assign({}, this.ruleForm2);
              getRegister(para).then((res)=>{
                this.addLoading = false;
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs.ruleForm2.resetFields();


            }

            )
            })
            }})
        }else{
          this.$message.error('提交失败');

        }








      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  }
</style>
