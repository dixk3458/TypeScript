{
  type SuccessState = {
    state: 'success';
  };
  type ErrorState = {
    state: 'fail';
    reason: 'Timeout' | 'Down' | 'OffLine';
  };

  type ResultState = SuccessState | ErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // ...네트워크 연결 로직
      const state: ResultState = {
        state: 'fail',
        reason: 'Timeout',
      };
      return state;
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
