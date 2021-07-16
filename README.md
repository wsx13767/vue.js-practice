# vue.js-practice

vue.js練習

[TOC]


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue script block

### data 資料儲存的位置

  ```vue
  <script>
    export default {
      data() {
  	    return {
          message: 'Hello Vue.js'
        } 
      }
    }
  </script>
  ```

### methods 定義方法

  ```vue
  <script>
    export default {
      methods: {
        sayHello() {
          alert('Hello Vue.js!');
        },
        sayHello2(msg) {
          alert(`Hello $[msg]`);
        }
      }
    }
  </script>
  ```

### computed 與資料相依，當資料有變動時，會觸發此項目

  ```vue
  <template>
    <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
      <p>{{ fullName }}</p>
      <p>{{ fullName }}</p>
      <p>{{ getFullName() }}</p>
      <p>{{ getFullName() }}</p>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          firstName: '',
          lastName: ''
        }
      },
      methods: {
        getFullName() {
          console.log('method has been called');
        }
      },
      computed: {
        fullName() {
          console.log('computed has been called');
          return `this.firstName this.lastName`;
        }
      }
    }
  </script>
  ```

  > console輸出結果如下，在data沒有變動的情況下，computed只被呼叫一次

  ```javascript
  // computed has been called
  // method has been called
  // method has been called
  ```

  ### watch 監聽

```vue
<script>
  export default {
    data() {
      return {
        message : 'text',
        person: {
          name: 'Siang',
          age: 27
        }
      }
    },
    watch: {
      // 監聽data的key值 : (新值, 舊值)
      message: function(newValue, oldValue) {
        // do something...
      },
      // 監聽某個物件裡的值
      'person.name': function(newValue, oldValue) {
        
      }
    }
  }
</script>
```

> watch 進階
>
> ```vue
> <script>
>   export default {
>     watch: {
>       message: {
>         handler(newValue, oldValue) {
>         },
>         immediate: true, //若為true，初始化時handler就會被執行一次
>         deep: false  // 若為true，則可以監聽到整個物件的變化
>       }
>     }
>   }
> </script>
> ```
>
> 

## Vue directives

### v-on: event handler
  * 可加上修飾符(event modifiers)

    ```vue
    <!-- submit事件將不會刷新頁面 -->
    <form v-on:submit.prevent="onSubmit">
      <button type="submit">Submit</button>
    </form>
    <script>
      export default {
        methods: {
          onSubmit: function() {
            alert('test');
          }
        }
      }
    </script>
    ```
    
  * 按鍵監聽(Key modifiers)
  
    ```vue
    <!-- 下方的點擊事件將會由enter按鍵觸發 -->
    <input v-on:keyup.enter="submit">
    ```

### v-bind: 屬性綁定

  * 如圖片連結、style或class

    ```vue
    <!-- 圖片連結 -->
    <src v-bind:src="imageUrl" />
    <div v-bind:class="[className1, className2]" v-bind:style="{color: colorData}"></div>
    <script>
      export default {
        data() {
          return {
            imageUrl: 'http://........',
            colorData: 'red',
            className1: 'success',
            className2: 'error'
          }
        }
      }
    </script>
    ```

    

### v-if: 條件判斷

  * 可與v-else-if、v-else搭配使用

  * 如果為false區塊直接不顯示，於源碼檢視看不到tag

  * 可用在template

    ```vue
    <template v-if="isTemplate1">
    	<p>template1</p>
    </template>
    <template v-else>
      <p>template2</p>
    </template>
    <script>
      export default {
        data() {
          return {
            isTemplate1: false
          }
        }
      }
    </script>
    ```

### v-show:條件判斷 (顯示)

  * 不可用在template

  * false為style的display改為none，可於源碼檢視中看到

    ```vue
    <p v-show="isShow">show</p>
    <script>
      export default {
        data() {
          return {
    	      isShow: false
          }
        }
      }
    </script>
    <!-- render -->
    <p style="display:none;">show</p>
    ```

    

### v-for: 迴圈

  ```vue
  <template>
    <div>
      <!-- example1 簡單的迴圈 -->
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.text }}</li>
      </ul>
      <!-- example2 加上index -->
      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="todo.id">{{ index }}: {{ todo.text }}</li>
      </ul>
      <!-- example3 使用在物件上 -->
      <ul>
        <li v-for="(key, value) in person">{{ key }}: {{ value }}</li>
      </ul>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          todos: [
            {id: 1, text: 'todo1'},
            {id: 2, text: 'todo2'}
          ],
          person: {
            name: 'Siang',
            age: 27,
            sex: 'male'
          }
        }
      }
    }
  </script>
  ```

