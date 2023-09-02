{
    //Array
    const fruits: string[] = ['ss', 'aa'];
    const score1: number[] = [1, 3, 5];
    const score2: Array<number> = [1, 3, 5];
    function printArray(fruits: readonly string[]) {}

    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
}
