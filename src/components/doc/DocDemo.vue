<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{titleDetail}}</p>
    <br>
    <h3>何时使用</h3>
    <p>{{useDetail}}</p>
    <br>
    <h3>代码演示</h3>
    <slot/>
  </div>
</template>

<script lang="ts">

export default {
  props:{
    title:{
      type: String,
      required:true
    },
    titleDetail:{
      type:String
    },
    useDetail:{
      type: String
    }
  }
}
</script>
