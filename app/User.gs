class User {
  constructor() {
    this.user = Session.getActiveUser();
  }

  getEmail() {
    return this.user.getEmail();
  }
}
