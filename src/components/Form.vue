<template>
  <el-form :inline="true" :model="check" class="app-form">
    <el-form-item>
      <el-input placeholder="支出说明"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="支出金额"></el-input>
    </el-form-item>
    <el-form-item>
      <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-time-picker type="fixed-time" placeholder="选择时间"></el-time-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">记上一笔</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Col, Form, FormItem, Button, Input, DatePicker, TimePicker } from 'element-ui';
import { mapComponentName } from '../utils';

export default {
  name: 'app-form',
  components: mapComponentName(Col, Form, FormItem, Button, Input, DatePicker, TimePicker),
  data() {
    return {
      check: {
      },
    };
  },
};
</script>

<style>
.app-form {
  margin-top: 20px;
}
</style>