<template>
  <div class="left-nav-wrapper">
    <ul>
      <li>
        <i class="iconfont icon-liebiao"></i>
        <div>收银</div>
      </li>

      <li>
        <i class="icon iconfont icon-xiai"></i>
        <div>店铺</div>
      </li>

      <li>
        <i class="icon iconfont icon-gouwucheman"></i>
        <div>商品</div>
      </li>

      <li>
        <i class="icon iconfont icon-xiai"></i>
        <div>会员</div>
      </li>

      <li>
        <i class="icon iconfont icon-chongzhi"></i>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left-nav',
  data () {
    return {
      msg: 'left-nav'
    }
  },
  mounted: function () {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .left-nav-wrapper {
    float: left;
    color:#fff;
    font-size:10px;
    height:100%;
    background-color: #1D8ce0;
    float:left;
    width:5%;
    .iconfont{
      font-size:24px;
    }
     ul{
      padding:0px;
      margin: 0px;
       li{
         list-style: none;
         text-align: center;
         border-bottom:1px solid #20a0ff;
         padding:10px;
       }
    }

  }
</style>
