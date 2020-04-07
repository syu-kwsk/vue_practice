var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app1 = new Vue({
  el: '#app1',
  data: {
    price: 1000
  },
  filters: {
    number_format: function(val) {
      return val.toLocaleString();
    },
    unit: function(val) {
      return val + '円';
    }
  }
});
