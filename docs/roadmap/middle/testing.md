# Тестирование

## Определения

- **Unit (модульный) тест - ф**рагмент кода, входные данные которого вы контролируете, чтобы проверить выходные данные. Чтобы тест считался модульным тестом, он должен соответствовать определенным характеристикам, таким как: - Это должно быть быстро. Если выполнение теста занимает 2 минуты, то это не модульный тест. - Он должен быть надежным. Если тест работает только при включенной сети, то это не модульный тест. - Это должно быть заслуживающим доверия. Если вы не уверены, что написанный вами тест будет работать через год, когда связанный с ним производственный код не изменился, то это не модульный тест. - Это должно быть автоматизировано. Если вам нужно нажать кнопку для выполнения теста, то это не модульный тест. Вопреки распространенному мнению, тест может пройти несколько единиц кода, будь то функции, классы или модули.
- **Интеграционный (функциональный) тест** - тест, который не является модульным тестом, является интеграционным тестом. Если он медленный, или если он не детерминирован, или если он обращается к базе данных, то это интеграционный тест.
- **e2e (сквозной) тест** - относится к методу тестирования программного обеспечения, который включает тестирование рабочего процесса приложения от начала до конца. Этот метод в основном направлен на воспроизведение реальных пользовательских сценариев, чтобы система могла быть проверена на предмет интеграции и целостности данных.
- **регрессионный тест** - это набор тестов, направленных на обнаружение дефектов в уже протестированных участках приложения. Делается это совсем не для того, чтобы окончательно убедиться в отсутствии багов, а для поиска и исправления регрессионных ошибок. Регрессионные ошибки – те же баги, но появляются они не при написании программы, а при добавлении в существующий билд нового участка программы или исправлении других багов, что и стало причиной возникновения новых дефектов в уже протестированном продукте.
- **мутационный тест** - включает небольшие изменения кода программы. Если набор тестов не в состоянии обнаружить такие изменения, то он рассматривается как недостаточный. Эти изменения называются мутациями и основываются на мутирующих операторах, которые или имитируют типичные ошибки программистов (например использование неправильной операции или имени переменной) или требуют создания полезных тестов.

## Тест ранеры

- [jest](https://jestjs.io/ru/docs/getting-started)
- [ava](https://github.com/avajs/ava)
- [intern](https://theintern.io/docs.html)

## Ресурсы

- [Лучшие практики написания тестов JS + Node.js](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-ru.md)
- [Написание автотестов](https://learn.javascript.ru/testing-mocha)
- [Тестирование JS с помощью Jest](https://habr.com/ru/post/502302/)
- [YouTube | Тестирование JS](https://www.youtube.com/watch?v=y2emL1fMRyY)
- [YouTube | React testing library](https://www.youtube.com/watch?v=n79PMyqcCJ8)
- [Тестирование React компонентов](https://ru.reactjs.org/docs/testing-recipes.html)
- [Доклад на тему скриншот тестирования](https://hc.zebrains.team/f/175576)

## Инструменты

- [React-resting-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vue-test-utils](https://v1.test-utils.vuejs.org/ru/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Puppeteer](https://pptr.dev/)
- [Playwright](https://github.com/microsoft/playwright)
