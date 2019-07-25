<template>
  <div>
    <div style="float: right">
      <el-button @click="handleFilter('')">ALL</el-button>
      <el-button @click="handleFilter('ORDERED')">已预约</el-button>
      <el-button @click="handleFilter('RECEIVED')">已取件</el-button>
      <el-button @click="handleFilter('NOT_YET_RECEIVED')">未取件</el-button>
      <el-button type="primary"><router-link to="/add">添加</router-link></el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="packageNumber" label="运单号" width="140">
      </el-table-column>
      <el-table-column prop="receiver" label="收件人" width="120">
      </el-table-column>
      <el-table-column prop="receiverContact" label="电话">
      </el-table-column>
      <el-table-column prop="status" :formatter="formatStatus" label="状态">
      </el-table-column>
      <el-table-column prop="order.orderDate" :formatter="formatTime" label="预约时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-show="formatAction(scope)"
            type="primary"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">确认收货</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from '../request/http'

export default {
  name: 'List',
  mounted () {
    this.queryList('')
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    queryList (filter) {
      if (filter === '') {
        http.get(`/package`).then(data => {
          this.tableData = data
        })
      } else {
        http.get(`/package?status=${filter}`).then(data => {
          this.tableData = data
        })
      }
    },
    handleEdit (index, row) {
      let data = row
      data.status = 'RECEIVED'
      http.put(`/package/${row.packageNumber}`, data).then(response => {
        this.tableData[index] = response
      })
    },
    formatStatus (row, column) {
      switch (row.status) {
        case 'NOT_YET_RECEIVED':
          return '未取件'
        case 'RECEIVED':
          return '已取件'
        case 'ORDERED':
          return '已预约'
        default:
          return '错误状态'
      }
    },
    formatTime (row, column) {
      if (row.order !== null) {
        return new Date(row.order.orderDate).toLocaleString()
      }
      return ''
    },
    formatAction (scope) {
      return scope.row.status !== 'RECEIVED'
    },
    handleFilter (filter) {
      switch (filter) {
        case 'ALL':
          this.queryList('')
          break
        case 'RECEIVED':
          this.queryList('RECEIVED')
          break
        case 'NOT_YET_RECEIVED':
          this.queryList('NOT_YET_RECEIVED')
          break
        case 'ORDERED':
          this.queryList('ORDERED')
          break
        default:
          this.queryList('')
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
