var app = new Vue({
  el: '#app',
  data: {
    message: 'hello, world',
    button_message: 'Hey!',
    now: new Date().toLocaleString(),
    seen: false
  },
  methods: {
    hello: function() {
      if (this.seen) {
        this.button_message = 'Again!'
      }
      else {
        this.button_message = 'Cancel'
      }
      this.seen = !(this.seen)
    }
  }
})
