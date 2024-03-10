# Vue

## 基本介绍

1. Vue(读音类似于view)是一个前端框架，易于构建用户界面
2. Vue的核心库**只关注视图层**，易于上手，还便于与第三方库或项目整合
3. `Vue`是`Vue.js`的简称

## MVVM

- ![img.png](img.png)
- M(Model)：模型，包括数据和一些基本操作
- V(View视图)：页面渲染结果
- VM(View-Model)，模型与视图间的**双向操作**(无需开发人员干涉)
- 在MVVM之前，开发人员从后端获取需要的数据模型，然后要通过DOM操作Model渲染到View中。而后当用户操作视图时，
  还需要通过DOM获取View中的数据，然后同步到Model中
- 而MVVM中的VM要做的事情就是**把DOM操作完全封装起来**，开发人员不用再关心Model和View之间是如何相互影响的
- 只要Model发生了改变，View上自然就会表现出来，当用户修改View，Model中的数据也会跟着改变

## 快速入门

- ![Vue数据绑定机制/MVVM](img_1.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue快速入门</title>
</head>
<body>
    <div id="app">
        <!--
        1. {{message}}：插值表达式
        2. message：就是从model的data数据池中设置
        3. 当代码执行时，会到data{}数据池中去匹配数据，如果匹配上，就进行替换，
            如果没有匹配上，就会输出空
        -->
        <h1>欢迎你{{message}}--{{name}}</h1>
    </div>
<!--引入vue.js-->
<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript">
    // 创建Vue对象
    /**
     * 1. 创建Vue对象实例
     * 2. 在控制台输出vm对象，看看该对象的结构(data/listener)
     */
    let vm = new Vue({
        el: "#app",     // 创建的Vue实例挂到 id="app" 的div
        data: {         // data{} 表示数据池(model有了数据)，有很多数据，以k-v形式设置(根据业务需求来设置)
            message: "Hello Vue!",
            name: "Charlie"
        }
    });
    console.log("vm=>", vm);
    console.log("vm._data=>", vm._data);    // 该对象是对 data{}的封装
    console.log("vm.name=>", vm.name);      // 也可以直接取出 data{} 中的数据
    console.log("vm.message=>", vm.message);
</script>
</body>
</html>
```

### 注意事项和使用细节

1. 注意**代码的顺序，要求div再前，script在后，否则无法绑定数据**。因为代码执行是从上到下的，先有id="app"的div标签，
    然后才可以绑定到它。如果顺序反了，会报错 `[Vue warn]: Cannot find element: #app`
2. 从案例可以体会声明式渲染：Vue.js采用简洁的模板语法来声明式地将数据渲染进DOM的系统，做到**数据和显示分离**
3. Vue没有繁琐的DOM操作，如果使用JQuery，需要先找到div节点，获取到DOM对象，然后进行节点操作。相比之下，显然Vue更加简洁。

## 数据单向渲染

1. `v-bind`指令可以完成基本数据渲染/绑定
2. `v-bind`简写形式就是一个冒号 `:`

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>单向数据渲染</title>
</head>
<body>
<div id="app">
    <h1>{{message}}</h1>
    <!--
    1. 使用插值表达式{{}}引用data数据池数据是在标签体内的
    2. 如果是在标签/元素的属性上引用data数据池数据时，不能使用插值表达式
    3. 需要使用 v-bind。默认会报红，因为v-bind是Vue来解析的，需要引入命名空间 xmlns:v-bind
    4. v-bind简写形式就是一个冒号 `:`
    -->
    <img v-bind:src="img_src" v-bind:src="img_width"/>
    <img :src="img_src" :src="img_width"/>
</div>

<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript">
    let vm = new Vue({
        el: "#app",     // 创建的Vue实例挂到 id="app" 的div
        data: {         // data{} 表示数据池(model有了数据)，有很多数据，以k-v形式设置(根据业务需求来设置)
            message: "Hello 黄袍怪!",
            img_src: "ikun.png",
            img_width: "200px"
        }
    });
    console.log("vm=>", vm);
</script>
</body>
</html>
```

### 注意事项和使用细节

1. **插值表达式**是用在**标签体**的，如 `<h1>{{message}}</h1>`
2. 如果给**标签属性**绑定值，则使用 `v-bind` 指令

## 数据双向绑定

- `v-model`可以完成**双向数据绑定**
- ![img_2.png](img_2.png)
- [练习题](04_homework.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>双向数据渲染</title>
</head>
<body>
<div id="app">
    <h1>{{message}}</h1>
    <!--
    1. v-bind是数据单向绑定：data数据池绑定的数据变化，会影响到view
    2.v-model="hobby.val" 是数据的双向渲染
        1) data数据池绑定的数据变化，会影响到view  【底层机制：Data Bindings】
        2) view关联的元素值变化，会影响到data数据池的数据  【底层机制：Dom Listeners】
    -->
    <input type="text" v-model="hobby.val"><br/>
    <input type="text" :value="hobby.val"><br/>
    <p>你输入的爱好是：{{hobby.val}}</p>
</div>

<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript">
    let vm = new Vue({
        el: "#app",
        data: {
            message: "武林至尊 宝刀屠龙 号令天下 莫敢不从 倚天不出 谁与争锋",
            hobby: {
                val: "购物",
            }
        }
    })
</script>
</body>
</html>
```

## 事件绑定

1. 使用 `v-on` 进行事件处理，比如：`v-on:click`表示处理鼠标点击事件
2. 事件调用的方法定义在vue对象声明的 `methods` 节点中
3. `v-on`：事件名，可以绑定指定事件
   - ![img_3.png](img_3.png)

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>事件绑定</title>
</head>
<body>
<!--视图-->
<div id="app">
    <h1>{{message}}</h1>
    <!--
    1. v-on:click 表示给button元素绑定一个click事件
    2. sayHi() 绑定的方法，在方法池 methods 中定义
    3. 底层仍然是DOM编程
    -->
    <button v-on:click="sayHi()">点击输出1</button>
    <button v-on:click="sayOK()">点击输出2</button>
    <button>点击输出3</button>
    <button>点击输出4</button>
</div>

<!--引入vue.js-->
<script src="vue.js"></script>
<script>
    // 这里创建的vue实例，可以不去接收，也可以接收方便调试
    let vm = new Vue({
        el: "#app",     // el就是element的简写
        data: {
            message: "Hello, Vue!",
            name: "charlie"
        },
        // 1. 是一个methods属性，对应的值是对象 {}
        // 2. 在 {} 中，可以写很多的方法，可以简单地理解为是一个方法池
        methods: {
            sayHi() {
                console.log("hi, 银角大王");
            },
            sayOK() {
                console.log("Hi, 金角大王");
            }
        }
    })
</script>
</body>
</html>
```

### 注意事项和使用细节

1. 如果方法没有参数，可以省略 `()` ，需要浏览器支持
2. `v-on`指令的简写形式 `@`，需要浏览器支持
3. 可以通过元素查看可以绑定的事件
   - ![img_4.png](img_4.png)
4. [课后作业：点击增加cnt值](06_homework.html)
5. [课后作业：提示输入框内容](07_homework.html)

## 修饰符

> 在JavaScript中，所有变量都可以作为一个boolean类型进行条件判断
> - 0, null, undefined, ""(空串)都认为是 `false`

1. **修饰符(Modifiers)是以 `.` 指明的后缀，指出某个指令以特殊方式绑定**
2. 例如，`.prevent`修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`， 即**阻断事件原本的默认行为**

| **事件修饰符**                         | 功能                                      |
|-----------------------------------|-----------------------------------------|
| `.stop`                           | 阻止事件继续传播                                |
| `.prevent`                        | 阻止标签默认行为                                |
| `.capture`                        | 使用事件捕获模式，即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 |
| `.self`                           | 只当在 `event.target` 是当前元素自身时触发处理函数       |
| `.once`                           | **事件将只会触发一次**                           |
| `.passive`                        | 告诉浏览器你不想阻止事件的默认行为                       |
| **键盘事件的修饰符**                      |                                         |
| `<input v-on:keyup.13="submit">`  | 当按键为回车键(keyCode=13)时，执行submit方法         |
| **v-model的修饰符**                   |                                         |
| `<input v-model.trim="msg">`      | 自动过滤用户输入的首尾空格                           |

- ![img_5.png](img_5.png)

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue修饰符说明</title>
</head>
<body>
<div id="app">
    <h1>Vue修饰符</h1>
    <!--
    1. 修饰符用于指出一个指令应该以特殊的方式绑定
    2. v-on:submit.prevent 的 .prevent 修饰符表示组织表单提交的默认行为
    3. 执行程序员指定的方法
    4. v-model="monster.name" 在数据池中monster对象没有定义name属性，而是在这里进行了动态绑定
    -->
    <form action="http://www.baidu.com" v-on:submit.prevent="onMySubmit">
        妖怪名：<input type="text" v-model="monster.name"><br/><br/>
        <button type="submit">注册</button>
    </form>
    <p>服务器返回的数据：{{count}}</p>
    <h1>修饰符扩展案例</h1>
    <!--设置点击事件只生效一次-->
    <button v-on:click.once="onMySubmit">点击一次</button><br/>
    <!--指定为enter键的keyup-->
    <input type="text" v-on:keyup.enter="onMySubmit"><br/>
    <!--去除输入内容左右两侧的空格-->
    <input type="text" v-model.trim="count"><br/>
</div>

<script type="text/javascript" src="vue.js"></script>
<script>
    let vm = new Vue({
        el: "#app",
        data: {     // 数据池
            monster: {  // monster数据(对象)的属性，可以动态生成
            },
            count: 0
        },
        methods: {  // 方法池
            onMySubmit() {
                // null, "", undefined 都是 false
                if (this.monster.name) {
                    console.log("提交表单，name：", this.monster.name);
                    // 这里就可以根据自己的业务发出ajax请求到服务器，得到数据后，再进行数据更新
                    this.count = 666;
                } else {
                    console.log("请输入名字！");
                }
            }
        }
    })
</script>
</body>
</html>
```

## 条件渲染/控制：v-if/v-show

1. `v-if`指令用于条件性地渲染一块内容。这块内容只会在指令地表达式返回truthy值地时候被渲染。
   - ![img_6.png](img_6.png)
2. `v-show`用法大致一样，不同的是带有 `v-show` 的元素始终会被渲染并保留在DOM中。`v-show`只是简单的切换元素的CSS property(`display`)

| ![img_8.png](img_8.png) | ![img_7.png](img_7.png) |
|-------------------------|-------------------------|

> 在Vue.js中，`v-model`指令用于在表单输入元素上创建双向数据绑定。对于不同类型的表单输入数据，绑定的是不同的属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>v-if的应用实例</title>
</head>
<body>
<div id="app">
    <!--这里可以看到checkbox的属性checked-->
    <input type="checkbox" v-model="sel">是否同意条款【v-if实现】
    <!--v-if/v-else 会根据返回的值，来决定是否动态地创建对应的组件，真正地创建和销毁子组件-->
    <h1 v-if="sel">你同意条款</h1>
    <h1 v-else>你不同意条款</h1>
</div>

<script type="text/javascript" src="vue.js"></script>
<script>
    let vm = new Vue({
        el: "#app",
        data: {
            sel: false
        }
    })
</script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>v-show的应用实例</title>
</head>
<body>
<div id="app">
    <!--这里可以看到checkbox的属性checked-->
    <input type="checkbox" v-model="sel">是否同意条款【v-show实现】
    <!--v-show：不管初始条件是什么，元素总是会被渲染，并且知识对css进行切换-->
    <h1 v-show="sel">你同意条款</h1>
    <h1 v-show="!sel">你不同意条款</h1>
</div>

<script type="text/javascript" src="vue.js"></script>
<script>
    let vm = new Vue({
        el: "#app",
        data: {
            sel: false
        }
    })
</script>
</body>
</html>
```

### v-if VS v-show

1. `v-if`会确保在切换状态过程中，条件块内的事件监听器和子组件的销毁和重建，即**v-if值为false的元素不会被渲染**
2. `v-show`机制相对简单，不管初始条件是什么，元素总是会被渲染，并且**只是对CSS的属性进行切换**
3. [课后作业：根据输入的分数输出对应的级别](11_homework.html)
   - ![img_9.png](img_9.png)

## 列表渲染：v-for

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>列表渲染</title>
</head>
<body>
<div id="app">
    <h1>简单的列表渲染</h1>
    <ul>
        <!--1 2 3-->
        <li v-for="i in 3">{{i}}</li>
    </ul>
    <h1>简单的列表渲染-带索引</h1>
    <ul>
        <!--0-1 1-2 2-3-->
        <li v-for="(value, index) in 3">{{index}}-{{value}}</li>
    </ul>
    <h1>遍历数据列表</h1>
    <table width="300px" border="2px">
        <tr v-for="monster in monsters">
            <td>{{monster.id}}</td>
            <td>{{monster.name}}</td>
            <td>{{monster.age}}</td>
        </tr>
    </table>
</div>

<script type="text/javascript" src="vue.js"></script>
<script>
    new Vue({
        el: "#app",
        data: {
            items: [1, 8, 9, 5],
            monsters: [
                {id: 1, name: "牛魔王", age: 856},
                {id: 2, name: "黄风怪", age: 766},
                {id: 3, name: "青牛怪", age: 997}
            ]
        }
    })
</script>
</body>
</html>
```

- ![img_10.png](img_10.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>v-for课后作业</title>
</head>
<body>
<div id="app">
    <h1>学生成绩列表-及格学生</h1>
    <table width="360px" border="2px">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>score</th>
        </tr>
        <!--只显示及格(score>=60)的学生-->
        <tr v-for="student in students" v-if="student.score >= 60">
            <td>{{student.id}}</td>
            <td>{{student.name}}</td>
            <td>{{student.age}}</td>
            <td>{{student.score}}</td>
        </tr>
    </table>
</div>

<script type="text/javascript" src="vue.js"></script>
<script>
    new Vue({
        el: "#app",
        data: {
            students: [
                {id: 1, name: "charlie", age: 22, score: 96},
                {id: 2, name: "jack", age: 26, score: 70},
                {id: 3, name: "tom", age: 17, score: 36},
                {id: 3, name: "jerry", age: 25, score: 56},
                {id: 3, name: "leon", age: 20, score: 92}
            ]
        }
    })
</script>
</body>
</html>
```
