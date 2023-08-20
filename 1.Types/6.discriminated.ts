{
  //   function: login -> success,fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  //   Scope 에러 없애기 위해 여기서만 Arrow function 사용
  const login = (): LoginState => {
    return {
      result: 'success',
      response: {
        body: '로그인',
      },
    };
  };

  const printLoginState = (state: LoginState) => {
    if (state.result === 'success') {
      console.log(`✨ ${state.response.body}성공`);
    } else {
      console.log(`$😢 {state.reason}`);
    }
  };

  let loginState = login();
  printLoginState(loginState);
}
