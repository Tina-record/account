import Vue from 'vue';
import VueRouter from 'vue-router';
import { Row, Menu, MenuItem } from 'element-ui';
import App from './components/App';
import Chart from './components/Chart';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/list' },
  { path: '/list', component: App },
  { path: '/chart', component: Chart },
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div>
      <el-row class="container">
        <el-menu mode="horizontal" default-active="0">
          <el-menu-item index="0">
            <router-link to="/list">明细</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link to="/chart">报表</router-link>
          </el-menu-item>
        </el-menu>
        <router-view></router-view>
      </el-row>
    </div>
  `,
  components: {
    'el-row': Row,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
  },
}).$mount('#app');

