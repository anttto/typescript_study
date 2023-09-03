/**
 * Type Inference (추론) : 추론을 통한 타입의 결정
 */

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
