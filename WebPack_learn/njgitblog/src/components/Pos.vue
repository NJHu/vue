<template>
  <div class="pos-wrapper">
    <div>
      <el-row id="order-list">
        <el-col :span='7' id="el-col-order">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width: 100%">

                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total-div">
                <small>数量</small>: {{totalCount}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <small>总价</small>: {{totalMoney}}
              </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17" id="el-col-product">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" v-bind:key="goods.goodsId" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" v-bind:key="goods.goodsId" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" v-bind:key="goods.goodsId" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" v-bind:key="goods.goodsId" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li v-for="goods in type3Goods" v-bind:key="goods.goodsId" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>

            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pos',
  data () {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: 18
        }, {
          goodsId: 2,
          goodsName: '田园鸡腿堡',
          price: 15
        }, {
          goodsId: 3,
          goodsName: '和风汉堡',
          price: 15
        }, {
          goodsId: 4,
          goodsName: '快乐全家桶',
          price: 80
        }, {
          goodsId: 5,
          goodsName: '脆皮炸鸡腿',
          price: 10
        }, {
          goodsId: 6,
          goodsName: '魔法鸡块',
          price: 20
        }, {
          goodsId: 7,
          goodsName: '可乐大杯',
          price: 10
        }, {
          goodsId: 8,
          goodsName: '雪顶咖啡',
          price: 18
        }, {
          goodsId: 9,
          goodsName: '大块鸡米花',
          price: 15
        }, {
          goodsId: 20,
          goodsName: '香脆鸡柳',
          price: 17
        }

      ],
      type0Goods: [
        {
          goodsId: 1,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
          goodsName: '香辣鸡腿堡',
          price: 18
        }, {
          goodsId: 2,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '田园鸡腿堡',
          price: 15
        }, {
          goodsId: 3,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
          goodsName: '和风汉堡',
          price: 15
        }, {
          goodsId: 4,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '快乐全家桶',
          price: 80
        }, {
          goodsId: 5,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '脆皮炸鸡腿',
          price: 10
        }, {
          goodsId: 6,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
          goodsName: '魔法鸡块',
          price: 20
        }, {
          goodsId: 7,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
          goodsName: '可乐大杯',
          price: 10
        }, {
          goodsId: 8,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '雪顶咖啡',
          price: 18
        }, {
          goodsId: 9,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '大块鸡米花',
          price: 15
        }, {
          goodsId: 20,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '香脆鸡柳',
          price: 17
        }

      ],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/NJHu/njhu.github.io/master/files/oftengoods.json')
      .then(response => {
        console.log(response)
        this.oftenGoods = response.data
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问, 跨域访问, 浏览器需要设置')
      })
    // 读取分类商品列表
    axios.get('https://raw.githubusercontent.com/NJHu/njhu.github.io/master/files/typegoods.json')
      .then(response => {
        console.log(response)
        this.type0Goods = response.data[0]
        this.type1Goods = response.data[1]
        this.type2Goods = response.data[2]
        this.type3Goods = response.data[3]
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问, 跨域访问, 浏览器需要设置')
      })
  },
  mounted: function () {
    var orderHeight = document.body.clientHeight
    //    document.getElementById('order-list').style.height = orderHeight + 'px'
    console.log(orderHeight)
  },
  methods: {
    // 添加订单列表的方法
    addOrderList (goods) {
      let isHave = false
      // 判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId)
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true // 存在
          break
        }
      }
      // 根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        // 存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
        arr[0].count++
        // console.log(arr)
      } else {
        // 不存在就推入数组
        let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1}
        this.tableData.push(newGoods)
      }
      // 进行数量和价格的汇总计算
      this.getAllMoney()
    },
    // 删除单个商品
    delSingleGoods (goods) {
      console.log(goods)
      // this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      // 存在就进行数量添加
      let arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
      arr[0].count--
      if (arr[0].count === 0) {
        this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      }
      // 进行数量和价格的汇总计算
      this.getAllMoney()
    },
    // 汇总数量和金额
    getAllMoney () {
      this.totalCount = 0
      this.totalMoney = 0
      if (this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count
          this.totalMoney = this.totalMoney + (element.price * element.count)
        })
      }
    },
    // 删除所有商品
    delAllGoods () {
      this.tableData = []
      this.totalCount = 0
      this.totalMoney = 0
    },
    checkout () {
      if (this.totalCount !== 0) {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        })
      } else {
        this.$message.error('不能空结。老板了解你急切的心情！')
      }
    }
  }
}
</script>
<style lang="less">
  .pos-wrapper {
    #el-col-order {
      /*background-color: red;*/
      .total-div {
        font-size: 20px;
        height: 50px;
        background-color: greenyellow;
        text-align: center;
        vertical-align: middle;
        line-height: 50px;
        margin-bottom: 10px;
      }
      .div-btn {
        text-align: center;
        padding: 10px;
      }
    }
    #el-col-product {
      /*background-color: greenyellow;*/
      .often-goods {
        .title {
          height: 20px;
          border-bottom: 1px solid #D3DCE6;
          background-color: #F9FAFC;
          padding: 10px;
        }
        .often-goods-list {
          background-color: yellow;
          display: table;
          ul {
            li {
              /*display: inline-block;*/
              float: left;
              list-style: none;
              border: 1px solid #E5E9F2;
              padding: 10px;
              margin: 5px;
              background-color: #fff;
              .o-price {
                color: #58B7FF;
              }
            }
          }
        }
      }
      .goods-type {
        .cookList {
          li {
            list-style: none;
            width: 23%;
            border: 1px solid #E5E9F2;
            height: auot;
            overflow: hidden;
            background-color: #fff;
            padding: 2px;
            float: left;
            margin: 2px;
            span {
              display: block;
              float: left;
            }
            .foodImg {
              width: 40%;
            }
            .foodName {
              font-size: 18px;
              padding-left: 10px;
              color: brown;
            }
            .foodPrice {
              font-size: 16px;
              padding-left: 10px;
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
</style>
