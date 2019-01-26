
function NumComp(options) {
  function checkType(param) {
    return Object.prototype.toString.call(param)
  }
  if (checkType(options) !== '[object Object]') {
    console.error('You must put the params witch type is Object in this constructor,pleas put the Object Params like this "{num:[Number],elem:[Selector],count:[Boolean||Number](Or not ues count is also ok)}",话说你不带对象参数还new个毛啊new,键盘给你你来写好吧')
    return
  }
  if (checkType(options.num) !== '[object Number]') {
    console.error('The param "num" must be Number')
    return
  }
  if (!options.elem) {
    console.error('Can\'t not found params "elem", check if you had already put it in Object param')
    return
    if (checkType(options.elem) !== '[object String]') {
      console.error('The param "elem" must be Selector')
      return
    }
  }
  if (options.size) {
    if (checkType(options.size) !== '[object Number]') {
      console.error('The param "size" must be Number')
      return
    }
  } else {
    options.size = 100
  }
  var count = options.count ? checkType(options.count) === '[object Number]' ? options.count : checkType(options.count) === '[object Boolean]' ? 100 : console.error('The param "count" must be "Number" or "Boolean",count必须是数字或者布尔值') : ''
  var size = options.size
  var container = options.elem
  var num = options.num
  //  = options.count
  container = container.substr(0, 1) === "." ? container : "." + container
  var numArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ]
  this.setNum(num, container, numArray,size)
  count && this.count(num, container, numArray,size, count)
}
NumComp.prototype = {
  constructor: 'Numcomp',
  setCLs: function (item, cls) {
    var mycls = item.className
    var isTop = false;
    isTop = mycls.indexOf("top") > -1 ? true : false;
    item.className = ""

    if (isTop) {
      item.className = "numBox top" + " " + cls
    } else {
      item.className = "numBox bottom" + " " + cls
    }
  },
  setNum(num, container, numArray,size) {
    var container = document.querySelector(container)

    container.innerHTML = ""
    var mainBox =
      '<div class="mainBox">' +
      ' <div class="top numBox" style="width:'+
      size+"px;"+"height:"+size+"px;"
      +'"></div>' +
      '<div class="bottom numBox" style="width:'+
      size+"px;"+"height:"+size+"px;"
      +'"></div>' +
      '</div>'
    var len = num.toString().length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        //       生成
        var numItem = Number(num.toString()[i])
        container.innerHTML += mainBox
        var boxes = container.querySelectorAll(".mainBox")
        this.showNum(boxes, numArray, numItem)
      }
    }

  },
  showNum(boxes, numArray, numItem) {
    let that = this
    boxes.forEach(function (item, index) {
      if (index + 1 === boxes.length) {
        var box = item.querySelectorAll(".numBox")
        box.forEach(function (subItem) {
          that.setCLs(subItem, numArray[numItem])
        })

      }
    })
  },
  count(num, container, numArray,size, count) {
    var timer = null
    let that = this
    clearInterval(timer)
    timer = setInterval(function () {
      num++
      that.setNum(num, container, numArray,size)
    }, count)
  },
}

window.NumComp = NumComp