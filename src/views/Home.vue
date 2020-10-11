<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="">GItHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>