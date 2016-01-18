var config = {
    lang: 'ru',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Kursk,RU',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'eng',
            APPID: '3b7b44b961ea9055d66531bd20f0452a'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 1000,
        morning: [
            'Доброе утро!',
            'Хорошего дня!',
            'Как спалось?'
        ],
        afternoon: [
            'Добрый день',
            'Хорошо выглядишь!',
            'Что нового?'
        ],
        evening: [
            'Ух-ты! Выглядишь отлично!',
            'Как прошел день?',
            'Привет!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
    },
    news: {
        feed: 'https://news.yandex.ru/index.rss'
    }
}
