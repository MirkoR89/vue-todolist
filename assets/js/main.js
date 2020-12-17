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
      if (this.message.length >= 4 ) {
        this.tasks.push(this.message);
        this.message = "";
      } else {
        this.message = "Inserisci almeno 4 caratteri"
      };
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
})
