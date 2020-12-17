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
      document.addEventListener('keyup', e => {
        console.log(e);
        if (e.key === 13) {
          app.addTask();

        }
      });
    }
  }
})
