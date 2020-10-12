import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Button from './components/doc/ButtonDemo.vue'
import Dialog from './components/doc/DialogDemo.vue'
import Switch from './components/doc/SwitchDemo.vue'
import Tabs from './components/doc/TabsDemo.vue'
import DocDefault from './components/doc/DocDefaultDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',component:DocDefault},
        {path:'/doc/button',component:Button},
        {path:'/doc/dialog',component:Dialog},
        {path:'/doc/switch',component:Switch},
        {path:'/doc/Tabs',component:Tabs}
      ]}
  ]
})