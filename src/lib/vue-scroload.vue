<template>
  <div class="han-load">
    <slot v-if="nomoreData" name="nomore">
      <div class="han-load-slot">{{nomoreText}}</div>
    </slot>
    <slot v-else name="load">
      <div class="han-load-slot">{{loadText}}</div>
    </slot>
  </div>
</template>

<script>
import initIntersection from './intersection-observer.js'
export default {
  name: 'vue-scroload',
  data () {
    return {
      io: null,
      container: null
    }
  },
  props: {
    loadText: {
      type: String,
      default: 'Loading...'
    },
    nomoreText: {
      type: String,
      default: 'No More Data'
    },
    nomoreData: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
     // IntersectionObserver API 的兼容性，
    if (!window.IntersectionObserver) {
      initIntersection(window, document)
    }
    this.container = this.$el
    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.$emit('scollCallBack')
      }
    })
    this.io.observe(this.container)
    // polyfill处理
    // (window.IntersectionObserver ? Promise.resolve() : require(['intersection-observer'], () => {
    //     return Promise.resolve()
    //   })).then(() => {
    //   this.container = this.$el
    //   this.io = new IntersectionObserver(([entry]) => {
    //     if (entry.isIntersecting) {
    //       this.$emit('scollCallBack')
    //     }
    //   })
    //   this.io.observe(this.container)
    // }).catch((e)=>{
    //   console.log(e)
    // })
  }
}
</script>
<style scoped>
.han-load-slot{
  height: 50px;
  text-align:center;
  line-height:50px;
}
</style>
