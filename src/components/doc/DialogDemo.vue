<template>
  <div>
    <Dialog :title="title" v-model:visible="visible"
            :closeOnClickOverlay="closeOnClickOverlay" :confirmFn="confirmFn">
      <div>第一行</div>
      <div>第二行</div>
    </Dialog>
    <Button @click="toggle">toggle</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue'
import Button from '../../lib/Button.vue';
  export default {
    components:{
      Button,
      Dialog
    },
    setup(){
      const visible = ref(false) // 对话框是否可见
      const closeOnClickOverlay = ref(true) // 点击对话框外时，对话框是否会关闭
      const title = 'title'
      const toggle = () => { //控制对话框是否可见
        visible.value = !visible.value
      }
      const confirmFn = () => {
        return true
      }
      return {visible,toggle,closeOnClickOverlay,confirmFn,title}
    }
  }
</script>
