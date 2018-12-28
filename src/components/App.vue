<template>
  <div>
    <app-list></app-list>
    <app-form></app-form>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import Form from './Form';
import List from './List';

export default {
  name: 'app',
  components: {
    'app-form': Form,
    'app-list': List,
  },
};
</script>