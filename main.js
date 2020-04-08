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

var app3 = new Vue({
  el: '#app3',
  data: {
    color: '#000000',
    red: 0,
    green: 0,
    blue: 0
  },
  computed: {
    colorElement: function() {
      return [this.red, this.green, this.blue];
    }
  },
  watch: {
    colorElement: function(newRGB, oldRGB) {
      var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
      var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
      var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
      this.color = '#' + r + g + b;
    },
    color: function(newColor, oldColor) {
      this.red = parseInt(newColor.substr(1,2), 16);
      this.green = parseInt(newColor.substr(3,2), 16);
      this.blue = parseInt(newColor.substr(5,2), 16);
    }
  }
});
