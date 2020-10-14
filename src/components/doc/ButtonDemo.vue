<template>
<div>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button> 你好 </Button>
    <Button theme="button"> 你好 </Button>
    <Button theme="link"> 你好 </Button>
    <Button theme="text"> 你好 </Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button theme="button" size="big"> 大大大 </Button>
    <Button> 普通 </Button>
    <Button theme="button" size="small"> 小小小 </Button>
  </div>
  <div>
    <Button theme="link" size="big"> 大大大 </Button>
    <Button theme="link"> 普通 </Button>
    <Button theme="link" size="small"> 小小小 </Button>
  </div>
  <div>
    <Button theme="text" size="big"> 大大大 </Button>
    <Button theme="text"> 普通 </Button>
    <Button theme="text" size="small"> 小小小 </Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button theme="button" > 普通按钮 </Button>
    <Button theme="button" level="main"> 主要按钮 </Button>
    <Button theme="button" level="danger"> 危险按钮 </Button>
  </div>
  <div>
    <Button theme="link" > 普通链接按钮 </Button>
    <Button theme="link" level="main"> 主要链接按钮 </Button>
    <Button theme="link" level="danger"> 危险链接按钮 </Button>
  </div>
  <div>
    <Button theme="text"> 普通文本按钮 </Button>
    <Button theme="text" level="main"> 主要文本按钮 </Button>
    <Button theme="text" level="danger"> 危险文本按钮 </Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button theme="button" disabled> 禁用普通按钮 </Button>
    <Button theme="link"  disabled> 禁用链接按钮 </Button>
    <Button theme="text"  disabled> 禁用文本按钮 </Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button theme="button" loading>加载中</Button>
    <Button theme="button" >加载完毕</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
  components: {Button},
  setup() {

  }
}
</script>
