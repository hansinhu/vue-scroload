<template>
  <div id="app" class="contaner">
    <div v-for="(n, i) in imgList" :key="i" :style="{backgroundColor: bgColor()}" class="load-item">{{i + '-' + n}}</div>
    <vue-scroload
      @scollCallBack="loadList"
      :nomoreText="'没有更多数据了'"
      :nomoreData="nomore"
      :loadText="'加载中...'">
      <!-- you can add slot for loadText name:load -->
      <!-- you can add slot for nomoreText name:nomore -->
    </vue-scroload>
  </div>
</template>

<script>
import scroload from '../dist/scroload.js' // 测试编译后的文件
// import Vue from 'vue'
// Vue.use(scroload)
// import scroload from './lib/vue-scroload' // 开发文件
// import scroload from './lib/index.js' // 开发文件
export default {
  name: 'app',
  data () {
    return {
      imgList: [1, 2, 3, 4, 5, 6],
      nomore: false
    }
  },
  components: {
    'vue-scroload': scroload
  },
  mounted () {
    console.log('-------')
    console.log(scroload)
  },
  methods: {
    bgColor () {
      return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    },
    loadList () {
      console.log('00000')
      setTimeout(() => {
        if (this.imgList.length < 30) {
          this.imgList = this.imgList.concat([1, 2, 3, 4, 5, 6])
        } else {
          this.nomore = true
        }
      }, 1000)
    }
  }
}
</script>
<style scoped>
.contaner{
  height: 500px;
  overflow: auto;
}
.load-item{
  height: 80px;
  line-height: 80px;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
