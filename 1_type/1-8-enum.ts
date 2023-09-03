{
    /**
     * Enum
     */
    //Javascript 에서는 enum 타입이 존재하지 않아서 TS가 자체적으로 제공함.
    //But, 결과적으로는 사용을 지양함. 마지막 예시에 Days 타입을 지정해도 정확한 타입이 유일하게 지정되지 않고 아무값이나 할당이 됨.
    //결론 : enum 타입은 왠만하면 union 타입으로 대체해서 사용히는것이 안전함.
    //Javascript
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

    //TypeScript
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
