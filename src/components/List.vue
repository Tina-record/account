<template>
  <el-table :data="checklist" class="app-table">
    <el-table-column label="支出说明" prop="mark">
    </el-table-column>
    <el-table-column label="支出金额" prop="amount">
    </el-table-column>
    <el-table-column label="日期" prop="date" sortable>
    </el-table-column>
    <el-table-column label="时间" prop="time">
    </el-table-column>
    <el-table-column inline-template>
      <div>
        <!--<el-button size="small">
          编辑
        </el-button>-->
        <el-button size="small" type="danger">
          删除
        </el-button>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn, Button } from 'element-ui';

export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
  },
  data() {
    return {
      checklist: [
        {
          mark: '午餐',
          amount: '10.00',
          date: '2016-12-04',
          time: '11:12:30',
        },
        {
          mark: '午餐',
          amount: '10.00',
          date: '2016-12-04',
          time: '11:12:30',
        },
        {
          mark: '午餐',
          amount: '10.00',
          date: '2016-12-04',
          time: '11:12:30',
        },
        {
          mark: '午餐',
          amount: '10.00',
          date: '2016-12-04',
          time: '11:12:30',
        },
        {
          mark: '午餐',
          amount: '10.00',
          date: '2016-12-04',
          time: '11:12:30',
        },
      ],
    };
  },
};
</script>

<style>
  .app-table {
    margin-top: 20px;
  }
</style>
