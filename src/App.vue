<template>
  <article class="resume-wrapper text-center position-relative">
    <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
    <Header></Header>
    <div id="app">
      <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
      <!--</div>-->
      <router-view/>
    </div>

    </div>
  </article>
</template>

<script>
  import Header from '@/components/header/Header.vue';
  export default {
    components: {
      Header,
    },
  };
</script>

<style>

</style>
