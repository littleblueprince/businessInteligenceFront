<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item @click="Form0 = true">输入一个实体</b-nav-item>
          <b-nav-item @click="Form1 = true">输入两个实体</b-nav-item>
          <b-nav-item @click="Form2 = true">查询某个领域的关键</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <el-dialog :visible.sync="Form0" title="请输入一个实体,如某作者A或论文A">
      <el-form :model="form0">
        <el-form-item label="待查询实体标签" :label-width="formLabelWidth">
          <el-select v-model="form0.type" placeholder="请选择">
            <el-option label="Author" value="Author"></el-option>
            <el-option label="Paper" value="Paper"></el-option>
            <el-option label="Venue" value="Venue"></el-option>
            <el-option label="Affiliation" value="Affiliation"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="待查询实体姓名">
          <el-input v-model="form0.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="返回结果数量限制">
          <el-input v-model="form0.limit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="关系跳数" :label-width="formLabelWidth">
          <el-select v-model="form0.step" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Form0 = false">取 消</el-button>
        <el-button type="primary" @click="queryByOneObject">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="Form1" title="输入两个实体，如作者A和作者B">
      <el-form :model="form1">
        <el-form-item label="待查询实体1标签" :label-width="formLabelWidth">
          <el-select v-model="form1.type1" placeholder="请选择">
            <el-option label="Author" value="Author"></el-option>
            <el-option label="Paper" value="Paper"></el-option>
            <el-option label="Venue" value="Venue"></el-option>
            <el-option label="Affiliation" value="Affiliation"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="第一个实体">
          <el-input v-model="form1.name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="待查询实体2标签" :label-width="formLabelWidth">
          <el-select v-model="form1.type2" placeholder="请选择">
            <el-option label="Author" value="Author"></el-option>
            <el-option label="Paper" value="Paper"></el-option>
            <el-option label="Venue" value="Venue"></el-option>
            <el-option label="Affiliation" value="Affiliation"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="第二个实体">
          <el-input v-model="form1.name2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="返回结果数量限制">
          <el-input v-model="form1.limit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="关系跳数" :label-width="formLabelWidth">
          <el-select v-model="form1.step" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Form1 = false">取 消</el-button>
        <el-button type="primary" @click="queryByTwoObjects">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查询某个领域的关键信息" :visible.sync="Form2">
      <el-form :model="form2">
        <el-form-item label="请输入要查询的领域" :label-width="formLabelWidth">
          <el-input v-model="form2.field" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="关键点选择" :label-width="formLabelWidth">
          <el-select v-model="form2.choose" placeholder="请选择关键点">
            <el-option label="作者和单位" value="1"></el-option>
            <el-option label="期刊/会议" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="返回结果数量限制">
          <el-input v-model="form2.limit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Form2 = false">取 消</el-button>
        <el-button type="primary" @click="queryByFieldAndChoose">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>
<script>

export default {
  name: "navBar",
  data() {
    return {
      Form0: false,
      form0: {
        type: '',
        name: '',
        limit: '',
        step:""
      },
      Form1: false,
      form1: {
        type1: '',
        type2: '',
        name1: '',
        name2: '',
        limit: '',
        step: '',
      },
      Form2: false,
      form2: {
        field: '',
        choose: '',
        limit:''
      },
      formLabelWidth: '150px'
    }
  },
  methods: {

    myPush(data){
      this.$router.push(
        data
      )
    },
    async urlTransform(url,params){
      let vm = this
      await this.$axios.post(url,
        params).then(function (response) {
        //获取返回数据
        if(response.data.code===200){
          // console.log(response.data.data)
         vm.myPush(
            {
              name: 'test',
              params: {
                value: {
                  "nodes": response.data.data.nodes,
                  "links": response.data.data.links
                }
              }
            }
          )
        }
        else {
          console.log('sadadada')
          this.$data.Form0=false
          this.$message({
            type: 'warning',
            message: '出现错误'
          })
        }
      })
    },
    queryByOneObject() {
      console.log('访问后端')
      //传递的对象参数设置
      let params = {}
      params.name = this.$data.form0.name
      params.type = this.$data.form0.type
      params.limit = this.$data.form0.limit
      params.step = this.$data.form0.step
      console.log('params', params)
      //发送请求到后端
      this.urlTransform('http://localhost:8008/api/neo4j/queryByOneNode',params)
    },
    queryByTwoObjects() {
      console.log('访问后端')
      //传递的对象参数设置
      let params = {}
      params.name1 = this.$data.form1.name1
      params.type1 = this.$data.form1.type1
      params.name2 = this.$data.form1.name2
      params.type2 = this.$data.form1.type2
      params.limit = this.$data.form1.limit
      params.step = this.$data.form1.step
      console.log('params', params)
      //发送请求到后端
      this.urlTransform('http://localhost:8008/api/neo4j/queryByTwoNode',params)
    },
    queryByFieldAndChoose() {
      console.log('访问后端')
      //传递的对象参数设置
      let params = {}
      params.field = this.$data.form2.field
      params.choose = this.$data.form2.choose
      params.limit = this.$data.form2.limit
      console.log('params', params)
      //发送请求到后端
      if(params.choose==="1"){
        this.urlTransform('http://localhost:8008/api/neo4j/criticalAuthorAndUnit',params)
      }
      else{
        this.urlTransform('http://localhost:8008/api/neo4j/criticalPaper',params)
      }
    },
    checkFormData(){
      console.log(this.$data.form2)
    }
  }
}
</script>

<style scoped>
</style>
