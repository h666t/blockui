<template>
<div class="block-tabs">
  <div class="block-tabs-nav" ref="containerRef">
    <div class="block-tabs-nav-item"
         v-for="(t,index) in titles" :key="index"
         :class="t === selected ? 'selected' : ''"
         @click="()=>{select(t)}"
         :ref="(el)=>{if (el){navItemRef[index] = el}}"
    >
      {{ t }}
    </div>
    <div class="block-tabs-nav-indicator" ref="indicator"/>
  </div>
  <div class="block-tabs-content">
    <component :is="current" :key="selected" class="block-tabs-content-item"/>
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed,ref,onMounted,onUpdated} from 'vue'
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
      const navItemRef = ref([])
      const indicator = ref(null)
      const containerRef = ref(null)
      const x = ()=>{ // 挂载的时候确定下划线的长度
        let width = ref(0)
        navItemRef.value.map((item: HTMLDivElement)=>{
          if (item.classList.value.indexOf('selected') >= 0){
            width.value = item.getBoundingClientRect().width;
            indicator.value.style.width = width + 'px'
            indicator.value.style.width = `${width.value}px`;
            const containerLeft = (containerRef.value as HTMLDivElement).getBoundingClientRect().left
            const beSelectedNavLeft = item.getBoundingClientRect().left
            const indicatorLeft: number =  beSelectedNavLeft - containerLeft
            indicator.value.style.left = `${indicatorLeft}px`
            console.log(indicator.value.style.left);
          }
        })
      }
      onMounted(x)
      onUpdated(x)
      return {defaults, titles,select,current,navItemRef,indicator,containerRef};
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
    position: relative;

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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>