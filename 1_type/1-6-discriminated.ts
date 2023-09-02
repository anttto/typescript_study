{
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

    function fetchLogin(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'Logged in!',
            },
        };
    }
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`로그인 성공 ${state.response.body}`);
        } else {
            console.log(`로그인 실패 ${state.reason}`);
        }
    }
}
