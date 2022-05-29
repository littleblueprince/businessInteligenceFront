<!--
 * @Author: CarlYang
 * @Date: 2021-07-23 15:31:51
 * @LastEditTime: 2021-07-30 09:46:05
 * @LastEditors: Please set LastEditors
 * @Description: 关系图谱
 * @FilePath: \vue-g6\src\views\GraphVis\company.vue
-->
<template>
  <div>
  <div id="graph-panel" style="width:800px;height:600px;background-color:#efefef;"></div>
  </div>
</template>
<script>
import VisGraph from '../assets/js/visgraph.min.js'
import LayoutFactory from '../assets/js/visgraph-layout.min.js'
import config from "../assets/js/config";

export default {
  name: 'test',
  components: {
    VisGraph,
    LayoutFactory
  },
  data() {
    return {
    }
  },
  methods:{
  },
  mounted() {
    //获取数据
    var data={ nodes:[
      {id:'1',label:'博士',type:'男',properties:{age:50},
        image:'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/doctor.png'},
        {id:'2',label:'论文',type:'男',
          image:'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/paper.png'},
        {id:'3',label:'搜索',type:'男',
          image:'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/search.png'}
        ],
      links:[{source:'1',target:'2',label:'二',properties:{other:'other prop'}},
        {source:'1',target:'3',label:'三'}]}
    //设置配置
    let visGraph = new VisGraph(document.getElementById('graph-panel'),config.config);
    //绘制图
    visGraph.drawData(data);
    //3、画布元素居中
    visGraph.setZoom('auto');//自动缩放
  }}
</script>

<style scoped>
</style>
