enum Weather {
    Rainy='rainy',
    Sunny='sunny',
    Windy='windy',
    Cloudy='cloudy',

}

enum Visibility {
    Good='good',
    Regular='regular',
    Poor='poor',
}

export type DiaryEntry = {
    id:number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment:string
}