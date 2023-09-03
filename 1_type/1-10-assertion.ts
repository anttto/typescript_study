{
    /**
     * Type Assertions (타입을 장담하고 선언하는 방법... 지양..)
     */

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
