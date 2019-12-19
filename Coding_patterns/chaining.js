const obj = {
  value: 1,

  increment() {
    this.value += 1;
    return this;
  },

  add(v) {
    this.value += v;
    return this;
  },

  shout() {
    alert(this.value);
  }
};

obj
  .increment()
  .add(3)
  .shout();
obj.increment();
obj.add(3);
obj.shout();

// create chaining .method()
if (typeof Function.prototype.method !== "function") {
  Function.prototype.method = function(name, implementation) {
    this.prototype[name] = implementation;
    return this;
  };
}

const Person = function(name) {
  this.name = name;
}
  .method("getName", function() {
    return this.name;
  })
  .method("setName", function(name) {
    this.name = name;
    return this;
  });

const a = new Person("Adam");
a.getName();
a.setName("Eve").getName();
