https://lmz825.github.io/miao/lodash/lmz825-lodash.js
var lmz825 = {
  compact: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

