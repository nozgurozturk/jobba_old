<template>
  <div>
    <!-- <img alt="Login Background" class="login-bg" src="../assets/auth/bg1.svg"> -->
    <img alt="Login Background" class="login-bg bottom" src="../assets/auth/bg2.svg">
    <section class="auth-container">
        <h2>Create your free account</h2>
        <el-card>
          <el-form :model="signupForm" :rules="rules" ref="signupForm">
            <el-form-item label="Username" prop="username">
              <el-input
              placeholder="Enter your username"
              prefix-icon="el-icon-user"
              v-model="signupForm.username">
              </el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input
              placeholder="Enter your Email"
              prefix-icon="el-icon-message"
              v-model="signupForm.email">
              </el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
              placeholder="Enter your password"
              prefix-icon="el-icon-lock"
              v-model="signupForm.password"
              show-password>
              </el-input>
            </el-form-item>
            <el-form-item label="Comfirm Password" prop="comfirmPassword">
              <el-input
              placeholder="Enter your password"
              prefix-icon="el-icon-lock"
              v-model="signupForm.comfirmPassword"
              show-password>
              </el-input>
            </el-form-item>
            <el-button @click="submitForm('signupForm')" size="medium" type="primary" round>Sign up</el-button>
          </el-form>
        </el-card>
    </section>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  data () {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.signupForm.password) {
        callback(new Error('Two inputs don\'t match!'))
      } else {
        callback()
      }
    }
    return {
      signupForm: {
        username: '',
        email: '',
        password: '',
        comfirmPassword: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please input your user name', trigger: 'change' },
          { min: 3, max: 40, message: 'Username must be minimum 3 charecter long', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Please input your password', trigger: 'change' },
          { min: 6, max: 16, message: 'Password must be minimum 6, maximum 16 charecter long', trigger: 'change' }
        ],
        comfirmPassword: [
          { required: true, message: 'Please comfirm your password', trigger: 'change' },
          { validator: checkPassword, trigger: 'change' }
        ],
        email: [
          { type: 'email', required: true, message: 'Please input valid email', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signup()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async signup () {
      try {
        const response = await this.$apollo.mutate({
          mutation: gql`mutation($userName: String!, $email: String!, $password: String!) {
            signup(userName: $userName, email: $email, password: $password) {
              user{
                userName
                email
              }
              token
            }
          }`,
          variables: {
            userName: this.signupForm.username,
            email: this.signupForm.email,
            password: this.signupForm.password
          }
        })
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
    position: absolute;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    min-width: 380px;
    .el-button{
      right:0;
      width:140px;
    }
  }
</style>
