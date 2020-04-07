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

var app2 = new Vue({
  el: '#app2',
  data: {
    year: (new Date()).getFullYear()
  },
  computed: {
    isUrudoshi: function() {
      if ((this.year % 4 == 0 && this.year%100 != 0) ||
      (this.year % 400 == 0)) {
        return true;
      } else {
        return false;
      }
    }
  }
});
