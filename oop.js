class user {
  constructor(username, age, city) {
    this.username = username;
    this.age = age;
    this.city = city;
  }
  login() {
    console.log(`${this.username} logged in`);
  }
  logout() {
    console.log(`${this.username} logged out`);
  }
}

const userone = new user("tobi", 40, "london");
const usertwo = new user("ade", 45, "lagos");
const userthree = new user("wale", 30, "ede");

console.log(userone);
usertwo.logout();
userthree.login();
