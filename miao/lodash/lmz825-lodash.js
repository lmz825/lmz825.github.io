
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
  function chunk(array, [size]) {
    var res = []
    if (array.lemngth <= 0 || size <= 0) return array
    for (i = 0; i < array.length; i = i + size) {
      res.push(array.splice(i, i + size))
    }
    return res
  }
}()
