<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item @click="queryByOneObject">输入一个实体</b-nav-item>
          <b-nav-item @click="Form1 = true">输入两个实体</b-nav-item>
          <b-nav-item @click="Form2 = true">查询某个领域的关键</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <el-dialog :visible.sync="Form1" title="输入两个实体，如作者A和作者B">
      <el-form :model="form1">
        <el-form-item :label-width="formLabelWidth" label="第一个实体">
          <el-input v-model="form1.objectA" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="第二个实体">
          <el-input v-model="form1.objectB" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Form1 = false">取 消</el-button>
        <el-button type="primary" @click="Form1 = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查询某个领域的关键" :visible.sync="Form2">
      <el-form :model="form2">
        <el-form-item label="请输入要查询的领域" :label-width="formLabelWidth">
          <el-input v-model="form2.field" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="关键点选择" :label-width="formLabelWidth">
          <el-select v-model="form2.region" placeholder="请选择关键点">
            <el-option label="作者" value="shanghai"></el-option>
            <el-option label=“单位 value="beijing"></el-option>
            <el-option label=“期刊/会议 value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Form2 = false">取 消</el-button>
        <el-button type="primary" @click="Form2 = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      Form1: false,
      form1: {
        objectA: '',
        objectB: '',
      },
      Form2: false,
      form2: {
        field: '',
        choose: '',
      },
      formLabelWidth: '150px'
    }
  },
  methods: {
    queryByOneObject() {
      this.$prompt('请输入一个实体,如某作者A或研究主题词A', '查询输入框', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '输入格式不正确'
      }).then(({value}) => {
        console.log('访问后端')
        // //传递的对象参数设置
        // let params = {};
        // params.name="sadasda";
        // params.age="saadadadasda";
        // console.log('params',params)
        // //发送请求到后端
        // let data=this.$axios.post('http://localhost:8080/api/neo4j/queryByOneNode',
        //   {
        //   data:params//传输的数据
        // }).then(function(response) {
        //   //获取返回数据
        //   console.log("data:"+response.data);
        //
        // }.bind(this)).catch(function (error) {
        //   console.log(error);
        // })
        this.$router.push(
          {
            name: 'test',
            params: {
              value:  {
                "nodes": [
                  {
                    "imgURL": "www.Paper.com",
                    "id": 2212905,
                    "label": [
                      "Paper"
                    ],
                    "properties": {
                      "year": 1984,
                      "index": 19,
                      "title": "On storage media with after effects"
                    }
                  },
                  {
                    "imgURL": "www.Author.com",
                    "id": 101264,
                    "label": [
                      "Author"
                    ],
                    "properties": {
                      "hi": 2,
                      "pc": 21,
                      "interest": ",worst case estimation,information theory,binary symmetric channel,conditional expectation,distortion function,noisy channel,chromatic number problem,general problem,max problem",
                      "name": "H. S. Witsenhausen",
                      "pi": 9.6667,
                      "index": 111844,
                      "cn": 17,
                      "upi": 7.2222
                    }
                  }
                ],
                "links": [
                  {
                    "imgURL": "www.constant.com",
                    "id": 10576083,
                    "label": [],
                    "source": 101264,
                    "type": "WRITE",
                    "properties": {},
                    "target": 2212905
                  },
                  {
                    "imgURL": "www.constant.com",
                    "id": 7635894,
                    "label": [],
                    "source": 101264,
                    "type": "COOPERATION",
                    "properties": {
                      "count": 2
                    },
                    "target": 1231202
                  },
                  {
                    "imgURL": "www.constant.com",
                    "id": 7635895,
                    "label": [],
                    "source": 1231202,
                    "type": "COOPERATION",
                    "properties": {
                      "count": 2
                    },
                    "target": 101264
                  },
                  {
                    "imgURL": "www.constant.com",
                    "id": 12630928,
                    "label": [],
                    "source": 1231202,
                    "type": "PARTICIPATE_IN",
                    "properties": {},
                    "target": 2212905
                  }
                ]
              }
            }
          }
        )
        console.log('访问后端结束')
        this.$message({
          type: 'success',
          message: '您已成功提交！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>

<style scoped>
</style>
