<template>
  <div>
    <!-- <img alt="Login Background" class="login-bg" src="../assets/auth/bg1.svg"> -->
    <img alt="Login Background" class="login-bg bottom" src="../assets/auth/bg2.svg">
    <section class="auth-container">
        <h2>Hello again</h2>
        <el-card>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="Username" prop="username">
              <el-input
              placeholder="Enter your username"
              prefix-icon="el-icon-user"
              v-model="loginForm.username">
              </el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
              placeholder="Enter your password"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              show-password>
              </el-input>
            </el-form-item>
            <el-button @click="submitForm('loginForm')" size="medium" type="primary" round>Login</el-button>
          </el-form>
        </el-card>
        <router-link class="link signup" to="/signup">
          <el-button size="medium" type="text">Create an account</el-button>
        </router-link>
        <router-link class="link reset" to="/reset-password">
          <el-button size="medium" type="text">Forgat your password</el-button>
        </router-link>
    </section>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import { mapActions } from 'vuex'
import { setToken } from '@/utils/token'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please text your user name', trigger: 'change' },
          { min: 3, max: 40, message: 'Username must be minimum 3 charecter long', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Please text your password', trigger: 'change' },
          { min: 6, max: 16, message: 'Password must be minimum 6, maximum 16 charecter long', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          this.$message({
            type: 'warning',
            message: 'You must fill required inputs'
          })
          return false
        }
      })
    },
    async login () {
      try {
        const response = await this.$apollo.mutate({
          mutation: gql`mutation($userName: String!, $password: String!) {
            login(userName: $userName, password: $password) {
              user {
                userName
                email
              }
              token
            }
          }`,
          variables: {
            userName: this.loginForm.username,
            password: this.loginForm.password
          }
        })
        setToken(response.data.login.token)
        this.setUserName(response.data.login.user.userName)
        this.setEmail(response.data.login.user.email)
        this.setLoggedIn()
        this.$router.push({ name: 'Hub' })
      } catch (error) {
        this.$message({
          message: this.$graphqlError(error),
          type: 'error'
        })
      }
    },
    ...mapActions(['setLoggedIn', 'setUserName', 'setEmail'])
  }
}
</script>
<style lang="scss" scoped>
  h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
  .login-bg{
    position: absolute;
    top:0;
    left:0;
    width:80%;
  }
  .bottom{
    top:unset;
    width:100%;
    left:0;
    right:0;
    bottom:0;
  }
  .auth-container{
    position: fixed;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    min-width: 380px;
    .el-button{
      right:0;
      width:140px;
    }
  }
  .link{
    position: absolute;
  }
  .signup{
    text-align: right;
    right:0;
  }
  .reset{
    text-align: left;
    left:0;
    .el-button{
      color: #393939;
    }
  }
</style>
