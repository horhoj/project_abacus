# верстка абакуса.

Я НАДЕЮСЬ ПРАВИЛЬНО ПОНЯЛ ЧТО НУЖНО ТОЛЬКО ДОСКУ СВЕРСТАТЬ? БЕЗ ЛОГИКИ РАБОТЫ АБАКУСА?

А ТО В ЗАДАНИИ НИ СЛОВА ОБ ЭТОМ НЕ БЫЛО

ДЕМО: https://project-abacus-six.vercel.app/

# Используется:

vite, react, typescript, redux-tookit, docker(docker-compose), nginx (для раздачи статики билда), eslint + prettier

# запуск

npm i

npm run dev

# тесты

npm run test

# запуск в докере (протестировано только на линукс, нужны make, docker, docker-compose)

запуск в режиме разработки (порт 3000)

make docker-ddev

запуск в режиме раздачи билда через nginx (порт 80)

make docker-init

разумеется порты можно поменять в настройках
