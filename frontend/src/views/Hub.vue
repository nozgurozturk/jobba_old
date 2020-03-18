<template>
  <div class="container">
    <div>{{userName}} || {{email}}</div>
    <JobList />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import JobList from '../components/Job/JobList'

export default {
  name: 'Hub',
  components: {
    JobList
  },
  computed: {
    ...mapGetters(['userName', 'email'])
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding:40px;
  }
</style>
