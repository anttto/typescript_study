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
