# CSP - политика безопасности содержимого

**CSP** - это функция безопасности, которая может помочь предотвратить различные типы атак, включая межсайтовый скриптинг (XSS) и атаки с использованием инъекций данных.
CSP работает, позволяя определить белый список надежных источников, из которых веб-приложение может загружать ресурсы, такие как скрипты, таблицы стилей, изображения и шрифты.
Любые ресурсы, которые явно не занесены в белый список, будут недоступны к загрузке.

Чтобы настроить CSP во внешнем интерфейсе, можно включить мета-тег **Content-Security-Policy** в раздел head HTML-документа.
Значением тега должна быть строка, содержащая одну или несколько директив, определяющих источники контента, которые разрешено загружать браузеру.

Вот пример мета-тега CSP, который позволяет загружать скрипты только из того же источника, что и страница:

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">`

Также можно указать несколько источников для директивы, разделив их пробелом.
Например, если нужно разрешить загрузку скриптов как из того же источника, что и страница, так и из определенного CDN:

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://cdn.example.com">`

## Директивы

Существует множество других директив, которые можно использовать с CSP для управления загрузкой различных типов контента. Некоторые из наиболее часто используемых директив включают:

* **default-src:** Указывает источник по умолчанию для всех типов контента
* **script-src:** Указывает источники, из которых могут быть загружены скрипты.
* **style-src:** Указывает источники, из которых могут быть загружены таблицы стилей.
* **img-src:** Указывает источники, из которых могут быть загружены изображения.
* **font-src:** Указывает источники, из которых могут быть загружены шрифты.
* **connect-src:** Указывает источники, к которым приложение может отправлять сетевые запросы (например, AJAX, WebSocket).
* **frame-src:** Указывает источники, из которых могут быть загружены фреймы.
* **child-src:** Указывает источники, из которых могут быть загружены дочерние фреймы.

Чтобы максимально повысить эффективность CSP, важно тщательно проанализировать использование внешних ресурсов приложением и определить политику, которая допускает только минимально необходимые источники.
Это может помочь снизить риск атак и повысить общую безопасность приложения.

Важно отметить, что в то время как Content-Security-Policy заголовок обеспечивает надежную защиту от многих типов атак, но не полностью исключает возможность межсайтовых скриптовых (XSS) атак. 

## Сценарии использования XSS


**Устаревшие браузеры**

Некоторые старые браузеры могут не полностью поддерживать Content-Security-Policy заголовок, или может поддерживать его таким образом, чтобы его можно было обойти.
Злоумышленники могут использовать это в своих интересах, нацеливаясь на пользователей со старыми браузерами, которые не полностью реализуют CSP.

**Ресурсы, не совместимые с CSP**

Если приложение загружает ресурсы (например, изображения или скрипты) из стороннего домена, который не реализует CSP, злоумышленник потенциально может использовать этот ресурс для выполнения скрипта на странице.

**Неправильная настройка политики**

Неправильная настройка Content-Security-Policy может сделать приложение уязвимым для атак.
Например, если непреднамеренно допускается unsafe-inline или unsafe-eval, злоумышленник потенциально может внедрить вредоносные скрипты на страницу.

**Методы обхода**

Как и в случае с любым механизмом безопасности, злоумышленники постоянно ищут способы обхода защиты CSP.
Были случаи, когда злоумышленники находили способы обхода защиты CSP, с помощью ошибок браузера.

Крайне рекомендуется ознакомиться с [документацией по использованию CSP](https://developer.mozilla.org/ru/docs/Web/HTTP/CSP).