<template>
<div>
  <div class="left-toolbar">
    <ul id="left-tool-btns">
      <li method="zoomOut" title="放大" type="zoom"><i class="fa fa-plus-circle"></i></li>
      <li method="zoomIn" title="缩小" type="zoom"><i class="fa fa-minus-circle"></i></li>
      <li method="zoom1" title="1:1" type="zoom"><i class="fa fa-arrows-h"></i></li>
      <li method="auto" title="居中" class="end" type="zoom"><i class="fa fa-support"></i></li>
      <li method="zoomOut" title="坐标放大" type="coordi"><i class="fa fa-search-plus"></i></li>
      <li method="zoomIn" title="坐标缩小" type="coordi"><i class="fa fa-search-minus"></i></li>
      <li method="east" title="顺时针旋转" type="coordi"><i class="fa  fa-undo"></i></li>
      <li method="west" title="逆时针旋转" class="end" type="coordi"><i class="fa fa-repeat"></i></li>
      <li method="normal" title="正常模式" class="" type="mode"><i class="fa fa-mouse-pointer"></i></li>
      <li method="select" title="框选模式" class="" type="mode"><i class="fa fa-crop"></i></li>
      <li method="drag" title="拖拽模式" class="end active" type="mode"><i class="fa fa-arrows"></i></li>
      <li method="saveImage" title="保存图片" type="saveImage"><i class="fa fa-save"></i></li>
      <li method="eyeview" title="缩略图" type="eyeview"><i class="fa fa-eye"></i></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "sideBar"
}
</script>

<style scoped>

</style>
