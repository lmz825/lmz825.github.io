
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
  function difference(array, values) {


    return array.concat(values).filter(function (v, i, array) {

      return array.indexOf(v) === array.lastIndexOf(v);

    });
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
  }
}()
