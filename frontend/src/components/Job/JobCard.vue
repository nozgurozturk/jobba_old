<template>
  <div class="card-container">
    <img class="company-logo" src="#" >
    <div class="job-info">
      <div class="company-name">Figma</div>
      <h3 class="job-title">Front End Developer</h3>
      <div class="company-detail">
        <div class="location">Berlin</div>
        <div class="type">Fulltime</div>
        <div class="created">1d ago</div>
      </div>
      <div class="tag-container">
        <div class="tag">javacript</div>
        <div class="tag">nodejs</div>
        <div class="tag">react</div>
        <div class="tag">vue</div>
      </div>
    </div>
    <div class="actions">
      <i>Linkedin</i>
      <div class="actions-bottom">
        <div>add note</div>
        <a href="www.linkedin.com">go to job</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobCard'
}
</script>
<style lang="scss" scoped>
  h3{
    margin:0;
    padding:0;
  }
  .card-container{
    display:flex;
    flex-direction: row;
    width:calc(100% - 43px);
    padding: 20px;
    align-items: flex-start;
    border-bottom: 2px solid #191919;
    border-left: 4px solid #0F62FE;
    &:last-of-type{
      border-bottom:none;
    }
  }
  .company-logo{
    width:80px;
    height:80px;
    object-fit: contain;
    border-radius: 8px;
    background-color:#c4c4c4;
  }
  .job-info{
    display: flex;
    flex-direction: column;
    width:240px;
    margin-left:20px;
    text-align: left;
    > * {
      margin-bottom: 6px;
    }
    > div:last-of-type{
      margin-bottom: 0px;
    }
    .company-detail{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .tag-container{
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      .tag{
        font-size: 12px;
        border: 1px solid #191919;
        border-radius: 4px;
        height:12px;
        line-height: 12px;
        padding:4px;
        margin:4px 4px 0px 0px;
      }
    }
  }
  .actions{
    margin-left: auto;
    display:flex;
    flex-direction: column;
    .actions-bottom{
      align-self: flex-end;
    }
  }
</style>
