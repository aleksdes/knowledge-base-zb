# Матрица компетенций

## Система контроля версий

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Создание репозитория</li>
                    <li>Клонирование репозитория</li>
                    <li>Создание веток</li>
                    <li>Объединение веток</li>
                    <li>Отправка изменений</li>
                    <li>Обновление локального репозитория</li>
                    <li>Использование .gitignore</li>
                    <li>Оформление коммитов</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Работа с удаленными репозиториями</li>
                    <li>Использование тегов</li>
                    <li>Работа с подмодулями, включение одного репозитория в другой</li>
                    <li>Использование команды git stash</li>
                    <li>Работа с конфликтами</li>
                    <li>Merge/Pull request</li>
                    <li>Работа с CI/CD системами в рамках git</li>
                    <li>Понимание особенностей систем ветвления на примере GitFlow, недостатки и преимущества</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Работа с репозиториями большого размера (например git clone --depth)</li>
                    <li>Использование команды git rebase (включая interactive)</li>
                    <li>Использование команды git cherry-pick</li>
                    <li>Использование команды git bisect</li>
                    <li>Работа с подмодулями, обновление версий внешнего репозитория</li>
                    <li>Работа с Git hooks (запуск тестов, форматтеров, husky)</li>
                    <li>Использование Git LFS (хранение больших файлов, видео, изображений)</li>
                    <li>Понимание особенностей систем ветвления и выбор той, которая наиболее подходит проектной системе релизов</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Инфраструктура проектов

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>умение работать с ssh (командная строка, подключение к ide/редактору)</li>
                    <li>умение разворачивать docker (по мануалу)</li>
                    <li>умение работать с командной строкой (перемещение по дереву, операции с файлами и папками, изменение прав доступа)</li>
                    <li>умение работать с npm</li>
                    <li>понимание что такое npm, зачем он нужен, уметь применять его</li>
                    <li>понимание что такое package.json и package-lock.json в чем их отличие и зачем они нужны</li>
                    <li>какие самые востребованные свойства в package.json</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>умение работать с docker и его базовыми командами (docker-compose, docker up и тд) по документации, умеет запускать контейнеры, останавливать, просматривать статус</li>
                    <li>умение конфигурировать webpack</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>знание альтернативных сборщиков (gulp, rollup), понимание разницы между ними</li>
                    <li>тонкая настройка webpack для оптимизации кода</li>
                    <li>навык работы с storybook</li>
                    <li>навык проектирования внешних/внутренних(в рамках проекта) UI-kit</li>
                    <li>понимание архитектурных подходов к проектированию Frontend приложений</li>
                    <li>понимание работы lerna/NX</li>
                    <li>понимание работы CI/CD</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Интеграции

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>работа с rest api (умение построения запросов с параметрами, обработка ответа)</li>
                    <li>типы http запросов (гет, пост и тд)</li>
                    <li>http заголовки</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Способен описать критерии, которым должен соответствовать API, чтобы называться RESTful</li>
                    <li>работа с apollo (умение разбивать запросы на фрагменты graphql, работа с кешированием)</li>
                    <li>умение пользоваться докой (swagger, apidoc)</li>
                    <li>работа со схемами авторизации (JWT, OAuth, Token)</li>
                    <li>Работа с websocket</li>
                    <li>понимание CORS</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Работа с библиотеками автогенерации типов из graphql, swagger</li>
                    <li>Понимание особенностей интеграции браузера с ОС(даты, системная тема, работы с файлами и тд)</li>
                    <li>Знание браузерных api доступных для взаимодействия из веб-страницы</li>
                    <li>Знание и навык исправления проблем с безопасностью на веб-странице</li>
                    <li>Навык работы с BroadcastChannel</li>
                    <li>Навык работы с обсерверами(MutationObserver, IntersectionObserver, и тд)</li>
                    <li>Навык работы с воркерами, в тч ServiceWorker</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## HTML/CSS

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <b>HTML</b>
                    <ul>
                        <li>Опишите базовую структуру HTML-страницы
                            <ul>
                                <li>DOCTYPE</li>
                                <li>html (head, body)</li>
                            </ul>
                        </li>
                        <li>Что такое семантика? Какие семантичные тэги вы знаете?</li>
                        <li>Есть базовые понятия доступности</li>
                        <li>Что такое инлайновый стиль? Можно ли его переопределить?</li>
                        <li>Есть ли у HTML элементов свои дефолтные специфичные стили?</li>
                        <li>Для какого тэга используется атрибут alt и зачем он нужен?</li>
                        <li>Типы списков в HTML?
                            <ul>
                                <li>ul</li>
                                <li>ol</li>
                                <li>dl</li>
                            </ul>
                        </li>
                    </ul>
                <b>JSDOM</b>
                    <ul>
                        <li>Что такое DOM?</li>
                    </ul>
                <b>CSS</b>
                    <ul>
                        <li>Варианты добавление CSS стилей на страницу?</li>
                        <li>Что такое css-поток?</li>
                        <li>Типы позиционирования в CSS?
                            <ul>
                                <li>static</li>
                                <li>relative</li>
                                <li>absolute</li>
                                <li>fixed</li>
                                <li>sticky</li>
                            </ul>
                        </li>
                        <li>Что такое блочная модель CSS?</li>
                        <li>Что такое селектор? И какие селекторы существуют?</li>
                        <li>Что такое псевдоклассы?
                            <ul>
                                <li>:hover</li>
                                <li>:focus</li>
                                <li>:active</li>
                            </ul>
                        </li>
                        <li>Что такое псевдоэлементы?
                            <ul>
                                <li>::before</li>
                                <li>::after</li>
                            </ul>
                        </li>
                        <li>Что такое специфичность селектора?</li>
                        <li>Как считать вес/приоритет селектора?</li>
                        <li>Разница между margin и padding?</li>
                        <li>Разница между display: none и visibility: hidden?</li>
                        <li>Flex-box
                            <ul>
                                <li>вопрос про оси flex-box</li>
                                <li>flex-shrink</li>
                                <li>flex-basis</li>
                                <li>flex-grow</li>   
                            </ul>
                        </li>
                        <li>Пользовался одним из препроцессоров на уровне базовых фич</li>
                    </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Использовать все "фичи" препроцессоров (циклы, миксины и тд)</li>
                    <li>Единицы измерения в CSS, какие известны, какими чаще всего приходилось пользоваться?
                        <ul>
                            <li>чем отличается rem от em?</li>
                        </ul>
                    </li>
                    <li>Display: grid приходилось ли пользоваться?
                        <ul>
                            <li>для чего он нужен?</li>
                        </ul>
                    </li>
                    <li>БЭМ
                        <ul>
                            <li>Правильно его использует</li>
                            <li>Понимает какие проблемы он решает</li>
                        </ul>
                    </li>
                    <li>следит за can-i-use</li>
                    <li>понимает reflow/repaint</li>
                </ul>
                <b>JSDOM</b>
                <ul>
                    <li>Что такое распространение события (Event Propagation)?</li>
                    <li>Что такое делегирование событий (Event Delegation)?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>знает что такое web-компоненты и уместно использует их</li>
                    <li>хорошее понимание reflow/repaint</li>
                    <li>Переменные css</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## JavaScript

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Типы данных</li>
                    <li>Разница между «let», «const» и «var»</li>
                    <li>Разница между null и undefined</li>
                    <li>Операторы «И» и «ИЛИ» (&& и ||)</li>
                    <li>Замыкания</li>
                    <li>Область видимости</li>
                    <li>Event loop</li>
                    <li>Event bubbling/capturing</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Разница между function declaration и function expression</li>
                    <li>Типы таймеров в JavaScript и как с ними работать (setTimeout, setInterval)</li>
                    <li>Расширенные ответы про: замыкания, event loop, область видимости</li>
                    <li>Понимание работы структур данных(Map, Set)</li>
                    <li>Навык работы с Symbol</li>
                    <li>Что такое Hoisting (поднятие)</li>
                    <li>Как реализована асинхронность в однопоточном JS</li>
                    <li>Что такое Promise?</li>
                    <li>Есть ли приоритет при одновременном исполнении setTimeout и Promise?</li>
                    <li>Что делать, если у нас несколько запросов нужно отправить параллельно и отреагировать их результаты? (Promise.all)</li>
                    <li>Что такое async await?</li>
                    <li>Умение грамотно разбивать код (использование хелперов, миксинов и тд)</li>
                    <li>Чистые функции</li>
                    <li>Функции высшего порядка</li>
                    <li>Понимание сложности алгоритмов</li>
                    <li>Знание базовых алгоритмов(бинарный поиск, быстрая сортировка и тд)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Понимание используемых паттернов программирования</li>
                    <li>Следит за обновлениями спецификации языка</li>
                    <li>Понимание работы JS на уровне движка (hoisting, механизм работы замыканий)</li>
                    <li>Понимание работы прототипов и наследования(разница между __proto__ и prototype, как происходит дефолтное наследование, на что ссылается __proto__ у разных сложных типов, есть ли __proto__ у объектов типа X.prototype)</li>
                    <li>Понимание работы лексического окружения(принцип построения и структура объекта окружения)</li>
                    <li>Продвинутые навыки работы с асинхронностью(знание методов промисов, понимание сигнатуры обработчиков, полное понимание того как обрабатываются asynс функции)</li>
                    <li>Глубокие знания работы контекста функций(привязка контекста, кейсы потери контекста)</li>
                    <li>Глубокое понимание преобразования типов(преобразование сложных типов, автоматический вызов методов преобразования)</li>
                    <li>Каррирование и частичное применение функций</li>
                    <li>Глубокое понимание работы с event loop, в тч методы requestAnimationFrame, requestIdleCallback</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Тестирование

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>не использует тестирование</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>использует jest</li>
                    <li>знает разницу между юнит-тестами и интеграционными тестами</li>
                    <li>Различие между тестированием снапшотами и скриншотами</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>пишет код по TDD</li>
                    <li>умеет писать e2e тесты</li>
                    <li>Опыт тестирование снапшотами</li>
                    <li>Опыт тестирование скриншотами</li>
                    <li>Опыт конфигурации тестов для разных типов приложений</li>
                    <li>Опыт настройки тестового окружения для разных кейсов</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Типизация

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>понимает особенности типизации</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Написание типов</li>
                    <li>Понимание различий составных типов и интерфейсов</li>
                    <li>Иерархия типов (от unknown до never)</li>
                    <li>Понимание и применение <a href="https://www.typescriptlang.org/docs/handbook/2/generics.html" target="_blank" rel="noreferrer">обобщенных</a></li>
                    <li><a href="https://www.typescriptlang.org/tsconfig#Strict_Type_Checking_Options_6173" target="_blank" rel="noreferrer">Понимание и использование всех строгих правил</a></li>
                    <li><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noreferrer">Utility Types</a> (Pick, Omit, Required, Partial, Readonly, Exclude, Record, etc)</li>
                    <li>Механизм <a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html" target="_blank" rel="noreferrer">Declaration merging</a></li>
                    <li>Применение <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions" target="_blank" rel="noreferrer">Discriminated unions</a></li>
                    <li>Понимание отличий номинативной и структурной типизации</li>
                    <li>Понимание транспиляции и компиляции</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Разработка сложных, составных типов</li>
                    <li>Продумывание типов перед реализацией</li>
                    <li>Владение <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards" target="_blank" rel="noreferrer">type guards</a></li>
                    <li>Применение инструментов для проверки типов в рантайме</li>
                    <li>Понимание <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html" target="_blank" rel="noreferrer">сужения типов</a></li>
                    <li>Понимание <a href="https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" target="_blank" rel="noreferrer">маппинга типов</a></li>
                    <li>Понимание работы ключевого слова asserts</li>
                    <li>Понимание работы с условными типами, в тч ключевое слово infer</li>
                    <li>Понимание работы <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank" rel="noreferrer">декораторов</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Vue.js

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Знание хуков жизненного цикла</li>
                    <li>Понимание принципа "data down events up", пропсы</li>
                    <li>Понимание стейт менеджмента (для чего и как работает), vuex или pinia</li>
                    <li>Vue router и его возможности</li>
                    <li>Важность декомпозиции компонентов</li>
                    <li>Как работает реактивность в общих словах</li>
                    <li>Отличие options API и composition API</li>
                    <li>v-if, v-show, v-for + v-if, :key</li>
                    <li>component :is</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>$nextTick</li>
                    <li>slots</li>
                    <li>Глобальные директивы, плагины</li>
                    <li>Работа с v-model и множеством v-model</li>
                    <li>Оптимальное использование роутера (динамические роуты, хуки)</li>
                    <li>Организация архитектуры и файловой структуры в соответствие с best practices</li>
                    <li>Понимание работы серверного рендеринга и использование Nuxt.js</li>
                    <li>Lazy-loading, hydration, динамические компоненты</li>
                    <li>Тестирование компонентов</li>
                    <li>Опыт работы со вспомогательными библиотеками</li>
                    <li>Переходы и анимации Transition</li>
                    <li>Использование Teleport</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>уверенные ответы (более 85%) на из раздела на мидл разработчика</li>
                    <li>Опыт использования vue2, quasar, vuetify, vee-validate, nuxt, прочих библиотек</li>
                    <li>Уметь написать обертки для любых компонентов</li>
                    <li>Знать best practices и bad practices, уметь объяснить, почему та или иная практика является хорошей или плохой</li>
                    <li>Уметь работать с виртуализацией данных (длинные таблицы, много DOM элементов)</li>
                    <li>Понимание оптимизации работы компонентов и приложения в целом. Имеется опыт улучшения быстродействия, борьбы с утечками памяти, безопасностью</li>
                    <li>Умение использовать рендер-функции, понимание работы классовых компонентов</li>
                    <li>Опыт внедрения Typescript, тестирования</li>
                    <li>Опыт работы с GraphQL, Apollo</li>
                    <li>Документирование кода, настройка линтера, babel</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## React.js

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Создание компонентов с помощью <a href="https://ru.reactjs.org/docs/react-component.html#the-component-lifecycle" target="_blank" rel="noreferrer">create-react-app</a>, так и без него используя webpack/babel</li>
                    <li><a href="https://ru.reactjs.org/docs/components-and-props.html" target="_blank" rel="noreferrer">Умение писать классовые и функциональные компоненты</a></li>
                    <li><a href="https://ru.reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">Понимание особенностей JSX разметки</a></li>
                    <li>Понимание разницы и назначения props и state</li>
                    <li><a href="https://ru.reactjs.org/docs/composition-vs-inheritance.html" target="_blank" rel="noreferrer">Композиция и наследование в react</a></li>
                    <li><a href="https://ru.reactjs.org/docs/react-component.html#the-component-lifecycle" target="_blank" rel="noreferrer">Жизненный цикл компонента и его методы</a></li>
                    <li>Основные хуки (<a href="https://ru.reactjs.org/docs/hooks-reference.html#usestate" target="_blank" rel="noreferrer">useState</a>,
                        <a href="https://ru.reactjs.org/docs/hooks-reference.html#useeffect" target="_blank" rel="noreferrer">useEffect</a>,
                        <a href="https://ru.reactjs.org/docs/hooks-reference.html#usereducer" target="_blank" rel="noreferrer">useReducer</a>,
                        <a href="https://ru.reactjs.org/docs/hooks-reference.html#usecallback" target="_blank" rel="noreferrer">useCallback</a>,
                        <a href="https://ru.reactjs.org/docs/hooks-reference.html#useref" target="_blank" rel="noreferrer">useRef</a>,
                        <a href="https://ru.reactjs.org/docs/hooks-reference.html#usememo" target="_blank" rel="noreferrer">useMemo</a>)
                    </li>
                    <li>Роутинг приложения с <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">react-router</a></li>
                    <li><a href="https://ru.reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noreferrer">Использование prop-types</a></li>
                    <li><a href="https://ru.reactjs.org/docs/uncontrolled-components.html" target="_blank" rel="noreferrer">Управляемые и неуправляемые компоненты</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li><a href="https://ru.reactjs.org/docs/higher-order-components.html" target="_blank" rel="noreferrer">Использование Higher-Order Component (HOC), их минусы</a></li>
                    <li><a href="https://ru.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">React Context</a>, <a href="https://blog.isquaredsoftware.com/2021/01/context-redux-differences/" target="_blank" rel="noreferrer">почему не стм?</a></li>
                    <li><a href="https://ru.reactjs.org/docs/hooks-custom.html" target="_blank" rel="noreferrer">Custom hooks, особенности использования</a></li>
                    <li><a href="https://ru.reactjs.org/docs/portals.html" target="_blank" rel="noreferrer">Порталы</a></li>
                    <li><a href="https://ru.reactjs.org/docs/error-boundaries.html" target="_blank" rel="noreferrer">Обработка ошибок - Error Boundary</a></li>
                    <li><a href="https://ru.reactjs.org/docs/code-splitting.html#reactlazy" target="_blank" rel="noreferrer">Динамические импорты React Lazy</a></li>
                    <li><a href="https://ru.reactjs.org/docs/forwarding-refs.html" target="_blank" rel="noreferrer">Перенаправление рефов, для чего необходимо</a></li>
                    <li><a href="https://ru.reactjs.org/docs/optimizing-performance.html" target="_blank" rel="noreferrer">Применение профилирования, оптимизация производительности</a></li>
                    <li><a href="https://ru.reactjs.org/docs/react-api.html#reactpurecomponent" target="_blank" rel="noreferrer">PureComponent</a>, <a href="https://ru.reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noreferrer">memo</a>, сценарии их использования, недостатки</li>
                    <li>Использование различных стейт менеджеров (redux, mobx, effector, recoil)</li>
                    <li><a href="https://github.com/facebook/flux/tree/master/examples/flux-concepts" target="_blank" rel="noreferrer">Flux концепция</a></li>
                    <li><a href="https://medium.com/swlh/react-state-batch-update-b1b61bd28cd2" target="_blank" rel="noreferrer">Пакетное обновление состояния</a></li>
                    <li><a href="https://ru.reactjs.org/docs/reconciliation.html" target="_blank" rel="noreferrer">Механизмы согласования</a></li>
                    <li>Понимание работы серверного рендеринга и использование <a href="https://ru.reactjs.org/docs/create-a-new-react-app.html#nextjs" target="_blank" rel="noreferrer">next.js</a></li>
                    <li>Генератор статических сайтов <a href="https://ru.reactjs.org/docs/create-a-new-react-app.html#gatsby" target="_blank" rel="noreferrer">gatsby</a></li>
                    <li>Детальная настройка сборки проекта для develop и production</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Понимание работы react на уровне ядра, <a href="https://github.com/acdlite/react-fiber-architecture" target="_blank" rel="noreferrer">React Fiber</a></li>
                    <li>Умение создавать библиотеки компонентов</li>
                    <li><a href="https://ru.reactjs.org/docs/concurrent-mode-intro.html" target="_blank" rel="noreferrer">Конкурентный режим</a></li>
                    <li><a href="https://ru.reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html" target="_blank" rel="noreferrer">Серверные компоненты</a></li>
                    <li>Глубокое понимание работы рендеринга(замыкание рендера, сложные кейсы взаимодействия со стейтом и Рефами)</li>
                    <li>Глубокий навык оптимизации рендеринга(понимание работы сравнения пропов в memo, навык условного ограничения рендера)</li>
                    <li>Глубокое понимание работы с redux/toolkit(механизмы работы хуков useSelector/useDispatch, работа с rtk-query, построение архитектуры стейт-менеджемента в приложении)</li>
                    <li>Понимание работы библиотеки <a href="https://react-query-v3.tanstack.com/" target="_blank" rel="noreferrer">React Query</a>(кейсы использования, основные концепции)</li>
                    <li>навык работы с <a href="https://ru.reactjs.org/docs/test-renderer.html" target="_blank" rel="noreferrer">тестовым рендерером</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## React Native

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Разворачивание проекта с помощью CLI</li>
                    <li>Настройка рабочего окружения
                        <ul>
                            <li>настройка IDE (Android Studio, Xcode etc)</li>
                            <li>настройка дебаггера (JS, native logs, state manager logs)</li>
                            <li>настройка линтера и тд</li>
                        </ul>
                    </li>
                    <li>Умение работать с react-navigation</li>
                    <li>Умение выпускать релиз в сторы</li>
                    <li>Понимание flex-layout</li>
                    <li>React компетенции</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>
                <ul>
                    <li>Умение создавать анимации с помощью reanimated и др инструментов</li>
                    <li>Тестирование компонентов</li>
                    <li>Понимание разных архитектур</li>
                    <li>Продвинутая работа с данными</li>
                    <li>Оптимизация и работа с профайлером</li>
                    <li>Crash-report / analytic инструменты</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>
                <ul>
                    <li>Работа с нативными модулями</li>
                    <li>Работа с локальными БД (realm etc)</li>
                    <li>Понимание архитектуры react-native изнутри</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Angular

<table>
    <tbody>
        <tr>
            <th>Junior</th>
            <td>
                <ul>
                    <li>Умение работать с Angular CLI</li>
                    <li>Знание осноных сущностей Angular:
                        <ul>
                            <li>Components</li>
                        <li>Templates</li>
                        <li>Directives</li>
                        <li>Dependency injection</li>
                        </ul>
                    </li>
                    <li>Базовое понимание RXjs</li>
                    <li>Понимание AppRoutingModule</li>
                    <li>Понимание работы одного из стейт менеджеров NGRX, NGXS или Akita</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Middle</th>
            <td>В процессе...</td>
        </tr>
        <tr>
            <th>Senior</th>
            <td>В процессе...</td>
        </tr>
    </tbody>
</table>
