<template>


  <el-dialog :title="title"  :visible.sync="addFormvisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">

    <el-form :model="addForm" label-width="80px" :rules="addFormRules" >

      <el-form-item label="姓名" prop="name">
        <el-input v-model="addForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="addForm.sex">
          <el-radio class="radio" :label="1">男</el-radio>
          <el-radio class="radio" :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="addForm.address"></el-input>
      </el-form-item>
    </el-form>
   <div slot="footer" class="dialog-footer">
      <el-button @click.native="cancel()">取消</el-button>
      <el-button type="primary" @click.native="sumbit()">提交</el-button>
    </div>
  </el-dialog>


</template>

<script>

  export default {
    data() {
      return {
         // title:'wu',
          addFormRules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' }
            ]
          },
          addForm: {
            name: '',
            sex: -1,
            age: 0,
            birth: '',
            address: ''
          },


      }},
      props:{
        addFormvisible:{
            type:Boolean,
            default:false
        },
        title:{
          type:String,
          default:''
        }
      },
    methods:{
      cancel(){
        //alert('1111');
        /*this.addFormvisible=false*/
        this.$emit('update:addFormvisible', false)
      },
      sumbit(){
        //console.log('子组件',this.addForm);
        this.$emit('sumbit',this.addForm);
        //this.$emit('sumbit1',this.addForm);
       // this.$emit('update:addFormvisible', false)
       // this.$emit('sumbit1',{data,this.addForm})
      }
    }
  }

</script>

<style scoped>

</style>
