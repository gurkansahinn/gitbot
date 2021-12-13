declare const enum CronTypes {
    SECOND_LOOP = `* * * * * *`,
    MINUTE_LOOP = `*/1 * * * *`,
    DAY_LOOP = `0 0 * * *`
}