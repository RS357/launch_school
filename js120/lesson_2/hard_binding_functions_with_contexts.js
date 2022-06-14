let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greetings: function(name) {
    let currentHour = (new Date.UTC()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
}