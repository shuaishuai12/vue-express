<template>
	<section>
		<!--工具条-->

    用户名称:{{username}}
    <button @click="jump()">跳转</button>

		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名" ref="findname"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary"  @click="handleFind()">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd()">新增</el-button>
				</el-form-item>

			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable>
			</el-table-column>
			<el-table-column prop="birth" label="生日" width="120"  :formatter="formatData" sortable>
			</el-table-column>
			<el-table-column prop="address" label="地址" min-width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit1(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
    <div v-show="paginationVisible">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 8, 10]"
      :page-size="pageSize"
      :current-page="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum">
    </el-pagination>
    </div>

		<!--工具条-->
		<!--<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>-->

		<!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible"  :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.address"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

    <new-add
      :add-formvisible.sync="addFormVisible"
      :title="title"
      v-on:sumbit="tijiao"
    >111</new-add>

   <!-- <test :test.sync="Visible1" ref="child1" ></test>-->

		<!--新增界面-->
	<!--	<el-dialog title="新增" :visible.sync="addFormVisible">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
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
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>-->
	</section>
</template>

<script>
  import {getList,getAdd ,getRemove,getUpdata, getFind} from '../api/test'
  import { mapState } from 'vuex'
  import { dataTransform,formatDuring } from '../util/data'
  import model1 from '../components/add.vue'
  import test from '../components/model.vue'



	export default {
		data() {
			return {
        title:'',
        Visible1:false,
        //fenye
        pageSize:5,
        totalNum:100,
        currentPage:1,
        paginationVisible:true,



				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
          address: ''
				},

				addFormVisible:false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
          address: ''
				}

			}
		},
    components:{
        'new-add':model1,
        'test':test
    },
		methods: {
      tijiao(data){
        getAdd(data).then((res)=>{
          console.log(res);
          this.addFormVisible=false;
            if(res.data.reupdata==0) {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
            }})


      },
     //分页操作
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize=val
          var para={pageSize:val};
          getList(para).then((res)=>{
            console.log('docs',res.data);
            this.users=res.data.docs;
            this.totalNum=res.data.array1.zongshu
          })

        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          var para={pageSize:this.pageSize,currentPage:val};
          getList(para).then((res)=>{
            console.log('docs',res.data);
            this.users=res.data.docs;
            this.totalNum=res.data.array1.zongshu
          })
        },
      //





        jump(){

          this.$router.beforeEach((to, from, next) => {
            console.log('to',to);
            console.log('from',from)
            next()
          });
          this.$router.push({ path: 'dropzone' });
        },
      handleFind(){
          this.paginationVisible=false;
          var name = this.$refs.findname.value;
          var para ={name:name};
          getFind(para).then((res)=>{
              console.log('1111111112222222',res.data.docs);
              this.users=res.data.docs
          })
         // console.log('refs',this.$refs.findname.value);

      },
      formatData:function (cellValue) {
        var data =parseInt(cellValue.birth)
        return  formatDuring(data);
      },

      //test
      getlist(){
          getList().then((res)=>{
              console.log('docs',res.data);
              this.users=res.data.docs;
              this.totalNum=res.data.array1.zongshu
          })
      },
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
            let para = Object.assign({}, this.editForm);
            para.birth = (!para.birth || para.birth == '') ? '' : dataTransform(para.birth);
            console.log('11111111',para)
            getUpdata(para).then((res) => {
              console.log(res);
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.editLoading = false;
            this.$refs.editForm.resetFields();
            this.editFormVisible = false;
            this.getlist();
          });
          });
          }
        });
      },
      addSubmit(){
          this.$refs.addForm.validate((valid) => {
            if(valid){
              this.$confirm('确认提交吗？', '提示', {}).then( ()=>{
                this.addLoading = true;
                let para = Object.assign({}, this.addForm);
                para.birth = (!para.birth || para.birth == '') ? '' : dataTransform(para.birth);

                console.log('提交',para)
                getAdd(para).then((res)=>{
                  if(res.data.reupdata==0){
                    this.$message({
                      message: '提交成功',
                      type: 'success'
                    });

                  }


                  this.addLoading = false;
                  this.$refs.addForm.resetFields();
                  this.addFormVisible = false;
                  this.getlist();
              }

              )
            })
          }})

      },

			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},

			//删除
			handleDel: function (index, row) {
        console.log('row',row)
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then((res) => {
					this.listLoading = true;
					let para = { _id: row._id };
          console.log(para)
          getRemove(para).then((res) => {
						this.listLoading = false;
            console.log(res.data.removeid)
            if (res.data.removeid==0){
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
            }else{
              this.$message({
                message: '删除失败',
                type: 'error'
              });
            }


						this.getlist();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
        this.addFormVisible = true;
        this.editForm = Object.assign({}, row);
        console.log('1123213',row)
      },
      handleEdit1: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
        console.log('1123213',row)
      },
			//显示新增界面
			handleAdd(){
        this.title='填写增加页面'
				this.addFormVisible = true;

			},
      handleAdd1(){
        this.Visible1 = true;

      },
      handleAdd2(){
        this.$refs.child1.shuai()


      }

		/*	//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
              console.log("======>>>",valid)
							let para = Object.assign({}, this.editForm);
						//	para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							getAdd(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getlist();
							});
						});
					}
				});
			},
			//新增
			/!*addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
            console.log("====>",valid)
							let para = Object.assign({}, this.addForm);
							//para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							getAdd(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getlist();
							});
						});
					}
				});
			},*!/
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			}*/
		},
		mounted() {

      this.getlist();
		},
    computed:{
      //读取缓存 ，不要使用箭头函数
     /* username: () => this.$cookie.get('username')*/
      username () {
        return this.$cookie.get('username');
      }
    }


   /* computed: {
      count () {
        return this.$store.state.users.username
      }
    }*/

	}

</script>

<style scoped>

</style>
