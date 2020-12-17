let app = new Vue({
  el: "#app",
  data: {
    message: " ",
    //Array of tasks
    tasks: [
      "test1",
      "test2",
      "test3"
    ]
  },
  methods: {
    //Function to push the task into the array
    addTask() {
      if (this.message.length >= 4 ) {
        this.tasks.push(this.message);
        this.message = "";
      } else {
        this.message = "Inserisci almeno 4 caratteri"
      };
    },
    //Function to remove the task from array
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
})
