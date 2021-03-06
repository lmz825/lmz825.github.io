
var lmz825 = function () {
  //创建一个新数组，包含原数组中所有的非假值元素
  function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }
  //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  function chunk(array, size) {
    var res = []
    if (array.length <= 0 || size <= 0) return array
    for (i = 0; i < array.length; i = i + size) {
      res.push(array.slice(i, i + size))
    }
    return res
  }
  //创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
  function difference(array, ...values) {
    const result = new Set()
    for (let val of values) {
      for (let res of val) result.add(res)
    }
    return array.filter(res => !result.has(res))
  }
  //将 array 中的所有元素转换为由 separator 分隔的字符串。
  function join(array, separator = ',') {
    if (array.length < 0) return null
    var res = ''
    var m = String(separator)
    for (i = 0; i < array.length - 1; i++) {
      res += array[i] + m
    }
    return res + array[i]
  }
  //获取array中的最后一个元素。

  function last(array) {
    return array.reverse()[0]
  }
  //类似_.indexOf ，区别是它是从右到左遍历array的元素。
  function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (!value && !ary[i]) {
        return i;
      }
      if (ary[i] == value) {
        return i;
      }
    }
    return -1;
  }
  //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
  function reverse(array) {
    var left = 0
    var right = array.length - 1
    while (left < right) {
      var temp = array[left]
      array[left] = array[right]
      array[right] = temp
      left++
      right--
    }
    return array
  }
  //使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
  function sortedIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
    return array.length
  }
  //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  function drop(array, n = 1) {
    array.splice(0, n)
    return array
  }
  //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  function dropRight(array, n = 1) {
    for (i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  function fill(array, value, start = 0, end = array.length) {
    for (i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
  //该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。

  function findIndex(array, predicate, fromIndex = 0) {
    predicate = paint(predicate)
    for (i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }
  //工具 比较两个对象是否相同
  function DeepComparsion(obj1, obj2) {
    for (key in obj1) {
      if (typeof obj1[key] != "object" && typeof obj1[key] != "object") {
        if (obj1[key] != obj2[key]) return false;
      } else {
        if (!DeepComparsion(obj1[key], obj2[key])) return false;
      }
    }
    return true;
  }
  function hasSameAttr(obj1, obj2) {
    for (key in obj1) {
      if (typeof obj1[key] != "object" && typeof obj2[key] != "object") {
        if (key in obj2 && obj1[key] != obj2[key]) return false;
      } else {
        if (!hasSameAttr(obj1[key], obj2[key])) return false;
      }
    }
    return true;
  }
  function paintt(predicate) {
    if (Array.isArray(predicate)) {
      return (item) => item[predicate[0]] == predicate[1];
    } else if (typeof predicate == "function") {
      return predicate;
    } else if (typeof predicate == "object") {
      return hasSameAttr.bind(null, predicate);
    } else if (typeof predicate == "string") {
      return (item) => item[predicate];
    }
  }
  function paint(predicate) {
    if (Array.isArray(predicate)) {
      return (item) => item[predicate[0]] == predicate[1];
    } else if (typeof predicate == "function") {
      return predicate;
    } else if (typeof predicate == "object") {
      return DeepComparsion.bind(null, predicate);
    } else if (typeof predicate == "string") {
      return (item) => item[predicate];
    }
  }

  //减少一级array嵌套深度
  function flatten(array) {
    var result = []
    for (i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...array[i])
      } else {
        result.push(array[i])
      }
    }
    return result
  }
  //将array递归为一维数组。
  function flattenDeep(array) {
    return array.flat(Infinity)
  }
  //根据 depth 递归减少 array 的嵌套层级
  function flattenDepth(array, depth) {
    let result = []
    array.forEach(item => {
      let d = depth
      if (Array.isArray(item) && d > 0) {
        result.push(...(flattenDepth(item, --d)))
      } else {
        result.push(item)
      }
    })
    return result
  }
  //；这个方法返回一个由键值对pairs构成的对象。
  function fromPairs(pairs) {
    var result = {}
    if (pairs == null) return result
    for (var pair of pairs) {
      result[pair[0]] = pair[1]
    }
    return result
  }
  //获取数组 array 的第一个元素
  function head(array) {
    return array != null && array.length ? array[0] : undefined
  }
  //返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  function indexOf(array, value, fromIndex = 0) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    for (i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
        break
      }
    }
  }
  //获取数组array中除了最后一个元素之外的所有元素
  function initial(array) {
    return array.slice(0, array.length - 1)
  }
  //所有都返回true才会返回true，哪怕有一个false，就会返回false
  function every(collection, predicate = _.identity) {
    predicate = paint(predicate)
    var result = true
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        result = false
        break
      }
    }
    return result
  }
  //遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组
  function filter(collection, predicate = _.identity) {
    var res
    predicate = paint(predicate)
    if (Array.isArray(collection)) {
      res = [];
      if (!collection.length) {
        return null;
      } else {
        for (var i of collection) {
          if (predicate(i)) res.push(i);
        }
      }
    } else if (typeof collection === "object" && collection !== null) {
      res = {};
      if (!Object.keys(collection).length) {
        return null;
      } else {
        for (let key of Object.keys(collection)) {
          if (predicate(collection[key])) res[key] = collection[key];
        }
      }
    }
    return res;
  }
  //遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。
  function find(collection, predicate) {
    var res
    predicate = paintt(predicate)
    if (Array.isArray(collection)) {
      res = [];
      if (!collection.length) {
        return null;
      } else {
        for (var i of collection) {
          if (predicate(i)) {
            res.push(i)
            break
          }
        }
      }
    } else if (typeof collection === "object" && collection !== null) {
      res = {};
      if (!Object.keys(collection).length) {
        return null;
      } else {
        for (let key of Object.keys(collection)) {
          if (predicate(collection[key])) {
            res[key] = collection[key]
            break
          }
        }
      }
    }
    return res;
  }
  //转换 value 为一个数组。

  function toArray(value) {
    if (!value) {
      return []
    }
    if (Object.prototype.toString.call(value) === "[object Object]") {
      return Object.values(value)
    }
    return Array.from(value)
  }
  //计算 array 中的最大值
  function max(array) {
    if (array.length == 0 || array == null) return undefined
    var num = 0
    for (i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        num = array[i]
      }
    }
    return num
  }
  //
  function maxBy(array, iteratee) {
    var num = -Infinity
    var sum
    if (typeof iteratee == 'function') {
      for (var val of array) {
        if (num < iteratee(val)) {
          num = iteratee(val)
          sum = val
        }
      }
    } else {
      for (var val of array) {
        if (num < val[iteratee]) {
          num = val[iteratee]
          sum = val
        }
      }
    }
    return sum
  }
  //计算 array 中的最小值
  function min(array) {
    if (array.length == 0 || array == null) return undefined
    let ans = Infinity; //最大值
    for (let i in array) {
      ans = ans < array[i] ? ans : array[i];
    }
    return ans
  }
  //接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准
  function minBy(array, iteratee) {
    var num = Infinity
    var sum
    if (typeof iteratee == 'function') {
      for (var val of array) {
        if (num > iteratee(val)) {
          num = iteratee(val)
          sum = val
        }
      }
    } else {
      for (var val of array) {
        if (num > val[iteratee]) {
          num = val[iteratee]
          sum = val
        }
      }
    }
    return sum
  }
  //计算 array 中值的总和
  function sum(array) {
    if (array.length == 0 || array == null) return undefined
    var num = 0
    for (i = 0; i < array.length; i++) {
      num += array[i]
    }
    return num
  }
  //它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准
  function sumBy(array, iteratee) {
    var sum = 0
    if (typeof iteratee == 'function') {
      for (var val of array) {
        sum += iteratee(val)
      }
    } else {
      for (var val of array) {
        sum += val[iteratee]
      }
    }
    return sum
  }
  //创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，
  function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
      var innerArgs = Array.prototype.slice.call(arguments)
      var finalArgs = args.concat(innerArgs)
      return fn.apply(null, finalArgs)
    }
  }
  // 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数
  function differenceBy(array, ...values) {
    let f = arguments[arguments.length - 1]
    let temp = []
    let res = []
    if (typeof (f) == 'function') {
      for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values.length; j++) {
          temp.push(f(values[i][j]))
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (temp.indexOf(f(array[i])) == -1) {
          res.push(array[i])
        }
      }
      return res
    } else if (typeof (f) == 'string') {
      for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values[i].length; j++) {
          let t = values[i][j][f]
          temp.push(t)
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i][f]) == -1) {
          res.push(array[i])
        }
      }
      return res
    } else {
      return difference(array, ...values)
    }
  }
  //它是从右到左的迭代集合array中的元素
  function findLastIndex(ary, predicate, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === predicate) {
        return i;
      } else if (typeof predicate === "function" && predicate(ary[i])) {
        return i;
      } else if (
        Array.isArray(predicate) &&
        ary[i][predicate[0]] == predicate[1]
      ) {
        return i;
      } else if (
        typeof predicate === "object" &&
        DeepComparsion(ary[i], predicate)
      ) {
        return i;
      } else if (ary[i][predicate]) {
        return i;
      }
    }
    return -1;
  }
  //返回一个包含所有传入数组交集元素的新数组。
  function intersection(...arrays) {
    let arr = []
    let res = arrays[0]
    for (var i = 0; i < res.length; i++) {
      for (var j = 1; j < arrays.length; j++) {
        if (!arrays[j].includes(res[i])) {
          break
        }
        if (j == arrays.length - 1) {
          arr.push(res[i])
        }
      }
    }
    return arr
  }
  //移除数组array中所有和给定值相等的元素
  function pull(array, ...values) {
    let path = []
    for (var i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        path.push(array[i])
      }
    }
    return path
  }
  //创建一个按顺序排列的唯一值的数组
  function union(...arrays) {
    let path = []
    arrays.forEach(item => {
      item.forEach(i => {
        path.push(i)
      })
    })
    return [...new Set(path)]
  }
  //返回一个新的联合数组。
  function unionBy(...args) {
    var arr = [].concat(...args)
    var iteratee = arr.pop()
    var map = []
    var res = []
    if (typeof iteratee == 'function') {
      for (var item of arr) {
        if (!map.includes(iteratee(item))) {
          map.push(iteratee(item))
          res.push(item)
        }
      }
      return res
    }
    if (typeof iteratee == 'string') {
      for (var item of arr) {
        if (!map.includes(item[iteratee])) {
          map.push(item[iteratee])
          res.push(item)
        }
      }
      return res
    }

  }
  //创建一个去重后的array数组副本
  function uniq(array) {
    var arr = []
    for (var i of array) {
      if (arr.includes(i) == false) {
        arr.push(i)
      }
    }
    return arr
  }
  //它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准
  function uniqBy(array, iteratee) {
    var res = []
    var map = []
    if (typeof iteratee == 'string') {
      for (var item of array) {
        if (!map.includes(item[iteratee])) {
          map.push(item[iteratee])
          res.push(item)
        }
      }
      return res
    } else {
      for (var item of array) {
        if (!map.includes(iteratee(item))) {
          map.push(iteratee(item))
          res.push(item)
        }
      }
      return res
    }
  }
  //创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
  function zip(...arrs) {
    let maxlen = arrs[0].length
    let res = Array(maxlen).fill(0).map(it => Array(arrs.length));
    for (let i = 0; i < maxlen; i++) {
      for (let j = 0; j < arrs.length; j++) {
        res[i][j] = arrs[j][i];
      }
    }

    return res;
  }
  //接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构
  function unzip(arrays) {
    let l = arrays[0].length
    let newarr = new Array(l).fill(0).map(it => it = new Array(arrays.length))//新建一个可以装新对象的数组 2,3变3,2
    for (let i = 0; i < newarr.length; i++) {//最外层是行数
      for (var j = 0; j < arrays.length; j++) {
        newarr[i][j] = arrays[j][i]
      }
    }
    return newarr
  }
  //创建一个剔除所有给定值的新数组
  function without(array, ...values) {
    let arr = []
    array.forEach(it => {
      if (!values.includes(it)) {
        arr.push(it)
      }
    })
    return arr
  }
  //创建一个给定数组唯一值的数组
  function xor(...args) {
    let newArg = args.flat();
    return newArg.filter(it => newArg.indexOf(it) === newArg.lastIndexOf(it))
  }
  //创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。
  function countBy(collection, iteratee = _.identity) {
    let result = {}
    if (typeof iteratee == 'function') {
      for (let item of collection) {
        item = iteratee(item)
        result[item] = result[item] + 1 || 1
      }
    } else {
      for (let item of collection) {
        item = item[iteratee]
        result[item] = result[item] + 1 || 1
      }
    }
    return result
  }
  //创建一个扁平化（注：同阶数组）的数组
  function flatMap(collection, iteratee) {
    let res = []
    for (let item of collection) {
      res.push(iteratee(item))
    }
    return flattenDeep(res)
  }
  //调用 iteratee 遍历 collection(集合) 中的每个元素
  function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    } else {
      for (let key in collection) {
        iteratee(collection[key], key, collection)
      }
    }
    return collection
  }
  //创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果
  function groupBy(collection, iteratee) {
    var map = {}
    if (Object.prototype.toString.call(iteratee) == "[object Function]") {
      for (var item of collection) {
        var key = iteratee(item)
        if (key in map) {
          map[key].push(item)
        } else {
          map[key] = [item]
        }
      }
    }
    if (Object.prototype.toString.call(iteratee) == "[object String]") {
      for (var item of collection) {
        var key = item[iteratee]
        if (key in map) {
          map[key].push(item)
        } else {
          map[key] = [item]
        }
      }
    }
    return map
  }

  //创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。
  function keyBy(collection, iteratee) {
    return collection.reduce((obj, item) => {
      if (typeof iteratee == 'function') {
        obj[iteratee(item)] = item
      } else {
        obj[item[iteratee]] = item
      }
      return obj
    }, {})
  }
  //创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果
  function map(collection, iteratee) {
    var ary = []
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        let a = collection[i]
        if (typeof (iteratee) === "function") {
          ary.push(iteratee(a, i, collection))
        } else if (typeof (iteratee) === "string") {
          let s = iteratee.split('.')
          let b = a
          for (let j = 0; j < s.length; j++) {
            b = b[s[j]]
          }
          ary.push(b)
        }
      }
    } else if (typeof (collection) === 'object') {
      for (var key in collection) {
        if (typeof (iteratee) === 'function') {
          ary.push(iteratee(collection[key]))
        }
      }
    }
    return ary
  }
  //创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。
  function partition(collection, predicate = _.identity) {
    predicate = paintt(predicate);
    let trueArr = [];
    let falseArr = [];
    for (let val of Object.values(collection)) {
      if (predicate(val)) {
        trueArr.push(val);
      } else {
        falseArr.push(val);
      }
    }
    return [trueArr, falseArr];
  }
  //压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用
  function reduce(collection, reducer = identity, accumulator) {
    let value = Object.values(collection)
    let key = Object.keys(collection)
    if (accumulator === undefined) {
      accumulator = value.shift()
      key.shift()
    }
    for (let i = 0; i < key.length; i++) {
      accumulator = reducer(accumulator, value[i], key[i])
    }
    return accumulator
  }
  //它是从右到左遍历collection（集合）中的元素的
  function reduceRight(collection, combine, initialValue) {
    let keys = Object.keys(collection).reverse()
    for (let key of keys) {
      if (initialValue === undefined) {
        initialValue = collection[key]
      } else {
        initialValue = combine(initialValue, collection[key], key, collection);
      }
    }
    return initialValue;
  }
  //_.filter的反向方法;
  function reject(collection, predicate = _.identity) {
    var ary = []
    for (var i = 0; i < collection.length; i++) {
      var a = collection[i]
      if (typeof (predicate) == 'function') {
        if (!(predicate(a))) {
          ary.push(a)
        }
      } else if (typeof (predicate) == 'string') {
        if (!a[predicate]) {
          ary.push(a)
        }
      } else if (Array.isArray(predicate)) {
        for (var j = 0; j < predicate.length; j += 2) {
          if (a[predicate[j]] !== predicate[j + 1]) {
            ary.push(a)
            break
          }
        }
      } else if (typeof (predicate) == 'object') {
        for (var key in predicate) {
          if (a[key] !== predicate[key]) {
            ary.push(a)
            break
          }
        }
      }
    }
    return ary
  }
  //从collection（集合）中获得一个随机元素。
  function sample(collection) {
    let keys = Object.keys(collection)
    return collection[~~(Math.random() * keys.length)]
  }
  //创建一个被打乱值的集合
  function shuffle(ary) {
    return sampleSize(ary, ary.length)
  }
  //返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
  function size(collection) {
    return collection.length || Object.keys(collection).length
  }
  //some
  function some(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
      var a = collection[i]
      if (typeof (predicate) == 'function') {
        if (predicate(a)) {
          return true
        }
      } else if (typeof (predicate) == 'string') {
        if (a[predicate]) {
          return true
        }
      } else if (Array.isArray(predicate)) {
        var same = true
        for (var j = 0; j < predicate.length; j += 2) {
          if (a[predicate[j]] !== predicate[j + 1]) {
            same = false
            break
          }
        }
        if (same) {
          return true
        }
      } else if (typeof (predicate) == 'object') {
        var same = true
        for (var key in predicate) {
          if (a[key] !== predicate[key]) {
            same = false
            break
          }
        }
        if (same) {
          return true
        }
      }
    }
    return false
  }
  function mergeSort(ary, compare) {
    if (ary.length < 2) {
      return ary.slice()
    }
    var mid = ary.length >> 1
    var left = ary.slice(0, mid)
    var right = ary.slice(mid)

    mergeSort(left, compare)
    mergeSort(right, compare)

    var i = 0
    var j = 0
    var k = 0

    while (i < left.length && j < right.length) {
      if (compare(left[i]) <= compare(right[j])) {
        ary[k++] = left[i++]
      } else {
        ary[k++] = right[j++]
      }
    }
    while (i < left.length) {
      ary[k++] = left[i++]
    }
    while (j < right.length) {
      ary[k++] = right[j++]
    }
    return ary
  }
  function orderBy(collection, predicates = identity, orders) {
    var res = collection.slice()
    for (var i = predicates.length - 1; i >= 0; i--) {
      var compare = paint(predicates[i])
      mergeSort(res, compare)
      if (orders[i] == 'desc') {
        res = res.reverse()
      }
    }
    return res
  }
  //建一个元素数组。 以 iteratee 处理的结果升序排序。
  function sortBy(collection, iteratee) {
    var ary = collection.slice()
    for (var i = 0; i < iteratee.length; i++) {
      var by = iteratee[i]
      if (typeof (by) == 'function') {
        ary.sort((a, b) => {
          if (by(a) > by(b)) {
            return 1
          } else if (by(a) < by(b)) {
            return -1
          } else {
            return 0
          }
        })
      } else if (typeof (by) == 'string') {
        ary.sort((a, b) => {
          if (a[by] > b[by]) {
            return 1
          } else if (a[by] < b[by]) {
            return -1
          } else {
            return 0
          }
        })
      }
    }
    return ary
  }
  //检查 value 是否是一个类 arguments 对象。
  function isArguments(value) {
    //因为val不一定有toString方法
    //所以要用ptototype，但是又会有this问题
    //所以要再用call把this指回去
    return Object.prototype.toString.call(value) === '[object Arguments]'
  }
  //检查 value 是否是 Array 类对象。
  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
  //检查 value 是否是原始 boolean 类型或者对象。
  function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  }
  //检查 value 是否是 Date 对象。
  function isDate(value) {
    return Object.prototype.toString.call(value) === "[object Date]"
  }
  //检查 value 是否是可能是 DOM 元素。
  function isElement(value) {
    return Object.prototype.toString.call(value) === "[object HTMLElement]"
  }
  //检查 value 是否为一个空对象，集合，映射或者set。
  function isEmpty(value) {
    if (value === null) return true
    if (typeof (value) === 'object' || typeof (value) === 'string') return false
    return true
  }


  //执行深比较来确定两者的值是否相等。
  function isEqual(val, other) {
    if (val !== val && other !== other) {
      return true
    }
    if (val === other) {
      return true
    }
    if (val === null) {
      return other === null
    } else if (other === null) {
      return false
    }
    var a = typeof (val)
    var b = typeof (other)
    if (a === b) {
      if (a == 'object') {
        var c = Object.keys(val).length
        var d = Object.keys(other).length
        if (c == d) {
          for (var key in a) {
            if (a[key] !== b[key]) {
              return false
            }
          }
          return true
        }
      }
      return false
    }
  }
  //isNan
  function isNaN(val) {
    if (typeof (val) == 'object') {
      if (val.length > 1) {
        return false
      }
      val = +String(val)
    }
    return val !== val
  }
  //检查 value 是否是 Error,
  function isError(value) {
    return Object.prototype.toString.call(value) === "[object Error]"
  }
  //检查 value 是否是原始有限数值。
  function isFinite(val) {
    return Number.isFinite(val)
  }
  //检查 value 是否是 Function 对象。
  function isFunction(value) {
    return Object.prototype.toString.call(value) === "[object Function]"
  }
  //执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
  function isMatch(object, source) {
    for (var i in source) {
      return this.isEqual(object[i], source[i])
    }
  }
  //检查 value 是否是 null 或者 undefined。
  function isNil(value) {
    if (value === null || value === undefined) {
      return true
    } else {
      return false
    }
  }
  //检查 valuealue 是否是 null。
  function isNull(value) {
    return value === null
  }
  //isNumber
  function isNumber(value) {
    return typeof value === 'number';
  }
  //检查 value 是否为 Object 的language type。
  function isObject(value) {
    if (value === null) { //* 此处一定要先判断value是否为空
      return false
    }
    return value.constructor === Object || value.constructor === Function || value.constructor === Array
  }
  //检查 value 是否为RegExp对象。
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]"
  }
  //isString
  function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]"
  }
  //检查 value 是否是 undefined.
  function isUndefined(value) {
    return value === undefined
  }
  //根据 precision（精度） 向上舍入 number。
  function ceil(number, precision = 0) {
    return Math.ceil(number * 10 ** precision) / 10 ** precision
  }
  //根据 precision（精度） 四舍五入 number。
  function round(number, precision = 0) {
    if (precision > 0) {
      return Math.round(number * 10 ** precision) / 10 ** precision;
    } else if (precision < 0) {
      return Math.round(number / 10 ** (-precision)) * 10 ** (-precision);
    } else {
      return Math.round(number)
    }
  }
  //类似_.assign， 除了它会遍历并继承来源对象的属性。
  function assignIn(obj, ...sources) {
    for (var source of sources) {
      for (var i in source) {
        obj[i] = source[i]
      }
    }
    return obj
  }
  //分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。
  function defaults(obj, ...sources) {
    let path = {}
    for (var source of sources) {
      for (var i in source) {
        path[i] = source[i]
      }
    }
    for (var key in obj) {
      path[key] = obj[key]
    }
    return path
  }
  //findKey
  function findKey(object, predicate = identity) {
    predicate = paintt(predicate)
    for (let key of Object.keys(object)) {
      if (predicate(object[key])) return key;
    }
    return null;
  }
  //使用 iteratee 遍历对象的自身和继承的可枚举属性
  function forIn(obj, predicate = _.identity) {
    predicate = paint(predicate)
    for (var key in obj) {
      if (predicate(obj[key], key, obj) == false) {
        break
      }
    }
    return obj
  }
  //类似_.forIn。 除了它是反方向开始遍历object的。
  function forInRight(object, predicate = _.identity) {
    let key = []
    predicate = paint(predicate)
    for (let i in object) key.push(i)
    for (let i = key.length - 1; i >= 0; i--) {
      predicate(object[key[i]], key[i], object)
    }
    return object
  }
  //使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
  function forOwn(object, iteratee = this.identity) {
    iteratee = paint(iteratee)
    for (var i in object) {
      if (object.hasOwnProperty(i)) {
        let m = iteratee(object[i], i, object)
        if (!m) break
      }
    }
    return object
  }
  //_.forOwn。 除了它是反方向开始遍历object的。
  function forOwnRight(object, iteratee = _.identity) {
    iteratee = paint(iteratee)
    let key = Object.keys(object)
    for (var i = key.length - 1; i >= 0; i--) {
      iteratee(object[key[i]], key[i], object)
    }
    return object
  }
  //创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性。
  function functions(obj) {
    var ary = []
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof (obj[key]) == 'function') {
          ary.push(key)
        }
      }
    }
    return ary
  }
  //get是对象的属性值返回的方法
  function get(obj, path, defalse) {
    let result = obj
    if (typeof (path) === 'string') {
      path = path.split(/\[|\]\.|\]\[|\.|\]/)
    }
    for (var i = 0; i < path.length; i++) {
      if (path[i] !== '') {
        result = result[path[i]]
        if (result == undefined) {
          return defalse
        }
      }
    }
    return result
  }
  function toPath(path) {
    return Array.isArray(path) ? path : String(path).match(/\w+/g);
  };
  //检查 path 是否是object对象的直接或继承属性。
  function has(obj, path) {
    path = toPath(path)
    for (let key of path) {
      if (!obj.hasOwnProperty(key)) {
        return false
      }
      obj = obj[key]
    }
    return true
  }
  //创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
  function invert(object) {
    let map = {}
    for (var key in object) {
      map[object[key]] = key
    }
    return map
  }
  //调用object对象path上的方法。
  function invoke(object, path, ...args) {
    if (typeof path === 'string') {
      path = path.split(/\[|\.|\]\./g)
    }
    let fun = path.pop()
    for (var i = 0; i < path.length; i++) {
      object = object[path[i]]
    }
    return object[fun](...args)

  }
  //创建一个 object 的自身可枚举属性名为数组。
  function keys(obj) {
    return Object.keys(obj);
  }
  // 这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的
  function mapKeys(obj, fun) {
    let res = {}
    for (var key in obj) {
      res[fun(obj[key], key)] = obj[key]
    }
    return res
  }
  //创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。
  function mapValues(obj, func) {
    for (key in obj) {
      if (this.isString(func)) {
        obj[key] = obj[key][func];
      } else {
        obj[key] = func(obj[key], key, obj);
      }
    }
    return obj;
  }
  //合并
  function merge(object, ...sources) {
    for (var i = 0; i < sources.length; i++) {
      let a = sources[i]
      for (var key in a) {
        if (!key in object) {
          object[key] = a[key]
        } else {
          var b = object[key]
          var c = a[key]
          if (typeof (b) == 'object' && (Array.isArray(b) && Array.isArray(c)) || (!Array.isArray(b) && !Array.isArray(c))) {
            this.merge(b, c)
          } else {
            b = c
          }
        }
      }
    }
    return object
  }
  //反向版_.pick;
  function omit(object, props) {
    let map = {}
    for (var i in object) {
      if (!props.includes(i)) {
        map[i] = object[i]
      }
    }
    return map
  }
  //pick
  function pick(object, props) {
    let map = {}
    for (var i in object) {
      if (props.includes(i)) {
        map[i] = object[i]
      }
    }
    return map
  }
  //这个方法类似_.get， 除了如果解析到的值是一个函数的话，就绑定 this 到这个函数并返回执行后的结果。
  function result(object, path, defaultValue) {
    let value = get(object, path, defaultValue)
    if (isFunction(value)) {
      return value()
    }
  }
  //设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建
  function set(object, path, value) {
    path = (typeof path === "string" ? path.match(/\w+/g) : path).map(it =>
      Number(it) >= 0 ? +it : it
    );
    path.reduce((res, item, index) => {
      if (index === path.length - 1) {
        res[item] = value;
      } else if (!res[item] && typeof path[index + 1] === "number") {
        res[item] = [];
      } else if (!res[item] && typeof path[index + 1] === "string") {
        res[item] = {};
      }
      return res[item];
    }, object);
    return object;
  }
  //创建一个object对象自身可枚举属性的键值对数组
  function toPairs(object) {
    let path = []
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        let temp = []
        temp.push(key, object[key])
        path.push(temp)
      }
    }
    return path
  }
  function values(object) {
    return Object.values(object);
  }
  //转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
  function escape(str) {
    return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;");
  }
  //如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。
  function pad(string = '', length = 0, chars = ' ') {
    let left = Math.floor(Math.ceil((length - string.length) / chars.length) / 2)
    for (var i = 0; i < left; i++) {
      string = chars + string
    }
    while (string.length < length) {
      string += chars
    }
    string = string.slice(0, length)
    return string
  }
  //如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。
  function padEnd(string, length = 0, chars = ' ') {
    while (string.length < length) {
      string += chars
    }
    string = string.slice(0, length)
    return string
  }
  //如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。
  function padStart(string, length = 0, chars = ' ') {
    var times = Math.ceil((length - string.length) / chars.length)
    var left = ''
    for (var i = 0; i < times; i++) {
      left += chars
    }
    left = left.slice(0, length - string.length)
    return left + string
  }
  //重复 N 次给定字符串。
  function repeat(string = '', n = 1) {
    let res = ''
    for (var i = 0; i < n; i++) {
      res = res + string
    }
    return res
  }
  //escape的反向版
  function unescape(str = "") {
    return str.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&apos;", "'");
  }
  //创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组
  function range(start = 0, end, step) {
    if (end === undefined) {
      end = start, start = 0
    }
    if (step === undefined) {
      step = start > end ? -1 : 1
    }
    if (step === 0) {
      return Array(Math.ceil(end - start)).fill(start)
    }
    let res = []
    for (var i = start; end < start ? i > end : i < end;) {
      res.push(i)
      i += step
    }
    return res
  }
  //调用 iteratee n 次，每次调用返回的结果存入到数组中。
  function times(n, iteratee = _.identity) {
    let result = []
    iteratee = paint(iteratee)
    for (var i = 0; i < n; i++) {
      result.push(iteratee(i))
    }
    return result
  }
  //这个方法类似_.clone，除了它会递归拷贝 value
  function cloneDeep(value) {
    if (typeof value !== "object" || typeof value === null || this.isRegExp(value)) return value;
    let res = Array.isArray(value) ? [] : {};
    for (let key in value) {
      res[key] = this.cloneDeep(value[key])
    }
    return res
  }
  //这个方法返回首个提供的参数。
  function identity(...values) {
    return values[0]
  }
  //创建一个新数组，将array与任何数组 或 值连接在一起。
  function concat(array, ...values) {
    for (var i of values) {
      if (Array.isArray(i)) {
        array.push(...i)
      } else {
        array.push(i)
      }
    }
    return array
  }
  //创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。
  function matches(src) {
    return bind(isMatch, null, window, src)
  }
  //创建一个返回给定对象的 path 的值的函数。
  function property(path) {
    return function (obj) {
      return get(obj, path)
    }
  }
  //创建一个针对断言函数 func 结果取反的函数
  function negate(predicate) {
    return function (...args) {
      return !predicate(...args)
    }
  }
  //创建一个只能调用 func 一次的函数
  function once(func) {
    let flags = true
    let res
    return function (...args) {
      if (flags) {
        res = func(...args)
        flags = false
      }
      return res
    }
  }
  //创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，
  function spread(fun) {
    return function (ary) {
      return fun.apply(null, ary)
    }
  }
  //创建一个会缓存 func 结果的函数。
  function memoize(f) {
    var map = {};
    return function (args) {
      if (args in map) {
        return f(args)
      } else {
        map[args] = f[args];
      }

    }
  }
  //创建一个返回 value 的函数。
  function constant(value) {
    return () => value
  }
  //.property的反相版本。
  function propertyOf(obj) {
    return path => this.toPath(path).reduce((res, it) => res[it], obj);
  }
  //这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素
  function differenceWith(array, ...args) {
    let func = args[args.length - 1];
    let arg = args[0];
    let ans = [];
    for (let i in array) {
      if (!func(array[i], arg[i])) {
        ans.push(array[i]);
      }
    }
    return ans;
  }
  //创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。
  function dropRightWhile(array, predicate) {
    predicate = paint(predicate)
    let res = array.slice()
    for (var i = array.length - 1; i >= 0; i--) {
      if (!predicate(array[i], i, array)) {
        break
      }
      res.pop()
    }
    return res
  }
  //创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分
  function dropWhile(array, predicate) {
    predicate = paint(predicate)
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i]) === false) {
        return array.slice(i)
      }
    }
  }
  //类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较
  function intersectionBy(array, ...arguments) {
    let predicate = arguments.pop()
    predicate = paint(predicate)
    let res = []
    for (var i = 0; i < array.length; i++) {
      for (var k = 0; k < arguments.length; k++) {
        for (var j = 0; j < arguments[k].length; j++) {
          if (predicate(array[i]) == predicate(arguments[k][j])) {
            res.push(array[i])
          }
        }
      }
    }
    return res
  }
  //这个方法类似_.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。
  function intersectionWith(array, arrays, comparator) {
    let result = []
    let arr = this.flattenDeep(arrays)
    for (let key of array) {
      let arrlength = arr.length
      while (arrlength--) {
        if (comparator(key, arr[arrlength])) {
          result.includes(key) ? result : result.push(key)
        }
      }
    }
    return result
  }
  //获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
  function nth(array, n) {
    if (n > 0) {
      return array[n]
    } else {
      return array[array.length + n]
    }
  }
  //类似_.pull，区别是这个方法接收一个要移除值的数组。
  function pullAll(array, values) {
    let res = []
    for (var i of array) {
      if (values.indexOf(i) == -1) {
        res.push(i)
      }
    }
    return res
  }
  //似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较
  function pullAllBy(array, values, iteratee) {
    iteratee = paint(iteratee)
    let res = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (iteratee(array[i]) == iteratee(values[j])) {
          res.push(array[i])
        }
      }
    }
    return pullAll(array, res)
  }
  //类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较
  function pullAllWith(array, values, comparator) {
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (comparator(array[j], values[i])) {
          array.splice(j, 1)
        }
      }
    }
    return array
  }
  //这个方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。
  function sortedIndexBy(array, value, iteratee) {
    iteratee = paint(iteratee)
    return sortedIndex(array.map(iteratee), iteratee(value))
  }
  //类似_.indexOf，除了它是在已经排序的数组array上执行二进制检索。
  function sortedIndexOf(array, value) {
    let l = 0
    let r = array.length - 1
    while (l <= r) {
      let mid = Math.floor((l + r) >> 2)
      if (array[mid] >= value) {
        r = mid - 1
      } else if (array[mid] <= value) {
        l = mid + 1
      }
    }
    if (l < array.length && array[l] == value) {
      return l
    }
    return -1
  }
  //它返回 value值 在 array 中尽可能大的索引位置（index）。
  function sortedLastIndex(array, value) {
    let index = sortedIndex(array, value)
    while (array[index + 1] <= value) {
      index++
    }
    return index + 1
  }
  //除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序
  function sortedLastIndexBy(array, value, iteratee) {
    iteratee = paint(iteratee)
    for (var i = 0; i < array.length; i++) {
      if (iteratee(value) >= iteratee(array[i]) && iteratee(value) < iteratee(array[i + 1])) {
        return i + 1
      }
    }
  }
  //类似_.lastIndexOf
  function sortedLastIndexOf(array, value) {
    let index = sortedIndex(array, value)
    while (array[index + 1] === value) {
      index++
    }
    return index
  }
  //会优化排序数组。 返回一个新的不重复的数组。
  function sortedUniq(array) {
    let res = []
    let i = 0
    while (i < array.length) {
      if (array[i] !== array[i + 1]) {
        res.push(array[i])
      }
      i++
    }
    return res
  }
  //sortedUniqBy
  function sortedUniqBy(array, predicate) {
    let res = []
    predicate = paint(predicate)
    let i = 0
    while (i < array.length) {
      if (array[i] != array[i + 1]) {
        res.push(array[i])
      }
      i++
    }
    return res
  }
  //获取除了array数组第一个元素以外的全部元素。
  function tail(arr) {
    return arr.length ? arr.slice(1) : []
  }
  //创建一个数组切片，从array数组的起始元素开始提取n个元素。
  function take(array, n = 1) {
    return array.slice(0, n)
  }
  //创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
  function takeRight(array, n = 1) {
    return array.length > n ? array.slice(array.length - n) : array
  }
  //从array数组的最后一个元素开始提取元素，直到 predicate 返回假值
  function takeRightWhile(array, predicate) {
    predicate = paint(predicate)
    for (var i = array.length - 1; i >= 0; i--) {
      if (!predicate(array[i], i, array)) {
        return array.slice(i + 1)
      }
    }
  }
  //从array数组的起始元素开始提取元素，，直到 predicate 返回假值
  function takeWhile(array, predicate) {
    predicate = paint(predicate)
    for (var i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        return array.slice(0, i)
      }
    }
  }
  //类似_.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。
  function unionWith(...array) {
    let comparator = array.pop()
    array = [].concat(...array)
    let res = []
    for (let i = 0; i < array.length; i++) {
      let flags = true
      for (var val of res) {
        if (comparator(val, array[i])) {
          flags = false
          break
        }
      }
      if (flags) res.push(array[i])
    }
    return res
  }
  //返回新的去重后的数组
  function uniqWith(array, comparator) {
    comparator = paint(comparator)
    let res = []
    for (let i of array) {
      let flag = true
      for (let k of res) {
        if (comparator(i, k)) {
          flag = false
        }
      }
      if (flag) {
        res.push(i)
      }
    }
    return res
  }
  //返回重组元素的新数组
  function unzipWith(array, iteratee) {
    let arr = []
    for (var i = 0; i < array[0].length; i++) {
      arr.push(iteratee(array[array.length - 1][i], array[0][i]))
    }
    return arr
  }
  // 返回过滤值后的新数组。
  function xorBy(...arrays) {
    var arr = Array.from(arrays)
    var fun = arr[arr.length - 1]
    var iterator = paint(fun)
    var restarr = arr.slice(0, arr.length - 1)
    var res = restarr[0]
    var tmp = restarr[0].map((val) => iterator(val))
    for (var i = 1; i < restarr.length; i++) {
      for (var j = 0; j < restarr[i].length; j++) {
        var val = iterator(restarr[i][j])
        if (!tmp.includes(val)) {
          res.push(restarr[i][j])
        } else {
          var index = tmp.indexOf(val)
          res.splice(index, 1)
        }
      }
    }
    return res
  }
  //xorWith
  function xorWith(f, l, acton) {
    acton = paint(acton);
    var result = [];
    for (let i in f) {
      for (let j in l) {
        if (acton(f[i], l[j])) {
          break;
        }
        if (!acton(f[i], l[j]) && j == l.length - 1) {
          result.push(f[i]);
        }
      }
    }

    for (let i in l) {
      for (let j in f) {
        if (acton(l[i], f[j])) {
          break;
        }
        if (!acton(l[i], f[j]) && j == f.length - 1) {
          result.push(l[i]);
        }
      }
    }
    return result;
  }
  //这个方法类似_.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
  function zipObject(props, values) {
    let obj = {}
    for (var i = 0; i < props.length; i++) {
      obj[props[i]] = values[i]
    }
    return obj
  }
  //它支持属性路径。
  function zipObjectDeep(props, values) {
    let obj = {}
    for (var i = 0; i < props.length; i++) {
      this.set(obj, props[i], values[i])
    }
    return obj
  }
  //接受一个 iteratee（迭代函数）
  function zipWith(...array) {
    let fuc = array.pop()
    let res = []
    for (var i = 0; i < array[0].length; i++) {
      let path = []
      for (var j = 0; j < array.length; j++) {
        path.push(array[j][i])
      }
      let val = fuc(...path)
      res.push(val)
    }
    return res
  }

  return {
    compact,
    chunk,
    difference,
    join,
    last,
    lastIndexOf,
    reverse,
    sortedIndex,
    drop,
    dropRight,
    fill,
    findIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    every,
    filter,
    find,
    toArray,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    curry,
    differenceBy,
    findLastIndex,
    intersection,
    pull,
    union,
    unionBy,
    uniq,
    uniqBy,
    unzip,
    without,
    xor,
    zip,
    countBy,
    flatMap,
    flattenDepth,
    forEach,
    groupBy,
    keyBy,
    map,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    shuffle,
    size,
    some,
    orderBy,
    sortBy,
    isArguments,
    isArray,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isNaN,
    isError,
    isFinite,
    isFunction,
    isMatch,
    isNil,
    isNull,
    isNumber,
    isObject,
    isRegExp,
    isString,
    isUndefined,
    toArray,
    ceil,
    round,
    assignIn,
    defaults,
    findKey,
    forIn,
    forInRight,
    forOwn,
    forOwnRight,
    functions,
    get,
    has,
    invert,
    invoke,
    keys,
    mapKeys,
    mapValues,
    merge,
    omit,
    pick,
    result,
    set,
    toPairs,
    values,
    escape,
    pad,
    padEnd,
    padStart,
    repeat,
    unescape,
    range,
    times,
    cloneDeep,
    identity,
    concat,
    matches,
    property,
    negate,
    once,
    spread,
    memoize,
    constant,
    propertyOf,
    differenceWith,
    dropRightWhile,
    dropWhile,
    intersectionBy,
    intersectionWith,
    nth,
    pullAll,
    pullAllBy,
    pullAllWith,
    sortedIndexBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    unionWith,
    uniqWith,
    unzipWith,
    xorBy,
    xorWith,
    zipObject,
    zipObjectDeep,
    zipWith,

  }
}()

