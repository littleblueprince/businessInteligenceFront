<template>
  <div class="right-side">

    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1" title="布局算法">
          <div id="layout-panel"></div>
          <div class="params-warp">
            <table id="layout-params" class="small-table">
            </table>
          </div>
          <div style="margin-top:5px;text-align: center;">
            <button id="runLayotBtn" class="btn btn-sm btn-success" style="width:130px;" type="button">
              <i class="fa fa-play"></i>&nbsp;运行布局
            </button>
            <button id="layoutParam-reset" class="btn btn-sm btn-info" style="width:80px;" type="button">
              <i class="fa fa-gear"></i>&nbsp;应用
            </button>
          </div>
          <div class="tiptext">
            注：选择对应布局算法后，可以【运行布局】对图数据进行可视化视觉调整，当布局效果达到预期时，可以【停止布局】进行其他操作。
            在布局过程中，还可以修改算法参数，点击【应用】以实时调整可视化效果。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" title="聚类算法">
          <div id="cluster-panel"></div>
          <div class="params-warp">
            <table id="cluster-params" class="small-table">
              <tr>
                <td>聚类效果</td>
                <td>
                  <select id="cluster-effect" class="small-selector param">
                    <option value="1">仅颜色区分</option>
                    <option value="2">颜色+区域</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>区域重叠</td>
                <td>
                  <select id="cluster-avoidlap" class="small-selector param">
                    <option value="true">允许</option>
                    <option value="false">不允许</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <div class="longbtn">
            <button id="clusterBtn" class="btn btn-sm btn-success" style="width: 100%;;" type="button">
              <i class="fa fa-play"></i>&nbsp;应用聚类算法
            </button>
          </div>
          <div class="tiptext">
            注：聚类算法提供两种效果，仅颜色区分不同群组，颜色加圆形区域，使用区域区分时可以设置群组区域不重叠。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3" title="显示设置">
          <table id="cluster-params" class="small-table">
            <tr>
              <td>节点形状</td>
              <td>
                <select id="node-shape" class="small-selector param">
                  <option value="circle">圆形</option>
                  <option value="rect">正方形</option>
                  <option value="ellipse">椭圆</option>
                  <option value="triangle">三角形</option>
                  <option value="star">五角星</option>
                  <option value="polygon">六边形</option>
                  <option value="text">文字</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>节点标签</td>
              <td>
                <select id="node-label" class="small-selector param">
                  <option value="false">不显示</option>
                  <option value="true">显示</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>标签包裹</td>
              <td>
                <select id="node-label-wrap" class="small-selector param">
                  <option value="false">否</option>
                  <option value="true">是</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>标签位置</td>
              <td>
                <select id="node-label-pos" class="small-selector param">
                  <option value="Bottom_Center">底部</option>
                  <option value="Middle_Center">居中</option>
                  <option value="Top_Center">顶部</option>
                  <option value="Middle_Right">右边</option>
                  <option value="Middle_Left">左边</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>连线类型</td>
              <td>
                <select id="link-type" class="small-selector param">
                  <option value="direct">直线</option>
                  <option value="curver">曲线</option>
                  <option value="vdirect">直虚线</option>
                  <option value="vcurver">曲虚线</option>
                  <option value="vlink">纵向折线</option>
                  <option value="hlink">横向折线</option>
                  <option value="vbezier">纵向曲线</option>
                  <option value="hbezier">横向曲线</option>
                  <option value="bezier">贝塞尔曲线</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>连线样式</td>
              <td>
                <select id="link-dashed" class="small-selector param">
                  <option value="false">实线</option>
                  <option value="true">虚线</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>连线标签</td>
              <td>
                <select id="link-label" class="small-selector param">
                  <option value="true">显示</option>
                  <option value="false">不显示</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>连线箭头</td>
              <td>
                <select id="link-arrow" class="small-selector param">
                  <option value="true">显示</option>
                  <option value="false">不显示</option>
                </select>
              </td>
            </tr>
          </table>
        </el-collapse-item>
        <el-collapse-item name="4" title="动态数据演示">
          <div class="params-warp">
            <table id="demo-datas" class="small-table">
              <tr>
                <td>父节点数</td>
                <td>
                  <select id="nodeCount" class="small-selector param">
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>子节点数</td>
                <td>
                  <select id="childCount" class="small-selector param">
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <div class="longbtn">
            <button id="interactiveBtn" class="btn btn-sm btn-success" style="width: 100%;;" type="button">
              <i class="fa fa-play"></i>&nbsp;生成图数据
            </button>
          </div>
          <div class="tiptext">
            注：随机生成指定的节点和关系，可以双击节点进行数据查询，动态追加数据并布局
          </div>
        </el-collapse-item>
        <el-collapse-item name="5" title="常用操作演示">
          <div class="params-warp">
            <table id="demo-datas" class="small-table">
              <tr>
                <td>添加连线</td>
                <td>
                  <a id="addLink" href="javascript:">开始添加</a>
                </td>
              </tr>

              <tr>
                <td>删除选中节点</td>
                <td>
                  <a id="delnode" href="javascript:">删除</a>
                </td>
              </tr>

              <tr>
                <td>删除选中连线</td>
                <td>
                  <a id="dellink" href="javascript:">删除</a>
                </td>
              </tr>

              <tr>
                <td>节点操作</td>
                <td>
                  <select id="nodeopts" class="small-selector param">
                    <option value="">--请选择--</option>
                    <option value="selectAll">全选</option>
                    <option value="reverseSelect">反选</option>
                    <option value="showSelected">显示选中</option>
                    <option value="hideSelected">隐藏选中</option>
                    <option value="showNodes">显示全部</option>
                    <option value="delSelect">删除选中</option>
                    <option value="selectRelate">选中关联</option>
                    <option value="hideIsolatedNodes">隐藏孤立点</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>连线操作</td>
                <td>
                  <select id="linkopts" class="small-selector param">
                    <option value="">--请选择--</option>
                    <option value="showAllLink">显示连线</option>
                    <option value="hideAllLink">隐藏连线</option>
                  </select>
                </td>
              </tr>

            </table>
          </div>
        </el-collapse-item>
        <el-collapse-item name="6" title="查找节点">
          <div class="input-group">
            <input id="nodeName" class="form-control input-md" type="text">
            <span id="searchNode" class="input-group-addon btn btn-success">搜索</span>
          </div>
          <div>
            <textarea id="nodeInfo"></textarea>
          </div>
        </el-collapse-item>

      </el-collapse>
    </div>

  </div>

</template>

<script>
import {rightBarRun} from "../assets/js/drawFunction";

export default {
  name: "rightBar",
  data() {
    return {
      activeName: '0'
    }
  },
  mounted() {
    rightBarRun()
  },
}
</script>

<style scoped>

</style>
