<template>
  <div class="demo-box">
    <h4>{{component.__sourceCodeTitle}}</h4>
    <div class="intro">
      <div class="demo">
        <component :is="component"/>
      </div>
      <Button level="main" size="normal" @click="toggle">{{buttonText}}</Button>
        <pre v-if="codeVisible" class="language-html" v-html="code"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import {ref,computed} from 'vue'
export default {
  props:{
    component: {
      type: Object,
      required: true
    },
  },
  components:{
    Button
  },
  setup(props){
    const Prism = (window as any).Prism
    const codeVisible = ref(false)
    const toggle = () => {
      codeVisible.value = !codeVisible.value
    }
    const code = computed(()=>{
      return  Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const buttonText = computed(()=>{
      if (codeVisible.value){return '隐藏代码'}else {return '显示代码'}
    })
    return {Prism,codeVisible,toggle,code,buttonText}
  }
}
</script>

<style lang="scss" scoped>
.demo-box{
  display: grid;
  border:1px solid rgba(0,0,0,0.25);
  margin-top: 20px;
  >h4{
    padding: 4px;
    font-weight: bold;
  }

  >.intro{
    border-top: 1px solid rgba(0,0,0,0.25);
    overflow: auto;
    padding: 4px;
    display: flex;
    flex-direction: column;
    >.demo{
      padding:  8px;
    }
  }
}
</style>