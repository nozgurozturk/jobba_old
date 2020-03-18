<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="list-container" >
        <JobCard v-for="o in 4" :key="o" />
      </div>
    </el-col>
    <el-col :span="12">
      <JobDetail />
    </el-col>
  </el-row>
</template>
<script>
import JobCard from './JobCard'
import JobDetail from './JobDetail'

export default {
  name: 'JobList',
  components: { JobCard, JobDetail }
}
</script>
<style lang="scss" scoped>
  .list-container{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid #191919;
    border-left: none;
    border-top-right-radius:12px;
    border-bottom-right-radius:12px;
  }
</style>
