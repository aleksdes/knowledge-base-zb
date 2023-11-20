# Аутентификация и авторизация

Авторизация и аутентификация являются важнейшими аспектами безопасности любого веб-приложения, и существует несколько вариантов, при которых что-то может пойти не так.

## Слабые или предсказуемые пароли

Здесь важно убедиться, что действуют надежные рекомендации для создания паролей. Слабые или легко угадываемые пароли могут представлять серьезную угрозу безопасности, поскольку они могут быть легко скомпрометированы злоумышленниками.
Этот вариант носит рекомендательный характер для пользователя, но также обязан быть валидирован с двух сторон - frontend и backend.

## Небезопасное хранение данных аутентификации

Если приложение хранит данные аутентификации, такие как токены сессии или учетные данные пользователя, локально, важно убедиться, что эти данные хранятся надежно.
Хранение аутентификационных данных в виде открытого текста или таким образом, чтобы их можно было легко перехватить, может привести к несанкционированному доступу к учетным записям пользователей. 
`localStorage.setItem('sessionToken', token);`
В этом примере токен аутентификации хранится в локальном хранилище браузера, которое не является безопасным механизмом хранения.
Злоумышленник, получивший доступ к устройству пользователя, может легко получить доступ к этому токену и использовать его для получения несанкционированного доступа к учетной записи пользователя.

Более безопасным подходом было бы хранить токены аутентификации в файле cookie с флагом HttpOnly и secure.

[Всё о файлах cookie и их безопасности](https://habr.com/ru/post/710578/)

## Отсутствие надлежащей проверки подлинности и авторизации

Пользователь должен проходить надлежащую проверку подлинности и авторизацию, прежде чем разрешать ему выполнять действия, зависящие от ролевой модели.
Например, если приложение позволяет пользователям просматривать или изменять данные, принадлежащие другим пользователям, важно обеспечить наличие соответствующих проверок авторизации для предотвращения несанкционированного доступа. 

Таким образом, необходимо отдавать только тот контент, который может увидеть пользователь, обладая определенной ролью.

## Атаки CSRF (подделка межсайтовых запросов)

Атаки CSRF происходят, когда злоумышленник обманом заставляет пользователя выполнить действие на веб-сайте без его ведома или согласия.
Это может быть сделано путем создания вредоносной ссылки или формы, которая отправляет данные на веб-сайт, или **путем использования уязвимостей в механизмах аутентификации.**
Чтобы предотвратить атаки CSRF, важно использовать токены CSRF или другие механизмы, чтобы гарантировать, что запросы поступают из правильного источника.

```html
<form action="/changePassword" method="POST">
  <input type="hidden" name="_csrf" value="csrfToken">
  <input type="password" name="newPassword">
  <button type="submit">Change Password</button>
</form>
```

В этом примере форма включает скрытое поле ввода с токеном CSRF, сгенерированным на сервере и введенным на страницу.
Когда форма отправлена, интерфейсное приложение включает токен в данные запроса, и сервер проверяет, соответствует ли токен значению, сохраненному в сеансе пользователя или файле cookie.

Если с предыдущими примерами всё довольно просто, то с CSRF могут потребоваться дополнительные разъяснения.

**Токен CSRF** генерируется на сервере и появляется на странице в пользовательском HTTP-заголовке или cookie (или там и там).
Когда пользователь отправляет форму или делает запрос, приложение включает токен в данные запроса, и сервер проверяет, соответствует ли токен значению, сохраненному в сессии пользователя или файле cookie.

Для передачи токена существует специальный заголовок 

`'X-CSRF-Token': csrfToken`

Идеальный вариант - хранить токен в двух местах (заголовок и куки). И если заголовок можно изменить вручную, то заменить куки не получится (из-за флагов безопасности).
Также токен должен быть зашифрован, ведь даже если заголовок с токеном может быть изменен, злоумышленнику все равно потребуется знать правильное значение токена, чтобы выполнить успешный запрос.
Храниться токен должен не слишком долго, хотя это уже работа с сервером и к frontend части относится косвенно.