<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ titleDetail }}</p>
    <br>
    <h3>何时使用</h3>
    <p>{{ useDetail }}</p>
    <br>
    <h3>注意</h3>
    <article>
      以下代码中的 组件/函数 需要统一从 block-ui-1 中导入
      <pre v-html="code" class="language-javascript"/>
    </article>
    <br>
    <h3>代码演示</h3>
    <slot/>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {ref} from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleDetail: {
      type: String
    },
    useDetail: {
      type: String
    }
  },
  setup() {
    const Prism = (window as any).Prism;
    const codeString = ref('import { XXX } from \'../../../../lib/index.ts\';\n// 需改为\nimport { xxx } from \'block-ui-1\';');
    const code = Prism.highlight(codeString.value, Prism.languages.javascript, 'javascript');
    return {code};

  }
};
</script>
