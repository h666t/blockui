<template>
<div class="switchDemo-wrapper">
  <h2>Switch 开关</h2>
  <br>
  <h3>何时使用</h3>
  <p>需要表示开关状态/两种状态之间的切换时；</p>
  <br>
  <h3>代码演示</h3>
  <div class="demo1-box">
    <h4>基本用法</h4>
    <div class="intro">
      <div class="demo">
        <SwitchDemo1/>
      </div>
      <Button size="small">展示代码</Button>
      <pre>
        {{SwitchDemo1.__sourceCode}}
      </pre>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import SwitchDemo1 from './SwitchDemo1.vue';
import Button from '../../lib/Button.vue';
export default {
  components: {Button, SwitchDemo1},
  setup(){
    return{SwitchDemo1}
  }
}
</script>

<style lang="scss" scoped>
.switchDemo-wrapper{
  >.demo1-box{
    display: grid;
    border:1px solid rgba(0,0,0,0.25);
    >.demo{
      padding: 8px;
    }
    >.intro{
      border-top: 1px solid rgba(0,0,0,0.25);
      overflow: auto;
    }
  }
}
</style>