### v-model: 雙向綁定

  * 可同步tag的value與DOM中的data數值

  ```vue
  <template>
    <div>
      <p>{{ message }}</p>
      <input type="text" v-model="message">
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          message: 'test'
        }
      }
    }
  </script>
  ```

## Lifecycle
<img src="https://vuejs.org/images/lifecycle.png" height="1500px">

* beforeCreate: vue尚未實體化，data資料還無法取得
* ceated: 已經實體化，可取得data、methods...
* beforeMount: vue實例被掛載前，$el尚未建立
* mounted: $el建立並掛載vue實例
* beforeUpdate: data已更新，但還沒顯示在畫面
* updated: data更新、畫面更新
* beforeDestroy: Vue實例被銷毀前
* destoryed: Vue實力銷毀
### 範例

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <input type="text" v-model="message">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    }
  }
</script>
```

## Vue Components 自定義元件

> 原始寫法
```vue
<template>
  <div>
    <div v-for="todo in todos">
      <span v-bind:style="{'background-color': todo.color}">{{ todo.text }}</span>
      <button v-if="todo.isRight">o</button>
      <button v-else>x</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        todos: [
          {color: 'red', text: 'test14', isRight: true} ,
          {color: 'yellow', text: 'test2', isRight: false},
          {color: 'blue', text: 'test3', isRight: true}
        ]
      };
    }
  }
</script>
```

> 改成components
```vue
<template>
  <div>
    <todo-list v-bind:todos="datas"></todo-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        datas: [
          {color: 'red', text: 'test14', isRight: true} ,
          {color: 'yellow', text: 'test2', isRight: false},
          {color: 'blue', text: 'test3', isRight: true}
        ]
      };
    }
  }
  Vue.component('todo-list', {
    props:['todos'],
    template: `
      <div>
        <div v-for="todo in todos">
          <span v-bind:style="{'background-color': todo.color}">{{ todo.text }}</span>
          <button v-if="todo.isRight">o</button>
          <button v-else>x</button>
        </div>
      </div>
    `
  });
</script>
```

### props 使用

```vue
<template>
  <div>
    <todo-list v-bind:todos="datas"></todo-list>
  </div>
</template>
<script>
  // data...
  Vue.component('todo-list', {
    // props:['todos'] 可以改以下方式
    props: {
      todos: {
        type: Object,
        required: true, //是否為必要
        default: {} //預設值
      }
    }
    // template...
  });
</script>
```

### $emit使用，將參數傳至父層，使用父層方法做刪除

```vue
<template>
  <div>
    <ol>
      <todo-list v-for="todo in todos" :key="todo.id" :todo="todo" @delete-click="deleteLi"></todo-list>
    </ol>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        todos: [
          {id: 1, text: 'test1'},
          {id: 2, text: 'test2'},
          {id: 3, text: 'test3'},
          {id: 4, text: 'test4'},
          {id: 5, text: 'test5'}
        ]
      }
    },
    methods: {
      deleteLi(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    }
  }
  Vue.component('todo-list', {
    props: ['todo'],
    template: `
      <li>
        {{ todo.text }} <button @click="deleteTodo">x</button>
      </li>
    `,
    methods: {
      deleteTodo() {
        this.$emit('delete-click', this.todo.id)
      }
    }
  });
</script>
```

### slot使用

```vue
<template>
  <div>
    <post>
      <template #title>
        <h1>Title</h1>
      </template>
      <template #body>
        Body
      </template>
      <div>Hello</div>
    </post>
  </div>
</template>
<script>
  export default {
    
  }
  Vue.component("post", {
    template: `
      <div>
        <slot name="title"></slot>
        <slot name="body"></slot>
        <slot></slot>
      </div>
    `
  })
</script>
```

## Vue cli

### 資料目錄

```bash
Vue.js-practice
|  |  babel.config.js   # Babel設定
|  |  package.json      # 依賴設定，專案需安裝的套件版本號、資訊，有點像maven的pom.xml
|  |  .gitignore        # github設定檔
|  +-- node_modules     # 專案所需的套件目錄，類似lib
|  +-- public           # 裡面包含專案啟用的html檔案，為Vue最終綁定的對象
|  +-- src              # 自己撰寫Vue程式皆放在這包含圖片等
|      | App.vue        # 專案的進入點
```

### EventBus - 父層定義event handler傳入各個子層





