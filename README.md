# typescript_study

TypeScript 스터디 - 뿌셔버리자

## 1. 기본 타입 정의

```
    const num: number = 1;
    const str: string = 'dosaeun';
    const boal: boolean = false;

    //undefined
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefineQ {
        return undefined;
    }

    //null - 지양..
    let person: number | null;
    person = null;
    person = 1;

    //nuknown & any (잘모르겠는 타입 & 어떤타입이든 들어와도 돼) - 지양....
    let notSure: unknown = 0;
    let anything: any = 0;

    //void (아무것도 리턴하지 않는 함수 타입의 경우)
    function print(): void {
        console.log('hello');
    }

    //never (절대 리턴하지 않는 함수 타입)
    function throwError(message: string): never {
        throw new Error(message);
    }

    //object - 지양... (타입의 정의가 약간 불분명함)
    let obj: object;
    function accept(obj: object) {
        accept({ name: 'dosaeun' });
    }

```

## 2. 함수 타입 정의

```
{
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // function jsFetchNum(id) {
    //     //code...
    //     //code...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // function jsFetchNum2(id: string): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Go');
    printName('Awwl', undefined);

    //Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    function addNumber(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumber(3, 4));
}
```

## 3. Type Alias

-   타입을 직접 만들수 있음.

```
    {
        type Text = string;
        type Num = number;
        type Hobby = {
        name: string;
        years: number;
    };
    const name: Text = 'dosaeun';
    const age: Num = 20;
    const hobby: Hobby = { name: 'illustration', years: 10 };
}
```

## 4. Union Type (예제1)

```
   type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('left');

    type TileSize = 1 | 4 | 8;
    const tile: TileSize = 8;
```

## 5. Union Type (예제2)

```
//로그인 성공or실패 반환 타입 지정
type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function fetchLogin(): LoginState {
        return {
            response: {
                body: 'gggg',
            },
        };
    }
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`로그인 성공 ${state.response.body}`);
        } else {
            console.log(`로그인 실패 ${state.reason}`);
        }
    }
```

## 6. 필수 타입! Discriminated Union

(Union Type 에 보다 더 명확한 공통의 타입 내부 구분자 지정)

```
{
    type SuccessState = {
        result: 'success';  //이녀석 추가
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';     //이녀석 추가
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function fetchLogin(): LoginState {
        return {
            result: 'success',      //이런식으로 구분자를
            response: {
                body: 'Logged in!',
            },
        };
    }
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {   //조건문 변경
            console.log(`로그인 성공 ${state.response.body}`);
        } else {
            console.log(`로그인 실패 ${state.reason}`);
        }
    }
}
```
