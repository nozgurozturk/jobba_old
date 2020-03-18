<template>
  <div class="detail-container">
    <i>Linkedin</i>
    <section class="detail-header">
      <img class="company-logo" src="#" >
      <div class="job-info">
        <div class="company-name">Figma</div>
        <h3 class="job-title">Front End Developer</h3>
        <div class="detail-actions">
          <div class="status">Rejected</div>
          <div class="link">go to job</div>
        </div>
      </div>
    </section>
    <section class="detail-about">
      <h3>About this Job</h3>
      <div class="about-container">
        <div><b>Job type: </b>Full-time</div>
        <div><b>Experience level: </b>Senior, Lead </div>
        <div><b>Role: </b>E-Commerce, Food, Beverage, Health, Fitness</div>
        <div><b>Industry: </b>Full-time</div>
        <div><b>Job type: </b>Full-time</div>
      </div>
    </section>
    <section class="detail-location">
      <h3>Location</h3>
      <div>Berlin / Germany</div>
    </section>
    <section class="dateil-tag">
      <h3>Tags</h3>
      <div class="tag-container">
        <div class="tag">javacript</div>
        <div class="tag">nodejs</div>
        <div class="tag">react</div>
        <div class="tag">vue</div>
      </div>
    </section>
    <section class="detail-desctription">
      <h3>Job Desctription</h3>
      <div class="desctiption-content">
        Requirements:
        5 years minimum of professional experience in Software Engineering. Experience with any or all of the following technologies is a plus: Node.js, React, TypeScript. Startup experience valued.
        Our company:
        Did you know that 90% of all goods globally are transported through a container, and the largest container vessels are 400 meters long and can transport 20,000 containers at a time? The container shipping industry is the back-bone and enabler of global trade, but it is struggling. At its core the industry is fundamentally inefficient: 50% of all container vessels globally are delayed coming into port, and key planning processes are done manually on a global scale. This leads to high operational costs, lost revenue, and unnecessarily high greenhouse gas emissions Portchain is a 2 year old Danish container shipping startup devoted to help container carriers and terminals reduce operational complexity and optimize planning. We apply cutting-edge AI leading to both a better bottom line and less greenhouse gas emissions.We are an international team of 15 people serving a global customer base and several of the largest companies in the industry. We have received $5M in funding to expand the team in order to serve our increasing customer traction. More information: https://www.portchain.com/careers/full-stack-software-engineer/
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'JobCard'
}
</script>
<style lang="scss" scoped>
  section{
    margin-bottom:20px;
    &:last-of-type{
      margin-bottom: 0;
    }
    h3{
      margin:10px;
      margin-left:0;
    }
  }
  .detail-container{
    position:relative;
    display:flex;
    flex-direction: column;
    width:calc(100% - 43px);
    padding: 20px;
    align-items: flex-start;
    border: 2px solid #191919;
    border-radius: 12px;
    text-align: left;
  }
  .detail-header{
    display:flex;
    flex-direction: row;
    position:relative;
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
      .detail-actions{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
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
  .actions{
    margin-left: auto;
    display:flex;
    flex-direction: column;
    .actions-bottom{
      align-self: flex-end;
    }
  }
  i{
    position: absolute;
    right:20px;
    top:20px;
  }
</style>
