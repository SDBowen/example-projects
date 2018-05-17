class GitHub {
  constructor() {
    this.client_id = userID;
    this.client_seceret = userSeceret;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_seceret=${this.client_seceret}`
    );

    const profile = await profileResponse.json();

    return {
        profile
    }
  }
}
