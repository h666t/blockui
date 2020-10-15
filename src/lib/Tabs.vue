<template>
<div class="block-tabs">
  <div class="block-tabs-nav">
    <div class="block-tabs-nav-item"
         v-for="(t,index) in titles" :key="index"
         :class="t === selected ? 'selected' : ''"
         @click="()=>{select(t)}"
    >
      {{ t }}
    </div>
  </div>
  <div class="block-tabs-content">
    <component :is="current" :key="selected" class="block-tabs-content-item"/>
  </div>

</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue'
  export default {
    props: {
      selected: String,
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 的内部必须是 Tab');
        }
      });
      const titles = defaults.map(item => {
        return item.props.title;
      });
      const select = (title: string) => {
        context.emit('update:selected',title)
        return defaults.filter(item=> item.props.title === title)[0]
      }
      const current = computed(()=>{
        return select(props.selected)
      })
      return {defaults, titles,select,current};
    }
  }
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.block-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>