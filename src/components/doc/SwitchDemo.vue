<template>
<div class="switchDemo-wrapper">
  <h2>Switch 开关</h2>
  <br>
  <h3>何时使用</h3>
  <p>需要表示开关状态/两种状态之间的切换时；</p>
  <br>
  <h3>代码演示</h3>
<Demo :component="SwitchDemo1"/>
  <Demo :component="SwitchDemo2"/>
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import SwitchDemo1 from './demo/switch/SwitchDemo1.vue';
import SwitchDemo2 from './demo/switch/SwitchDemo2.vue';
export default {
  components: {Demo},
  setup(){
    return {SwitchDemo1,SwitchDemo2}
  }
}
</script>

<style lang="scss" scoped>

</style>