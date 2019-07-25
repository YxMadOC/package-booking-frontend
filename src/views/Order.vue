<template>
  <el-form :model="orderForm" status-icon ref="orderForm" label-width="100px">
    <el-form-item label="运单号" prop="packageNumber">
      <el-input type="text" v-model="orderForm.packageNumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="取件时间">
      <el-date-picker
        v-model="orderForm.orderDate"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('orderForm')">提交</el-button>
      <el-button @click="resetForm('orderForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import http from '../request/http'

export default {
  name: 'Order',
  data () {
    return {
      orderForm: {
        packageNumber: '',
        orderDate: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      let data = this.$refs[formName].model
      http.post(`/package/${data.packageNumber}/order`, data).then(response => {
        this.$router.push({ name: 'list' })
        this.$message('提交成功！')
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
