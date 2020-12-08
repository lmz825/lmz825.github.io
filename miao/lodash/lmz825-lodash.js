
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
  function drop(array, n) {
    array.splice(0, n)
    return array
  }
  //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  function dropRight(array, n) {
    for (i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  function fill(array, value, start, end) {
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
  }
}()
