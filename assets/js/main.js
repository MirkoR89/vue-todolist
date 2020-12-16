let app = new Vue({
  el: "#app",
  data: {
    message: "Todo list",
    task: []
  },
  methods: {
    addTask () {
      this.task.push(this.message);
    }
  }
})
