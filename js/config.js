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
        url: "https://calendar.google.com/calendar/ical/shitikov.n%40gmail.com/public/basic.ics"
    },
    news: {
        feed: 'https://news.yandex.ru/hardware.rss'
    }
}
