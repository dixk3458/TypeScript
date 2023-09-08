{
  class TimeOutError extends Error {}
  class OffLineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new TimeOutError();
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log('catched!!');
        console.log('다시 로그인 시도');
      }
    }
  }

  const client = new NetworkClient();
  const user = new UserService(client);
  const app = new App(user);
  app.run();
}
