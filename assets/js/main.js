let app = new Vue({
  el: "#app",
  data: {
    message: "Todo list",
    task: []
  },
  methods: {
    addTask: function () {
      task.push(message);
    }
  }
})
