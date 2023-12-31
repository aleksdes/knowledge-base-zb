# Модули и Cкрипты

Более подробно:

**Статья на MDN**: [https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules)

**Learn.JavaScript**:  [https://learn.javascript.ru/](https://learn.javascript.ru/)

**Ещё одна статья**: [https://ru.hexlet.io/blog/posts/skripty-moduli-i-biblioteki#biblioteki-i-utility-komandnoy-stroki](https://ru.hexlet.io/blog/posts/skripty-moduli-i-biblioteki#biblioteki-i-utility-komandnoy-stroki)

## **Скрипты: async, defer**

В современных сайтах скрипты обычно «тяжелее», чем HTML: они весят больше, дольше обрабатываются.

Когда браузер загружает HTML и доходит до тега `<script>...</script>`, он не может продолжать строить DOM. Он должен сначала выполнить скрипт. То же самое происходит и с внешними скриптами `<script src="..."></script>`: браузер должен подождать, пока загрузится скрипт, выполнить его, и только затем обработать остальную страницу.

Это ведёт к двум важным проблемам:

1. Скрипты не видят DOM-элементы ниже себя, поэтому к ним нельзя добавить обработчики и т.д.
2. Если вверху страницы объёмный скрипт, он «блокирует» страницу. Пользователи не видят содержимое страницы, пока он не загрузится и не запустится:

## **defer**

Атрибут **`defer`** сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда DOM дерево будет полностью построено.

Вот тот же пример, что и выше, но с **`defer`**:

```html
<p>...содержимое перед скриптом...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- отображается сразу же -->
<p>...содержимое после скрипта...</p>
```

- Скрипты с **`defer`** никогда не блокируют страницу.
- Скрипты с **`defer`** всегда выполняются, когда дерево DOM готово, но до события `DOMContentLoaded`.

Отложенные с помощью **`defer`** скрипты сохраняют порядок относительно друг друга, как и обычные скрипты.

Поэтому, если сначала загружается большой скрипт, а затем меньшего размера, то последний будет ждать.

## **async**

Атрибут **`async`** означает, что скрипт абсолютно независим:

- Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
- Событие `DOMContentLoaded` и асинхронные скрипты не ждут друг друга:
    - `DOMContentLoaded` может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова),
    - …так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)
- Остальные скрипты не ждут `async`, и скрипты c`async` не ждут другие скрипты.

Так что если у нас есть несколько скриптов с `async`, они могут выполняться в любом порядке. То, что первое загрузится – запустится в первую очередь:

```html
<p>...содержимое перед скриптами...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM готов!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...содержимое после скриптов...</p>
```

1. Содержимое страницы отображается сразу же : `async` его не блокирует.
2. `DOMContentLoaded` может произойти как до, так и после `async`, никаких гарантий нет.
3. Асинхронные скрипты не ждут друг друга. Меньший скрипт `small.js` идёт вторым, но скорее всего загрузится раньше `long.js`, поэтому и запустится первым. То есть, скрипты выполняются в порядке загрузки.

Асинхронные скрипты очень полезны для добавления на страницу сторонних скриптов: счётчиков, рекламы и т.д. Они не зависят от наших скриптов, и мы тоже не должны ждать их:

```html
<!-- Типичное подключение скрипта Google Analytics -->
<script async src="https://google-analytics.com/analytics.js"></script>
```

По мере роста нашего приложения, мы обычно хотим разделить его на много файлов, так называемых «модулей». Модуль обычно содержит класс или библиотеку с функциями.

Долгое время в JavaScript отсутствовал синтаксис модулей на уровне языка. Это не было проблемой, потому что первые скрипты были маленькими и простыми. В модулях не было необходимости.

Но со временем скрипты становились всё более и более сложными, поэтому сообщество придумало несколько вариантов организации кода в модули. Появились библиотеки для динамической подгрузки модулей.

**Модуль**

Начнем с терминологии. Модуль — это файл, содержащий определения функций, классов и других сущностей (в зависимости от языка). 
В разных языках модули называют разными словами, но суть от этого не меняется.

Модули могут загружать друг друга и использовать директивы **`export`** и **`import`**, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:

- **`export`** отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
- **`import`** позволяет импортировать функциональность из других модулей.

Ниже пример модуля, содержащего класс `User`:

```js
// По соглашениям, принятым в JavaScript,
// этот файл должен называться User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
```

Сами по себе модули не являются законченными программами. Их нельзя (бессмысленно) выполнять напрямую, например, запустив в командной строке.

Модули предназначены для использования другими модулями (или скриптами). Обычно в языках для этого есть либо механизм импортов, либо механизм автозагрузки, либо и то и другое вместе. В JavaScript, чтобы получить доступ к определениям внутри какого-то модуля, его нужно импортировать:

```js
// Какой-то модуль, который использует класс User
import User from './User';

// Определение функции
const create = (data) => {
  const user = new User(data);
  return user.save()
};
```

Так как модули поддерживают ряд специальных ключевых слов, и у них есть ряд особенностей, то необходимо явно сказать браузеру, что скрипт является модулем, при помощи атрибута `<script type="module">`.

Вот так:

```html
<!doctype html>
<script type="module">
  import User from './User';

  const create = (data) => {
  const user = new User(data);
  return user.save()
};
</script>
```

**Основные возможности модулей**

Чем отличаются модули от «обычных» скриптов?

Есть основные возможности и особенности, работающие как в браузере, так и в серверном JavaScript.

### Всегда «use strict»

В модулях всегда используется режим **`use strict`.** Например, присваивание к не объявленной переменной вызовет ошибку.

```html
<script type="module">
  a = 5; // ошибка
</script>
```
