<template>
<div>
  <slot/>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
  export default {
    setup(props,context){
      const tagList = context.slots.default()
      tagList.forEach((tag)=>{
        if (tag.type !== Tab){
          throw new Error('Tabs 的内部必须是 Tab')
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>