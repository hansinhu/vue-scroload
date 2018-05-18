# HtmlStrRep for html string repalce with keywords
### HtmlStrRep install
```bash
  npm install vue-scroload --save
```
### HtmlStrRep for ES6
```js

  import ScroLoad from 'vue-scroload'

  <!-- examples: -->
  <ScroLoad
    @scollCallBack="loadList"
    :nomoreText="'没有更多数据了'"
    :nomoreData="nomore"
    :loadText="'加载中...'">
    <!-- you can add slot for loadText name:load -->
    <!-- you can add slot for nomoreText name:nomore -->
  </ScroLoad>

  methods: {
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

```
### update: 
  ```js
  npm login
  // 用户名:hansin
  // 密码:****
  // 邮箱:hansincn@gmail.com 
  npm version patch 
  npm publish
  ```
