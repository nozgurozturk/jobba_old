<template>
  <el-container>
    <el-header>
      <div class="nav-logo" >
        <img src="../assets/logo.svg" >
      </div>
      <router-link to="/login">
        <el-button round>Login</el-button>
      </router-link>
      <router-link to="/signup">
        <el-button  type="primary" round>Sign Up</el-button>
      </router-link>
    </el-header>
    <el-main>
      <el-row >
        <el-col :span="12">
          <h1>Hub for your job hunt</h1>
          <h4>Collect, list, organize and track your job searchs</h4>
          <el-button  type="primary" round>Sign Up for Free</el-button>
        </el-col>
        <el-col :span="12">
          <img class="ln-image" src="../assets/landing/jb.svg" >
        </el-col>
      </el-row>
      <el-row >
        <el-col :span="12">
          <img  src="../assets/landing/extension.svg" >
        </el-col>
        <el-col :span="12">
          <h2>Collect job with <span class="clr-blue">One-Click</span></h2>
          <p>Jobba's Browser Extension can collect jobs in web sites like Stackoverflow, Indeed, Glassdoor and Linkedin</p>
          <el-button  type="primary" round>Chrome</el-button>
          <el-tooltip effect="light" content="Comming Soon" placement="top">
            <el-button  type="danger" round >Firefox</el-button>
          </el-tooltip>
          <el-tooltip effect="light" content="Comming Soon" placement="top">
            <el-button  type="warning" round >Safari</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="hr-image">
            <img  src="../assets/landing/hr.svg" >
          </div>
        </el-col>
      </el-row>
      <el-row >
        <el-col :span="12">
          <img class="ln-image" src="../assets/landing/bm.svg" >
        </el-col>
        <el-col :span="12">
          <h2>List Job Searchs in <span class="clr-yellow">One-Space</span></h2>
          <ul>
            <li>List All Job Search that you collect</li>
            <li>Filter by tags, type, origin etc.</li>
          </ul>
        </el-col>
      </el-row>
      <el-row >
        <el-col :span="12">
          <h2>Organize your jobs <span class="clr-red">One-by-One</span></h2>
          <ul>
            <li>Add status your collecting jobs like applied, in progress, accepted or rejected</li>
            <li>Take notes about job</li>
            <li>Give them importance level</li>
          </ul>
        </el-col>
              <el-col :span="12">
          <img class="ln-image" src="../assets/landing/pr.svg" >
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
        <div class="footer-image">
            <img  src="../assets/landing/footer.svg" >
        </div>
    </el-footer>
  </el-container>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Landing'
}
</script>
<style lang="scss" scoped>
.el-container{
  padding:0px 80px;
  overflow: visible;
}
.el-header{
  a{
    margin-left:20px;
  }
}
.el-main{
    overflow: visible;
}
.el-header{
  text-align:right;
  margin-top:20px;
}
.nav-logo{
  position: relative;
  width:80px;
  img{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    object-fit: contain;
  }
}
.ln-image{
  width:100%;
  object-fit: contain;
}
.hr-image{
  position:relative;
  height:320px;
  z-index:-1;
  opacity:0.9;
  overflow:visible;
  img{
    bottom:0;
    position:absolute;
    left:-100px;
    width:calc(100% + 200px);
  }
}
.el-row{
  margin-top:80px;
  text-align:left;
  overflow: visible;
    h1, h2, h3, h4, h5, h6, p{
      width:65%;
    }
    ul{
      margin:0;
      padding:0;
      width:65%;
    }
    li{
      margin-bottom: 8px;
    }
    h1{
      font-size:48px;
    }
    h2{
      font-size:36px;
    }
    h3{
      font-size:24px;
    }
    h4{
      font-size:18px
    }
    h5{
      font-size: 16px
    }
    h6{
      font-size: 12px
    }
    .el-button{
      margin-top:16px;
    }
    &:nth-of-type(even){
    text-align:right;
    h1, h2, h3, h4, h5, h6, p, ul{
      margin-left:40%;
      text-align:left;
    }
  }
}
.footer-image{
  position:relative;
  height:320px;
  z-index:-1;
  opacity:0.9;
  overflow:visible;
  width:100%;
  img{
    right:-100px;
    bottom:0;
    position:absolute;
    transform: rotate(180deg);
    width:calc(100% + 200px);
  }
}

</style>
