import { createApp } from 'vue/dist/vue.esm-bundler'
// import "uno.css";
import Terse from './entry'

createApp({
  template:`
      <div>
          <WButton>普通按钮TSXButton</WButton>
      </div>
  `
}).use(Terse).mount("#app");

