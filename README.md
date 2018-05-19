# vue-scroload

> scroll load component for vue

> vue-scroload 使用IntersectionObserver做的一个下拉加载组件

> @scollCallBack: 组件滚动到底部时的回调，用于异步加载列表数据

> :loadText: <String>组件滚动到底部时显示的内容，也可以使用slot(name: load) 自定义

> :nomoreText: <String> 没有更多数据时的显示内容，也可以使用slot(name: nomore) 自定义

> :nomoreData: <Boolean> true表示没有更多数据，不再执行回调

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Doc
``` bash
# install dependencies
npm install vue-scroload --save

```
```js

// examples 1: main.js
// import scroload from './lib/index.js'
// vue.use(scroload.vueScrollLoad)

// examples 2:
<template>
  <div class="contaner">
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
import scroload from './lib/index.js'

export default {
  name: 'app',
  data () {
    return {
      imgList: [1, 2, 3, 4, 5, 6],
      nomore: false
    }
  },
  components: {
    'vue-scroload': scroload.vueScrollLoad
  },
  methods: {
    bgColor () {
      return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    },
    loadList () {
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
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
