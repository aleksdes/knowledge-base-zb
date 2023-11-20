# Асинхронное программирование

## Определения

- **Асинхронность** - в компьютерном программировании относится к возникновению событий, не зависящих от основного потока программы, и способам обработки таких событий. Это могут быть «внешние» события, такие как поступление сигналов, или действия, инициированные программой, которые происходят одновременно с выполнением программы, без блокировки программы для ожидания результатов. Асинхронный ввод/вывод является примером последней причины асинхронности и позволяет программам выдавать команды устройствам хранения или сетевым устройствам, которые обслуживают эти запросы, в то время как процессор продолжает выполнение программы. Это обеспечивает определенную степень параллелизма.

## Ресурсы:

- [MDN | Асинхронный JavaScript](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous)
- [GitHub | Вы не знаете JavaScript, раздел Асинхронность и Производительность](https://github.com/azat-io/you-dont-know-js-ru/blob/master/async%20%26%20performance/README.md)
- [Промисы](https://learn.javascript.ru/promise) ([MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise))
- [Async/Await](https://learn.javascript.ru/async-await)
- [Сравниваем async/await и then/catch с примерами](https://habr.com/ru/company/skillbox/blog/651781/)

## Инструменты

- [axios](https://github.com/axios/axios)
- [ky](https://github.com/sindresorhus/ky)
