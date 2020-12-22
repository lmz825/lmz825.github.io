
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
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    var index = fromIndex + 1
    while (index--) {
      if (array[index] === value) {
        return index
        break
      }
    }
    return index
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
    for (i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }
  //工具 比较两个对象是否相同
  function DeepComparsion(obj1, obj2) {
    let key1 = [];
    let key2 = [];
    for (let key in obj1) {
      key1.push(key);
    }
    for (let key in obj2) {
      key2.push(key);
    }
    if (key1.length !== key2.length) return false;
    for (key in obj1) {
      if (typeof obj1[key] != "object" && typeof obj2[key] != "object") {
        if (obj1[key] != obj2[key]) return false;
      } else {
        if (!DeepComparsion(obj1[key], obj2[key])) return false;
      }
    }
    return t
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
  function find(collection, predicate = _.identity) {
    var res
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
    var num = 0
    for (i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        num = array[i]
      }
    }
    return num
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
  //建一个元素数组。 以 iteratee 处理的结果升序排序。
  function sortBy(collection, iteratees) {

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
    sortBy,
  }
}()
