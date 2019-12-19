// каррированная функция add()
// принимает неполный список аргументов
function add(x, y) {
  if (typeof y === "undefined") {
    return function(y) {
      return x + y;
    };
  }

  return x + y;
}

// multiple args
function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
  return function() {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}

function add(x, y) {
  return x + y;
}
// каррировать существующую функцию и получить новую
var newadd = schonfinkelize(add, 5);
newadd(4);
// другой вариант – вызвать новую функцию сразу же
schonfinkelize(add, 6)(7);

// обычная функция
function add(a, b, c, d, e) {
  return a + b + c + d + e;
}

// может обрабатывать любое количество аргументов
schonfinkelize(add, 1, 2, 3)(5, 5);
// может выполнять каррирование в два этапа
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5);
