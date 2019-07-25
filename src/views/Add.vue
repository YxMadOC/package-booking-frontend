<template>
  <el-form :model="addForm" status-icon ref="addForm" label-width="100px">
    <el-form-item label="运单号" prop="packageNumber">
      <el-input type="text" v-model="addForm.packageNumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="收件人" prop="receiver">
      <el-input type="text" v-model="addForm.receiver" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="receiverContact">
      <el-input type="text" v-model="addForm.receiverContact" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="重量" prop="weight">
      <el-input type="text" v-model="addForm.weight" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
      <el-button @click="resetForm('addForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import http from '../request/http'

export default {
  name: 'Add',
  data () {
    return {
      addForm: {
        packageNumber: '',
        receiver: '',
        receiverContact: '',
        weight: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      http.post('/package', this.$refs[formName].model).then(response => {
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
