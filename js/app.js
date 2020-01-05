Vue.component('msg-tag', {
  props: ['msg'],
  template: '<h5>{{msg}}<h5>'

})

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

var app2 = new Vue({
  el: '#app2',
  data: {
    message: "hello"  
  }
})
