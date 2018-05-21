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
    // this.container = this.$el
    // this.io = new IntersectionObserver(([entry]) => {
    //   console.log(entry, entry.isIntersecting)
    //   if (entry.isIntersecting) {
    //     this.$emit('scollCallBack')
    //   }
    // })
    // this.io.observe(this.container)
    // IntersectionObserver API 的兼容性，polyfill处理
    // let a = require('intersection-observer').default()
    // console.log(a)
    (window.IntersectionObserver ? Promise.resolve() : require(['intersection-observer'], () => {
        return Promise.resolve()
      })).then(() => {
      this.container = this.$el
      this.io = new IntersectionObserver(([entry]) => {
        // console.log(entry, entry.isIntersecting)
        if (entry.isIntersecting) {
          this.$emit('scollCallBack')
        }
      })
      this.io.observe(this.container)
    }).catch((e)=>{
      console.log(e)
    })
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
