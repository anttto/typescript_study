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

## 4. Union Type (예제1) : 타입의 값을 Or 로 선택함.

A 아니면 B의 타입값을 사용하기 때문에, 명확한 타입의 조건을 주고 키를 선택 해야함.

```
   type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('left');

    type TileSize = 1 | 4 | 8;
    const tile: TileSize = 8;
```

## 5. Union Type (예제2) - 중요포인트 확인 ()

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
    // 중요한 부분
    // 타입( state 에 response 가 존재하는지 여부를 확인하고 값을 사용함) union 타입은 필수
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
result: 라는 구분자 타입의 키를 생성해서 조건에 맞는 값을 반환함

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

## 7. Intersection Types: &(and) 모든 타입의 값을 사용할 수 있음.

(Union Type 이 확실한 타입 선택을 강요한다면 Intersection Type 은 모든 값을 선택 가능함. and 개념)

```
{
    /**
     * Intersection Types: &(and)
     */
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.score, person.employeeId, person.work());
    }

    internWork({
        name: 'dosaeun',
        score: 1,
        employeeId: 123,
        work: () => {},
    });
}
```

## 8. enum Type

1. Javascript 에서는 enum 타입이 존재하지 않아서 TS가 자체적으로 제공함.
2. But, 결과적으로는 사용을 지양함. 마지막 예시에 Days 타입을 지정해도 정확한 타입이 유일하게 지정되지 않고 아무값이나 할당이 됨.
3. 결론 : enum 타입은 왠만하면 union 타입으로 대체해서 사용히는것이 안전함.

```
{

    //Javascript 사용 시
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2; // ....

    const DAYS_ENUM = Object.freeze({
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2,
    });

    const dayOfToday = DAYS_ENUM.MONDAY;
    // console.log(dayOfToday);

    //TypeScript 사용 시 (enum 예시)
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Satarday,
        Sunday,
    }
    let day: Days = Days.Satarday;
    day = Days.Tuesday;
    day = 3;
    console.log(day);

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Satarday' | 'Sunday';
    let dayOfWeek: DaysOfWeek = 'Monday';
    console.log(dayOfWeek);

    //enum 을 사용하면 나쁘지 않을 예시.. (나타내야하는 값들이 장황하게 길거나 지저분한 필요하지않은 문자열일때는 union 타입을 사용하는것이 더 복잡해진다.)
    //고로, 아래와 같이 enum을 사용하면 나쁘지 않음.
    enum Errors {
        Short = 'error message simple version',
        Long = 'error message complicated version',
        Detail = 'error message complicated detail version',
    }
    console.log(Errors.Short);
}


```

## 9. inference Type (지양..)

-   (추론) : 추론을 통한 타입의 결정

```
{
    let text: string = 'hello';
    text = 'qa'; //complete
    // text = 1; //error
    function print(message: string | number) {
        console.log(message);
    }

    print('asdasd');
    print(1);

    function add(x: number, y: number) {
        return x + y;
    }

    const result = add(1, 4);
    console.log(result);
}
```

## 10. Type Assertions

-   타입을 장담하고 선언하는 방법... 지양..

```
{
    //좋지 않은 예시
    function jsStrFunc(): any {
        return 'saeun';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    //에러 예시 (any 타입에서의 Array어써션을 통해 에러가 발생함)
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);
}
```
