{
    const num: number = 1;

    const str: string = 'dosaeun';

    const boal: boolean = false;

    //undefined
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
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
}
