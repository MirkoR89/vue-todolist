let app = new Vue({
  el: "#app",
  data: {
    message: " ",
    tasks: [
      "test1",
      "test2",
      "test3"
    ]
  },
  methods: {
    addTask() {
      this.tasks.push(this.message);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    mounted() {
      window.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          app.callEvent();
        }
      });
    }
  }
})
