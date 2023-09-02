{
    /**
     * Union Type : or
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('left');

    type TileSize = 1 | 4 | 8;
    const tile: TileSize = 8;

    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function fetchLogin1(): LoginState {
        return {
            response: {
                body: 'gggg',
            },
        };
    }
    function printLoginState1(state: LoginState) {
        if ('response' in state) {
            console.log(`로그인 성공 ${state.response.body}`);
        } else {
            console.log(`로그인 실패 ${state.reason}`);
        }
    }
}
