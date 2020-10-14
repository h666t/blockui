<template>
  <h1>示例1</h1>
  <div>
    <Dialog v-model:visible="visible"
            :closeOnClickOverlay="closeOnClickOverlay"
            :confirmFn="confirmFn">
      <template v-slot:title>
        <strong>Title</strong>
      </template>
      <template v-slot:content>
        <div>第一行</div>
        <div>第二行</div>
      </template>
    </Dialog>
    <Button @click="toggle">toggle</Button>
  </div>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue'
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';
export default {
  components:{
    Button,
    Dialog
  },
  setup(){
    const visible = ref(false) // 对话框是否可见
    const closeOnClickOverlay = ref(true) // 点击对话框外时，对话框是否会关闭
    const toggle = () => { //控制对话框是否可见
      visible.value = !visible.value
    }
    const confirmFn = () => {
      return true
    }
    const showDialog = () => {
        openDialog({
          visible:true,
          title:'示例2',
          content:'123',
          closeOnClickOverlay:true,
          confirmFn:()=>{return true}})
    }
    return {visible,toggle,closeOnClickOverlay,confirmFn,showDialog}
  },
}
</script>
