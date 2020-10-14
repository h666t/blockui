<template>
  <div>
    <Dialog :visible="visible"/>
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
      const visible = ref(false)
      const toggle = () => {
        visible.value = !visible.value
      }
      return {visible,toggle}
    }
  }
</script>
