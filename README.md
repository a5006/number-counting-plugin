# number-counting-plugin
number counting plugin build by origin javascript
一个看起来不是很有用的数字显示插件

![image](https://github.com/a5006/number-counting-plugin/blob/master/image/show.gif)

## 使用 

```shell
npm install -S numComp

```


```javascript

    var demo = new NumComp({
        num: 125432242,//需要显示的数字
        size:200,//显示的数字大小
        elem: ".container",//需要放在哪个容器
        count:400,//累加变化速度
      })
```

