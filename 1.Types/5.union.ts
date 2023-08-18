{
  // Union Types: OR
  // 발생할수있는 모든 케이스중에 한가지를 담을경우 사용

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  //   function: login -> success,fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: '로그인',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`✨ ${state.response.body}성공`);
    } else {
      console.log(`$😢 {state.reason}`);
    }
  }

  let loginState = login();
  printLoginState(loginState);
}
